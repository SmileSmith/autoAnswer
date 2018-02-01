#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
    #Author: smilesmith
    #Date: 2018-02-01
    #Desc: UC爬虫
"""
import json
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


#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
    #Author: smilesmith
    #Date: 2018-01-25
    #Desc: 计时器类
"""
import time


class Timer(object):
    """定时器，定时执行指定的函数
    """

    def __init__(self, start, interval=0):
        """
        @start, int, 延迟执行的秒数
        @interval, int, 每次执行的间隔秒数
        """
        self.start = start
        self.interval = interval

    def run_interval(self, func, *args, **kwargs):
        """运行定时器
        :param func: callable, 要执行的函数
        """
        time.sleep(self.start)
        while True:
            func(*args, **kwargs)
            time.sleep(self.interval)

    def run_timeout(self, func, *args, **kwargs):
        """运行计时器，只执行一次
        :param func: callable, 要执行的函数
        """
        time.sleep(self.start)
        while True:
            func(*args, **kwargs)


def format_uc_data(res_str):
    """整理uc助手的答案"""
    data = json.loads(res_str)['data']

    if not data['options']:
        return data

    options = []
    results = []
    total_confidence = 0

    for index, option in data['options']:
        options.append(option['title'])
        total_confidence += int(option['score'])

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
    print(res_data)
    return res_data


def start_uc(question_round):
    """开始抓取UC的答案数据"""
    uc_result = None
    while uc_result is None:
        result_data = get_uc_result()
        if 'question' in result_data and result_data['question']['round'] == question_round:
            uc_result = result_data
            return result_data
        time.sleep(0.2)

start_uc('12')
