#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
    #Author: smilesmith
    #Date: 2019-12-14
    #Desc: 夸克答题助手爬虫
"""
import json
import time
import base64
import gzip
from io import BytesIO
from urllib.request import Request, urlopen

ANDROID_USER_AGENT = "Mozilla/5.0 (Linux; U; Android 9; zh-CN; MI CC 9 Build/PKQ1.181121.001) \
AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.108 Quark/3.7.0.123 Mobile Safari/537.36"

HEADERS = {
    'Host': 'answer-quark.sm.cn',
    'Connection': 'keep-alive',
    'Cache-Control': 'max-age=0',
    'Accept': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    'User-Agent': ANDROID_USER_AGENT,
    'Referer': 'https://answer-quark.sm.cn/answer/?uc_param_str=dnntnwvepffrgibijbprsvdsdicheiniut&source=mini',
    'Accept-Encoding': 'gzip, deflate',
    'Accept-Language': 'zh-CN,en-US;q=0.8'
}

def ungzip(data):
    """Gzip解压"""
    try:
        data = gzip.GzipFile(fileobj = BytesIO(data))
    except:
        pass
    return data


def mock_request(path, **my_headers):
    """反向代理"""
    headers = HEADERS.copy()
    for key in my_headers:
        headers[key] = my_headers[key]

    req = Request(path, headers=headers)
    res = ungzip(urlopen(req).read())
    res_str = str(res.read(), 'UTF-8')
    return res_str


def format_kuake_data(res_str):
    """整理夸克助手的答案"""
    data = json.loads(res_str)['data']
    print(data)
    if not data['options']:
        return None

    # 选项 & 答案
    options = data['options']
    result = 0
    for index, option in enumerate(options):
        if data['correct'] == option:
            result = index

    # 题目
    question = {
        'round': data['round'],
        'text': data['title'],
    }

    return {
        'question': question,
        'options': options,
        'result': result
    }


def get_kuake_result():
    """获取SOGOU助手答案"""
    t = str(int(time.time() * 1000))
    res_str = mock_request('https://answer-quark.sm.cn/answer/curr?format=json&activity=thyx&_t=' + t,
                           Referer="https://answer-quark.sm.cn/answer/?uc_param_str=dnntnwvepffrgibijbprsvdsdicheiniut&source=mini",
                           Host="answer-quark.sm.cn",
                           Cookie="__wpkreporterwid_=11273d6c-a5fb-41e3-86b9-9d8273baec26; cna=nXzQFb7BxF8CAXBhPe8b4qmy; isg=BA4OyY293yDuKGsEnhnMPmO6VObQj9KJyulxmDhWH5Y8m9T1oB_emBdZ1oF9xcqh; sm_diu=61862a13ee7d838f41aa08d7cd09686f%7C27322012586%7C1351f3ec4ef823a637%7C1575694517; sm_sid=93c2b094834ffae5957b8df0ff395c7e; sm_uuid=131a4188c54ddf74202c7990c96914a2%7C27322012586%7C%7C1576414976")
    res_str = res_str.replace('true', 'True')
    return res_str


def start_kuake():
    """开始抓取SOGOU的答案数据"""
    kuake_result = None
    while kuake_result is None:
        result_data = get_kuake_result()
        if result_data:
            kuake_result = result_data
            print(format_kuake_data(kuake_result));
            break
        time.sleep(0.2)
    return kuake_result

if __name__ == '__main__':
    print(start_kuake())

