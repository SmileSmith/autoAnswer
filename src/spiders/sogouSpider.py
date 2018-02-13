#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
    #Author: smilesmith
    #Date: 2018-02-01
    #Desc: SOGOU爬虫
"""
import json
import time
import base64
from urllib.request import Request, urlopen

ANDROID_USER_AGENT = "Mozilla/5.0 (Linux; Android 7.1.1; Google Pixel - \
7.1.0 - API 25 - 1080x1920 Build/NMF26Q; wv) AppleWebKit/537.36 (KHTML, like Gecko) \
Version/4.0 Chrome/52.0.2743.100 Mobile Safari/537.36 SogouSearch Android1.0 version3.0 AppVersion/5802"

HEADERS = {
    'Host': 'answer.sm.cn',
    'Connection': 'keep-alive',
    'Cache-Control': 'max-age=0',
    'Accept': 'text/html, */*; q=0.01',
    'User-Agent': ANDROID_USER_AGENT,
    'Referer': 'http://answer.sm.cn/',
    'Accept-Encoding': 'gzip, deflate',
    'Accept-Language': 'zh-CN,zh;q=0.9'
}


def mock_request(path, **my_headers):
    """反向代理"""
    headers = HEADERS.copy()
    for key in my_headers:
        headers[key] = my_headers[key]

    req = Request(path, headers=headers)
    res = urlopen(req)
    res_str = str(res.read(), 'UTF-8')
    return res_str


def format_sogou_data(args):
    """整理SOUGOU助手的答案"""
    result = args['result']
    result = json.loads(base64.b64decode(result).decode('utf-8'))

    data = json.loads(result[-1])
    
    if not data['choices']:
        return None

    # 答案
    choices = data['choices'].split(":-1|")
    result = 0
    for index, choice in enumerate(choices):
        if data['result'] == choice:
            result = index

    # 题目
    question_round, question_text = data['title'].split(".")
    question = {
        'round': question_round,
        'text': question_text,
    }

    # 选项
    options = data['answers']

    return {
        'question': question,
        'options': options,
        'result': result
    }


def get_sogou_result():
    """获取SOGOU助手答案"""
    res_str = mock_request('https://wdpush.sogoucdn.com/api/anspush?key=xigua&wdcallback=format_sogou_data',
                           Referer="https://assistant.sogoucdn.com/v5/cheat-sheet?channel=bwyx",
                           Host="wdpush.sogoucdn.com",
                           Cookie="APP-SGS-ID=7d5f1515979422199%257C948922")
    res_str = res_str.replace('true', 'True')
    return eval(res_str)


def start_sogou():
    """开始抓取SOGOU的答案数据"""
    sogou_result = None
    while sogou_result is None:
        result_data = get_sogou_result()
        if result_data:
            sogou_result = result_data
            break
        time.sleep(0.2)
    return sogou_result

if __name__ == '__main__':
    print(start_sogou())

