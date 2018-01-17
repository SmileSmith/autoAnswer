from http.server import BaseHTTPRequestHandler, HTTPServer
from urllib.parse import urlparse, unquote, parse_qs
from os import path
import subprocess

curdir = path.dirname(path.realpath(__file__))


device_infos = subprocess.Popen(
    'adb devices', shell=True, stdout=subprocess.PIPE)
out, err = device_infos.communicate()
device_id_list = []
for line in out.decode("utf-8").splitlines()[1:-1]:
    device_id_list.append(line.split("\t")[0])



# HTTPRequestHandler class


class myHandler(BaseHTTPRequestHandler):

    auto_ai = False

    def do_GET(self):
        self.handle_http_request()

    def do_POST(self):
        datas = parse_qs(unquote(str(self.rfile.readline(
            int(self.headers['content-length'])), 'UTF-8')))  # 先解码
        querypath = urlparse(self.path)
        apipath = querypath.path
        if self.auto_ai and apipath.endswith('reply-answer-baidu'):
            result = int(datas["result"][0])
            no = datas["question[questionId]"][0]
            self.tap_android(result)
            self.log_message(
                "\nNo.%s Answer is : %s \n----------", no, result)
        if self.auto_ai and apipath.endswith('reply-answer-sogou'):
            result = int(datas["result"][0])
            no = datas["question[questionId]"][0]
            self.tap_android(result)
            self.log_message(
                "\nNo.%s Answer is : %s \n----------", no, result)
        if self.auto_ai and apipath.endswith('reply-answer-uc'):
            result = int(datas["result"][0])
            no = datas["question[questionId]"][0]
            self.tap_android(result)
            self.log_message(
                "\nNo.%s Answer is : %s \n----------", no, result)
        if apipath.endswith('reply-answer'):
            result = int(datas["result"][0])
            no = datas["question[questionId]"][0]
            self.tap_android(result)
            self.log_message(
                "\nNo.%s Answer is : %s \n----------", no, result)
        if apipath.endswith('toggle-ai'):
            switch = str(datas["switch"][0])
            true = "true"
            if (switch == true):
                self.auto_ai = True
            else:
                self.auto_ai = False
            self.log_message(
                "\nToggle AI Auto to %s", str(self.auto_ai))
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
        for device_id in device_id_list:
            command = "adb -s " + device_id + " shell input tap " + \
                str(target_left) + " " + str(target_top)
            print(command)
            subprocess.Popen(command, shell=True, stdout=subprocess.PIPE)

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
