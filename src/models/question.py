#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
    #Author: smilesmith
    #Date: 2018-01-26
    #Desc: 问题类
"""

class Question(object):
    """问题类"""
    def __init__(self, text, question_id):
        self.text = text
        self.question_id = question_id
        self.individual = None

    def set_individual(self, flag):
        """设置是否是个性题"""
        self.individual = flag
