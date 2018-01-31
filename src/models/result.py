#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
    #Author: smilesmith
    #Date: 2018-01-25
    #Desc: 答案类
"""
class Result(object):
    """AI结果"""
    def __init__(self, index, text, prop, question_id):
        self.index = index
        self.text = text
        self.prop = prop
        self.question_id = question_id
        self.ai_type = ""
        self.type = "single"

    def set_type(self, ai_type, result_type="single"):
        """设置类型"""
        self.ai_type = ai_type
        self.type = result_type
