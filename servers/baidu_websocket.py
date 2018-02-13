#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import threading
import hashlib
import socket
import base64
import struct
import time
from websocket import create_connection

'''
+-+-+-+-+-------+-+-------------+-------------------------------+
 0                   1                   2                   3
 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
+-+-+-+-+-------+-+-------------+-------------------------------+
|F|R|R|R| opcode|M| Payload len |    Extended payload length    |
|I|S|S|S|  (4)  |A|     (7)     |             (16/64)           |
|N|V|V|V|       |S|             |   (if payload len==126/127)   |
| |1|2|3|       |K|             |                               |
+-+-+-+-+-------+-+-------------+ - - - - - - - - - - - - - - - +
|     Extended payload length continued, if payload len == 127  |
+ - - - - - - - - - - - - - - - +-------------------------------+
|                     Payload Data continued ...                |
+---------------------------------------------------------------+
'''

FIN    = 0x80
OPCODE = 0x0f
MASKED = 0x80
PAYLOAD_LEN = 0x7f
PAYLOAD_LEN_EXT16 = 0x7e
PAYLOAD_LEN_EXT64 = 0x7f

OPCODE_CONTINUATION = 0x0
OPCODE_TEXT         = 0x1
OPCODE_BINARY       = 0x2
OPCODE_CLOSE_CONN   = 0x8
OPCODE_PING         = 0x9
OPCODE_PONG         = 0xA



class websocket_thread(threading.Thread):
    """websocket线程"""

    def __init__(self, connection):
        super(websocket_thread, self).__init__()
        self.connection = connection
        self.heart_alive = False

    def run(self):
        try:
            self.websocket_client = create_connection("wss://selab.baidu.com/nv/answer.sock/?xc=2e7c627ea035793709242ce812d0a659&EIO=3&transport=websocket",
                header=[
                    "User-Agent:"+ANDROID_USER_AGENT, 
                    "Sec-WebSocket-Extensions:permessage-deflate; client_max_window_bits",
                    "Pragma:no-cache",
                    "Cache-Control:no-cache",
                    "Accept-Encoding:gzip, deflate, br",
                    "Accept-Language:zh-CN,zh;q=0.9"],
                cookie="BAIDUCUID=0OSCilaABulxaHutluBS8_ae2t_Ruv8NliHgigiTvaKQLBd5B; BAIDUID=5F187DAC496719041F90FD90536CCC9F:FG=1;",
                origin="http://secr.baidu.com:80",
                host="selab.baidu.com")

            while True:
                baidu_result = self.websocket_client.recv()

                if "sid" in baidu_result:
                    self.websocket_client.send("40/nv/xiguashipin/answer?xc=2e7c627ea035793709242ce812d0a659")

                if "step" in baidu_result:
                    if not self.heart_alive:
                        heart_thread = threading.Thread(target=self.heart_break)
                        heart_thread.setDaemon(True)
                        heart_thread.start()
                    result = package_data(baidu_result)
                    self.connection.send(result)
                # data = self.connection.recv(8192)
                # re = parse_data(data)
        except KeyboardInterrupt:
            self.connection.close()
            self.websocket_client.close()

    def heart_break(self):
        self.heart_alive = True
        while True:
            time.sleep(20)
            self.websocket_client.send("40")
            

def package_data(msg):
    """数据包装
        丶固定部分 ‘\x81’
        丶报文内容长度
            小于127， 填充8bit表示内容长度
            小于2^16-1, 填充第一个8bit为126的十六进制表示，后面16bit表示内容长度
            小于2^64-1, 填充第一个8bit为127的十六进制表示，后面64bit表示内容长度
        丶报文内容
    """
    if msg:
        msg = str(msg)
    else:
        return False

    opcode = OPCODE_TEXT

    header  = bytearray()
    payload = msg.encode('utf-8')
    payload_length = len(payload)

    # Normal payload
    if payload_length <= 125:
        header.append(FIN | opcode)
        header.append(payload_length)

    # Extended payload
    elif payload_length >= 126 and payload_length <= 65535:
        header.append(FIN | opcode)
        header.append(PAYLOAD_LEN_EXT16)
        header.extend(struct.pack(">H", payload_length))

    # Huge extended payload
    elif payload_length < 18446744073709551616:
        header.append(FIN | opcode)
        header.append(PAYLOAD_LEN_EXT64)
        header.extend(struct.pack(">Q", payload_length))

    else:
        raise Exception("Message is too big. Consider breaking it into chunks.")
        return

    return header + payload


def parse_data(msg):
    """数据解析
        丶固定部分 ‘\x81’
        丶报文内容长度
            小于127， 填充8bit表示内容长度
            小于2^16-1, 填充第一个8bit为126的十六进制表示，后面16bit表示内容长度
            小于2^64-1, 填充第一个8bit为127的十六进制表示，后面64bit表示内容长度
        丶掩码mask
            mask由四字节组成
        丶报文内容content
    """
    if not len(msg):
        return False
    length = msg[1] & 127
    if length == 126:
        mask = msg[4:8]
        raw = msg[8:]
    elif length == 127:
        mask = msg[10:14]
        raw = msg[14:]
    else:
        mask = msg[2:6]
        raw = msg[6:]
        ret = ''
    for cnt, d in enumerate(raw):
        ret += chr(d ^ mask[cnt % 4])
    return ret


def parse_headers(msg):
    """头部解析"""
    headers = {}
    header, data = msg.decode().split('\r\n\r\n', 1)
    for line in header.split('\r\n')[1:]:
        key, value = line.split(': ', 1)
        headers[key] = value
    headers['data'] = data
    return headers


def generate_token(msg):
    """生成key，用的公开的盐"""
    key = msg + '258EAFA5-E914-47DA-95CA-C5AB0DC85B11'
    ser_key = hashlib.sha1(key.encode()).digest()
    return base64.b64encode(ser_key)


ANDROID_USER_AGENT = "Mozilla/5.0 (Linux; Android 7.0; SM-C7010 Build/NRD90M; wv) \
AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/48.0.2564.116 \
Mobile Safari/537.36 T7/9.3 SearchCraft/2.0.0 (Baidu; P1 7.0)"


def run_baidu_websocket(port=8880, max_thread=5):
    """websocket"""
    websocket_server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    websocket_server.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
    websocket_server.bind(('127.0.0.1', port))
    websocket_server.listen(max_thread)
    websocket_server.settimeout(None)

    print('> Running Server On Port: ', port)
    print('> Press Ctrl + [Pause/Break] to exit...\n')
    
    while True:
        connection, address = websocket_server.accept()
        try:
            data = connection.recv(1024)
            headers = parse_headers(data)
            token = generate_token(headers['Sec-WebSocket-Key'])
            connection.send(b'\
HTTP/1.1 101 WebSocket Protocol Hybi-10\r\n\
Upgrade: WebSocket\r\n\
Connection: Upgrade\r\n\
Sec-WebSocket-Accept: %s\r\n\r\n' % token)
            thread = websocket_thread(connection)
            thread.setDaemon(True)
            thread.start()
        except socket.timeout:
            print('websocket connection timeout')
        except KeyboardInterrupt:
            connection.close()


if __name__ == '__main__':
    run_baidu_websocket(8880, 5)
