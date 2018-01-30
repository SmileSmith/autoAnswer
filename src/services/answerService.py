#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
    #Author: smilesmith
    #Date: 2018-01-30
    #Desc: 答题服务
"""

# 突然发现有些逻辑放model和controller都会有较大的耦合，着手抽离：）
# model里放更纯粹的数据操作
# controller放更纯粹的区分操作（AI还是Human）
from src.models.question import Question
from src.models.answer import MyAnswer
from src.units import adb
from src.units.method import log_info

CUR_ANSWER = MyAnswer(Question('start', '0'))


def answer_by_ai(datas, answer_type):
    """处理AI答题"""
    # 解析数据
    global CUR_ANSWER
    result = int(datas["result"])
    question_id = str(datas["question"]["questionId"])
    options = datas["options"]
    if not options:
        return
    if (not isinstance(CUR_ANSWER, MyAnswer)) or CUR_ANSWER.question.question_id != question_id:
        question_text = datas["question"]["text"]
        question = Question(question_text, question_id)
        log_info("> step 1: start [No.%s] ...", question_id)
        CUR_ANSWER = MyAnswer(question)
        log_info("> step 2: get question ")
    # 设置选项
    CUR_ANSWER.set_option(options, answer_type)
    # 填充答案
    if answer_type == "baidu":
        CUR_ANSWER.add_result_baidu(result)
        CUR_ANSWER.add_result_baidu_percentage(datas["answers"])
    elif answer_type == "sogou":
        CUR_ANSWER.add_result_sogou(result)
    elif answer_type == "uc":
        CUR_ANSWER.add_result_uc(result)
        CUR_ANSWER.add_result_uc_percentage(datas["answers"])
    # adb.tap_android_all(result)
    log_info("> step 3: add results: %s by %s",
             result, answer_type)


def answer_by_human(datas, answer_type):
    """处理人工答题"""
    result = int(datas["result"])
    question_id = str(datas["question"]["questionId"])
    adb.tap_android_all(result)
    log_info(">>> No.%s %s Answer : %s",
                question_id, answer_type, result)
