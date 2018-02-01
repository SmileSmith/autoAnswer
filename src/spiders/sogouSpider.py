#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
    #Author: smilesmith
    #Date: 2018-02-01
    #Desc: SOGOU爬虫
"""
import json
import time
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
    data = json.loads(result[-1])

    if not data['choices']:
        return data

    # 答案
    choices = data['choices'].split(":-1|")
    result = 0
    for index, choice in enumerate(choices):
        if data['result'] == choice:
            result = index
    data['result'] = result

    # 题目
    question_round, question_text = data['title'].split(".")
    data['question'] = {
        'text': question_text,
        'round': question_round
    }

    # 选项
    data['options'] = data['answers']

    return data


def get_sogou_result():
    """获取SOGOU助手答案"""
    res_str = mock_request('http://140.143.49.31/api/ans2?key=xigua&wdcallback=format_sogou_data',
                           Referer="http://wd.sa.sogou.com/",
                           Host="wd.sa.sogou.com")
    res_data = eval(res_str)
    print(res_data)
    return res_data


def start_sogou(question_round):
    """开始抓取SOGOU的答案数据"""
    sogou_result = None
    while sogou_result is None:
        result_data = get_sogou_result()
        if 'question' in result_data and result_data['question']['round'] == question_round:
            sogou_result = result_data
            return result_data
        time.sleep(0.2)

start_sogou('12')
