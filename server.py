#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""程序主进程"""

from multiprocessing import Process
import webbrowser
from servers.web_server import run_server
from servers.sogou_proxy import run_sogou_proxy
from src.units import adb, sqlite
from src.units.method import change_host

PORT = 8080
PROXY_PORT = 8888

HOST = 'dev.secr.baidu.com'


def run():
    """主函数"""
    adb.init()
    change_host(HOST)
    sqlite.init_table()
    sub_process = Process(target=run_sogou_proxy)
    sub_process.start()
    webbrowser.open("http://%s:%s/index.html" % (HOST, PORT))
    run_server(port=PORT)


if __name__ == '__main__':
    run()
