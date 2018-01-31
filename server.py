#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""程序主进程"""
from http.server import BaseHTTPRequestHandler, HTTPServer
from urllib.parse import urlparse
from urllib.request import Request, urlopen
from os import path
import sys
import json
from src.units import adb, sqlite
from src.controllers import controller

ANDROID_USER_AGENT = "Mozilla/5.0 (Linux; Android 7.1.1; Google Pixel - \
7.1.0 - API 25 - 1080x1920 Build/NMF26Q; wv) AppleWebKit/537.36 (KHTML, like Gecko) \
Version/4.0 Chrome/52.0.2743.100 Mobile Safari/537.36 SogouSearch Android1.0 version3.0 AppVersion/5802"

CURRENT_DIR = path.dirname(path.realpath(__file__))

PORT = 8080


class MyHandler(BaseHTTPRequestHandler):
    """处理各类请求的控制器"""

    def do_GET(self):
        """处理GET请求"""
        querypath = urlparse(self.path)
        apipath = querypath.path
        if apipath.startswith("/allinone/sogou/api/ans"):
            self.proxy_pass("/allinone/sogou/api/ans", "http://140.143.49.31/api/ans2",
                            Referer="http://wd.sa.sogou.com/")
        elif apipath.startswith("/allinone/uc/answer"):
            self.proxy_pass("/allinone/uc/answer", "http://answer.sm.cn/answer",
                            Referer="http://answer.sm.cn/answer/index?activity=million", Host="answer.sm.cn")
        else:
            self.handle_static()

    def do_POST(self):
        """处理POST请求"""
        body = self.rfile.readline(int(self.headers['content-length']))
        datas = json.loads(str(body, 'UTF-8'))
        querypath = urlparse(self.path)
        apipath = querypath.path
        if apipath.startswith("/reply-answer"):
            controller.handle_answer(apipath, datas)
        elif apipath.startswith('/toggle-ai'):
            controller.toggle_ai(datas)
        self.send_response_only(200)
        self.send_header('Content-type', 'json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        self.wfile.write(b"ok")

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
        res = urlopen(req)
        data = res.read()
        # TODO:当是AI自动代替的模式时，直接解析结果调用相关控制器逻辑
        self.send_response_only(200)
        self.end_headers()
        self.wfile.write(data)

    def handle_static(self):
        """处理静态文件请求"""
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
        if filepath.endswith(".ico"):
            mimetype = 'image/ico'
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
        if send_reply is True:
            # Open the static file requested and send it
            try:
                with open(path.realpath(CURRENT_DIR + '/' + filepath), 'rb') as file:
                    content = file.read()
                    self.send_response_only(200)
                    self.send_header('Content-type', mimetype)
                    self.end_headers()
                    self.wfile.write(content)
            except IOError:
                self.send_error(404, 'File Not Found: %s' % self.path)

    def simple_log(self, format, *args):
        """自定义日志"""
        sys.stderr.write("[%s] %s\n" %
                         (self.log_date_time_string(), format % args))


def run_server():
    """启动本地服务器"""
    server_address = ('', PORT)
    httpd = HTTPServer(server_address, MyHandler)
    print('> Running Server On Port: ', PORT)
    print('> Press Ctrl + C to exit...\n')
    httpd.serve_forever()


def main():
    """主函数"""
    adb.init()
    sqlite.init_table()
    run_server()

# start main at last ##########################################################


if __name__ == '__main__':
    main()
