#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
    #Author: smilesmith
    #Date: 2018-02-01
    #Desc: UC爬虫
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


def format_uc_data(res_str):
    """整理uc助手的答案"""
    data = json.loads(res_str)['data']

    if not data['options']:
        return None

    options = []
    results = []
    total_confidence = 0

    for option in data['options']:
        options.append(option['title'])
        total_confidence += float(option['score'])

    results = map(lambda item: {
        'text': item['title'],
        'prop': round(float(int(item['score']) / total_confidence), 2)
    }, data['options'])


    return {
        'question': {
            'round': data['round'],
            'text': data['title']
        },
        'result': data['correct'],
        'options': options,
        'results': results
    }


def get_uc_result():
    """获取UC助手答案"""
    res_str = mock_request('http://answer.sm.cn/answer/curr?format=json&activity=million',
                           Referer="http://answer.sm.cn/answer/index?activity=million",
                           Host="answer.sm.cn")
    res_data = format_uc_data(res_str)
    return res_data


def start_uc():
    """开始抓取UC的答案数据"""
    uc_result = None
    while uc_result is None:
        result_data = get_uc_result()
        if result_data:
            uc_result = result_data
            return result_data
        time.sleep(0.2)

if __name__ == '__main__':
    print(start_uc())

