#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
    #Author: smilesmith
    #Date: 2018-01-29
    #Desc: 公共方法
"""
import time
from urllib.request import Request, urlopen
from colorama import Fore
from src.configs import config


def date_time_string():
    """Return the current time formatted """
    now = time.time()
    year, month, day, hh, mm, ss, x, y, z = time.localtime(now)
    s = "%04d%02d%02d-%02d" % (year, month, day, hh)
    return s


def __log_date_time_string():
    """Return the current time formatted for logging."""
    monthname = [None,
                 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    now = time.time()
    year, month, day, hh, mm, ss, x, y, z = time.localtime(now)
    s = "%02d/%3s/%04d %02d:%02d:%02d" % (
        day, monthname[month], year, hh, mm, ss)
    return s


def log_info(log_format, *args):
    """自定义日志"""
    print("[%s] %s" %
          (__log_date_time_string(), log_format % args))


def log_error(log_format, *args):
    """错误日志"""
    print(Fore.LIGHTRED_EX + ("[%s] %s" %
                              (__log_date_time_string(), log_format % args)) + Fore.RESET)


def log_warn(log_format, *args):
    """警告日志"""
    print(Fore.YELLOW + ("[%s] %s" %
                         (__log_date_time_string(), log_format % args)) + Fore.RESET)


def get_prefer_result(results, options):
    """返回优选答案"""
    pri_obj = {}
    for result in results:
        if result.text not in pri_obj:
            pri_obj[result.text] = result.prop
        else:
            pri_obj[result.text] += result.prop

    prefer_results = sorted(pri_obj.items(), key=lambda item: -item[1])

    try_times = min(config.TRY_TIMES, len(prefer_results))

    # 尝试 信任度prop最大的三个选项
    for try_num in range(try_times):

        # 匹配的字符数，初始化为0
        match_counts = [0, 0, 0]
        prefer_option = prefer_results[try_num][0]
        prefer_prop = prefer_results[try_num][1]


        # 1、信任度prop从大到小依次寻找匹配
        if prefer_option in options:
            print("[%s] PROP [%s] Exactly..." % (prefer_option, prefer_prop))
            return options.index(prefer_option)


        # 2、OCR识别错误，导致AI答案，没有匹配答题手机中的选项
        for char in prefer_option:
            for index, option in enumerate(options):
                if str(char) in option:
                    # 如果字符存在于手机的选项中，计数+1
                    match_counts[index] += 1

        # 寻找匹配字符数量最大的选项
        max_count = 0
        max_count_index = 0
        for index, count in enumerate(match_counts):
            if count > max_count:
                max_count = count
                max_count_index = index

        # 匹配字符比例超过阈值则认为是可信任的选项
        if max_count / len(prefer_option) >= config.OCR_THRESHOLD:
            print("[%s] PROP [%s] Likely..." % (prefer_option, prefer_prop))
            return max_count_index

    # 3、某些个性题，AI返回的答案不全，没有包含答题手机中的选项
    # 我也很绝望啊~~ 
    # 是不是要来个随机数？？

    return None


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
    """伪装请求"""
    headers = HEADERS.copy()
    for key in my_headers:
        headers[key] = my_headers[key]

    req = Request(path, headers=headers)
    res = urlopen(req)
    res_str = str(res.read(), 'UTF-8')
    return res_str
