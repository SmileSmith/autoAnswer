#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
    #Author: smilesmith
    #Date: 2018-01-25
    #Desc: 综合答案类
"""
from result import Result
from timer import Timer
from src.units.adb import tap_android

class MyAnswer(object):
    """综合考虑各AI的答案"""
    def __init__(self, question, options, init_result, status):
        self.question = question
        self.options = options
        self.results = [init_result]
        self.status = status
        self.corrects = []
        self.errors = []
        self.is_individual = False # 默认是非个性化题目
        self.timer = Timer(5000)
        self.timer.run_timeout(self.try_answer_by_ai)

    def add_result_baidu(self, index, makeup):
        """添加百度AI答案"""
        pri = 0
        if makeup == 'yes_yes':
            pri = 1
        if makeup == 'weak_confirm':
            pri = 0.7
        if makeup == 'contradation':
            pri = 0.8
        if makeup == 'no_no':
            pri = 0.1
        text = self.options[index]
        self.results.append(Result(index, text, pri))

    def add_result_sogou(self, index):
        """添加搜狗AI答案"""
        pri = 0.8
        text = self.options[index]
        self.results.append(Result(index, text, pri))

    def add_result_baidu_percentage(self, answers):
        """添加百度百分比答案"""
        for index, answer in enumerate(answers):
            text = self.options[index]
            self.results.append(Result(index, text, answer.prop))

    def add_result_uc_percentage(self, answers):
        """添加UC百分比答案"""
        pass
    
    def answer_single(self, devices_list):
        """非个性题，选取最佳答案"""
        tap_android(self.corrects, devices_list)

    def try_answer_by_ai(self, devices_list):
        """尝试AI答题"""
        if self.is_individual:
            pass # TODO:根据屏幕的结果选取corrects中结果
        else:
            self.answer_single(devices_list)
