#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
    #Author: smilesmith
    #Date: 2018-01-25
    #Desc: 答案类
"""
class Result(object):
    """AI结果"""
    def __init__(self, index, text, pri):
        self.index = index
        self.text = text
        self.pri = pri
