#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
    #Author: smilesmith
    #Date: 2018-01-26
    #Desc: AI控制器
"""

AUTO_AI = False

def toggle_ai(handler, switcher):
    """切换自动AI答题"""
    global AUTO_AI
    result = False
    if switcher == "ON":
        result = True
    if result != AUTO_AI:
        AUTO_AI = result
        handler.simple_log(">>> AI Auto : %s", str(AUTO_AI))

def is_auto():
    """返回是否自动AI答题"""
    return AUTO_AI
