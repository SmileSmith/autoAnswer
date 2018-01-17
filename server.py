from http.server import BaseHTTPRequestHandler, HTTPServer
from urllib.parse import urlparse, unquote, parse_qs
from os import path
import subprocess

curdir = path.dirname(path.realpath(__file__))


# HTTPRequestHandler class
class myHandler(BaseHTTPRequestHandler):
    # GET
    def do_GET(self):
        self.handle_http_request()

    def do_POST(self):
        datas = parse_qs(unquote(str(self.rfile.readline(int(self.headers['content-length'])),'UTF-8')))#先解码
        querypath = urlparse(self.path)
        apipath = querypath.path
        if apipath.endswith('reply-answer-baidu'):
            result = int(datas["result"][0])
            no = datas["question[questionId]"][0]
            #self.tap_android(result)
            self.log_message("\n----------\nNo.%s Answer is : %s \n----------", no, result)
        if apipath.endswith('reply-answer-sogou'):
            result = int(datas["result"][0])
            no = datas["question[questionId]"][0]
            #self.tap_android(result)
            self.log_message("\n----------\nNo.%s Answer is : %s \n----------", no, result)
        if apipath.endswith('reply-answer-uc'):
            result = int(datas["result"][0])
            no = datas["question[questionId]"][0]
            #self.tap_android(result)
            self.log_message("\n----------\nNo.%s Answer is : %s \n----------", no, result)
        if apipath.endswith('reply-answer'):
            result = int(datas["result"][0])
            no = datas["question[questionId]"][0]
            self.tap_android(result)
            self.log_message("\n----------\nNo.%s Answer is : %s \n----------", no, result)
        self.send_response(200)
        self.send_header('Content-type', 'json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        self.wfile.write(b"ok")

    def tap_android(self, result):
        start_left = 540
        start_top = 535
        gap = 155
        target_left = start_left
        target_top = start_top + gap * (result + 1)
        subprocess.Popen(
            "adb shell input tap " + str(target_left) + " " + str(target_top),
            shell=True, stdout=subprocess.PIPE)

    def handle_http_request(self):
        send_reply = False
        querypath = urlparse(self.path)
        filepath, query = querypath.path, querypath.query
        
        if filepath.endswith('/'):
            filepath += 'index.html'
        if filepath.endswith(".html"):
            mimetype = 'text/html'
            send_reply = True
        if filepath.endswith(".jpg"):
            mimetype = 'image/jpg'
            send_reply = True
        if filepath.endswith(".gif"):
            mimetype = 'image/gif'
            send_reply = True
        if filepath.endswith(".js"):
            mimetype = 'application/javascript'
            send_reply = True
        if filepath.endswith(".css"):
            mimetype = 'text/css'
            send_reply = True
        if filepath.endswith(".json"):
            mimetype = 'application/json'
            send_reply = True
        if filepath.endswith(".woff"):
            mimetype = 'application/x-font-woff'
            send_reply = True
        if send_reply is True:
            # Open the static file requested and send it
            try:
                with open(path.realpath(curdir + '/' + filepath), 'rb') as f:
                    content = f.read()
                    self.send_response(200)
                    self.send_header('Content-type', mimetype)
                    self.end_headers()
                    self.wfile.write(content)
            except IOError:
                self.send_error(404, 'File Not Found: %s' % self.path)


def run():
    port = 7777
    print('starting server, port', port)

    # Server settings
    server_address = ('', port)
    httpd = HTTPServer(server_address, myHandler)
    print('running server...')
    httpd.serve_forever()

run()
