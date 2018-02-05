#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
    #Author: smilesmith
    #Date: 2018-01-26
    #Desc: 回答控制器
"""
from src.services import answerService
from .aiSwitchController import is_auto

def handle_answer(apipath, datas):
    """处理答题请求"""
    answer_type = apipath.split("-").pop()

    if answer_type == "human":
        answerService.answer_by_human(datas, answer_type)
    elif is_auto():
        answerService.answer_by_ai(datas, answer_type)


def save_correct_result(apipath, datas):
    """保存正确结果"""
    answer_type = apipath.split("-").pop()

    if answer_type == "uc":
        answerService.save_correct_result(datas)
