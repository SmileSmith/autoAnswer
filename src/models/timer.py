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
            