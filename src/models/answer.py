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

    def set_option(self, option, option_type):
        """设置选项"""
        self.options[option_type] = option

    def add_result(self, result):
        """添加答案"""
        if self.results:
            self.shared_results.get()
        self.results.append(result)
        self.shared_results.put(self.results)

    def add_result_baidu(self, index, makeup):
        """添加百度AI答案"""
        pri = 0
        if makeup == 'yes_yes':
            pri = 1
        elif makeup == 'weak_confirm':
            pri = 0.7
        elif makeup == 'contradation':
            pri = 0.8
        elif makeup == 'no_no':
            pri = 0.1
        else:
            pri = 0.6
        text = self.options['baidu'][index]
        self.add_result(Result(index, text, pri))

    def add_result_sogou(self, index):
        """添加搜狗AI答案"""
        pri = 0.8
        text = self.options['sogou'][index]
        self.add_result(Result(index, text, pri))

    def add_result_uc(self, index):
        """添加UC-AI答案"""
        if '、' in self.options['uc'][0]:
            new_answers = self.options['uc'][0].split("、")
            for index, answer_text in enumerate(new_answers):
                self.add_result(Result(index, answer_text, 1))
        else:
            pri = 0.8
            text = self.options['uc'][index]
            self.add_result(Result(index, text, pri))

    def add_result_baidu_percentage(self, answers):
        """添加百度百分比答案"""
        for index, answer in enumerate(answers):
            self.add_result(Result(index, answer['text'], answer['prop']))

    def add_result_uc_percentage(self, answers):
        """添加UC百分比答案"""
        if '、' in self.options['uc'][0] and answers[0]['prop'] is None:
            # 说明是个性题
            new_answers = answers['uc'][0].split("、")
            for index, answer_text in enumerate(new_answers):
                self.add_result(Result(index, answer_text, 1))

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
