#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
    #Author: smilesmith
    #Date: 2018-01-26
    #Desc: 问题类
"""

class Question(object):
    """问题类"""
    def __init__(self, text, question_round, question_phase):
        self.id = 0
        self.text = text
        self.round = question_round
        self.phase = question_phase
        self.individual = 0

    def set_individual(self, flag):
        """设置是否是个性题"""
        self.individual = flag

    def set_id(self, question_id):
        """设置ID"""
        self.id = question_id
