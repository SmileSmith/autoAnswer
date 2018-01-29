#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
    #Author: smilesmith
    #Date: 2018-01-26
    #Desc: 回答控制器
"""
from src.units import adb
from src.units.method import log_info
from src.models.question import Question
from src.models.answer import MyAnswer
from .aiSwitchController import is_auto

CUR_ANSWER = MyAnswer(Question('start', '0'))


def handle_answer(apipath, datas):
    """处理答题请求"""
    answer_type = apipath.split("-").pop()

    # 解析数据
    result = int(datas["result"])
    question_id = str(datas["question"]["questionId"])
    question_text = datas["question"]["text"]
    question = Question(question_text, question_id)
    if answer_type == "human":
        adb.tap_android_all(result)
        log_info(">>> No.%s %s Answer : %s",
                 question_id, answer_type, result)
    elif is_auto():
        global CUR_ANSWER
        if "human_markup" in datas:
            human_markup = datas["human_markup"]
        else:
            human_markup = ""
        options = datas["options"]
        if not options:
            return
        if (not isinstance(CUR_ANSWER, MyAnswer)) or CUR_ANSWER.question.question_id != question_id:
            log_info("> step 1: start [No.%s] ...", question_id)
            CUR_ANSWER = MyAnswer(question)
            log_info("> step 2: get question ")
        # 设置选项
        CUR_ANSWER.set_option(options, answer_type)
        # 填充答案
        if answer_type == "baidu":
            answers = datas["answers"]
            CUR_ANSWER.add_result_baidu(result, human_markup)
            CUR_ANSWER.add_result_baidu_percentage(answers)
        elif answer_type == "sogou":
            CUR_ANSWER.add_result_sogou(result)
        elif answer_type == "uc":
            answers = datas["answers"]
            CUR_ANSWER.add_result_uc(result)
            CUR_ANSWER.add_result_uc_percentage(answers)
        # adb.tap_android_all(result)
        log_info("> step 3: add results: %s by %s",
                 result, answer_type)
