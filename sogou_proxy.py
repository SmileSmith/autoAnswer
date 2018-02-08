import socket
from http.server import BaseHTTPRequestHandler, HTTPServer
from urllib.parse import urlparse
from urllib.request import Request, urlopen
from urllib.error import HTTPError, URLError
from http import HTTPStatus

ANDROID_USER_AGENT = "Mozilla/5.0 (Linux; Android 7.1.1; Google Pixel - \
7.1.0 - API 25 - 1080x1920 Build/NMF26Q; wv) AppleWebKit/537.36 (KHTML, like Gecko) \
Version/4.0 Chrome/52.0.2743.100 Mobile Safari/537.36 SogouSearch Android1.0 version3.0 AppVersion/5802"

PORT = 8888

socket.setdefaulttimeout(3.0) 

class MySogouPushHandler(BaseHTTPRequestHandler):
    """处理各类请求的控制器"""

    def do_GET(self):
        """处理GET请求"""
        querypath = urlparse(self.path)
        apipath = querypath.path
        if apipath.startswith("/allinone/sogou/api/anspush"):
            self.proxy_pass("/allinone/sogou/api/anspush", "https://wdpush.sogoucdn.com/api/anspush",
                            Referer="https://assistant.sogoucdn.com/v5/cheat-sheet?channel=bwyx", Host="wdpush.sogoucdn.com")

    def proxy_pass(self, orgin_path, target_host_path, **my_headers):
        """反向代理"""
        headers = self.headers
        for key in my_headers:
            if headers.get(key):
                headers.replace_header(key, my_headers[key])
            else:
                headers.add_header(key, my_headers[key])
        headers.replace_header("User-Agent", ANDROID_USER_AGENT)
        req = Request(self.path.replace(
            orgin_path, target_host_path), headers=headers)
        data = None
        try:
            res = urlopen(req, timeout=3)
        except HTTPError as http_error:
            print("%s - %s" % (http_error, target_host_path))
        except URLError as url_error:
            print("%s - %s" % (url_error, target_host_path))
        else:
            data = res.readline()
        finally:
            self.send_response_only(200)
            self.end_headers()
            if not data:
                self.wfile.write(b"console.log('Remote Server Error')")
            else:
                self.wfile.write(data)

    def handle_one_request(self):
        """Handle a single HTTP request.

        Overloaded: Do Not Log Timeout

        You normally don't need to override this method; see the class
        __doc__ string for information on how to handle specific HTTP
        commands such as GET and POST.

        """
        try:
            self.raw_requestline = self.rfile.readline(65537)
            if len(self.raw_requestline) > 65536:
                self.requestline = ''
                self.request_version = ''
                self.command = ''
                self.send_error(HTTPStatus.REQUEST_URI_TOO_LONG)
                return
            if not self.raw_requestline:
                self.close_connection = True
                return
            if not self.parse_request():
                # An error code has been sent, just exit
                return
            mname = 'do_' + self.command
            if not hasattr(self, mname):
                self.send_error(
                    HTTPStatus.NOT_IMPLEMENTED,
                    "Unsupported method (%r)" % self.command)
                return
            method = getattr(self, mname)
            method()
            self.wfile.flush() #actually send the response if not already done.
        except socket.timeout:
            #a read or a write timed out.  Discard this connection
            #self.log_error("Request timed out: %r", e)
            self.close_connection = True
            return


def run_proxy_server(port=PORT):
    """启动本地服务器"""
    server_address = ('', port)
    httpd = HTTPServer(server_address, MySogouPushHandler)
    print('> Running Server On Port: ', port)
    print('> Press Ctrl + C to exit...\n')
    httpd.serve_forever()
