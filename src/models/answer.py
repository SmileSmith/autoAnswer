#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
    #Author: smilesmith
    #Date: 2018-01-25
    #Desc: 综合答案类
"""
from src.units.adb import tap_android_all, get_options_all
from .result import Result
from .timer import Timer

class MyAnswer(object):
    """综合考虑各AI的答案"""
    def __init__(self, question):
        self.question = question
        self.options = {'baidu': [], 'sogou': [], 'uc': [],}
        self.results = []
        self.corrects = []
        # 目前这个函数的功能是开始答个性题，后续考虑重构
        self.shared_results = get_options_all()
        # TODO: 延迟时间后自动答题
        # self.timer = Timer(5000)
        # self.timer.run_timeout(self.try_answer_by_ai)

    def set_option(self, option, ai_type):
        """设置选项"""
        self.options[ai_type] = option

    def add_result(self, result):
        """添加答案"""
        if self.results:
            self.shared_results.get()
        self.results.append(result)
        self.shared_results.put(self.results)

    def answer_single(self):
        """非个性题，选取最佳答案"""
        tap_android_all(self.corrects)

    def try_answer_by_ai(self):
        """尝试AI答题"""
        print("> try to answer by ai")
        if self.question.is_individual:
            pass # TODO:根据屏幕的结果选取corrects中结果
        else:
            self.answer_single()
