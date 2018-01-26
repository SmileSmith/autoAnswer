#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
    #Author: smilesmith
    #Date: 2018-01-26
    #Desc: 回答控制器
"""
from src.units import adb
from src.models.question import Question
from src.models.answer import MyAnswer
from .aiSwitchController import is_auto

CUR_ANSWER = MyAnswer(Question('greet', '0'))


def handle_answer(handler, apipath, datas):
    """处理答题请求"""
    answer_type = apipath.split("-").pop()

    # 解析数据
    result = int(datas["result"])
    question_id = datas["question"]["questionId"]
    question_text = datas["question"]["text"]
    question = Question(question_text, question_id)
    if answer_type == "human":
        adb.tap_android_all(result)
        handler.simple_log(">>> No.%s %s Answer is : %s",
                           question_id, answer_type, result)
    elif is_auto():
        global CUR_ANSWER
        if "human_markup" in datas:
            human_markup = datas["human_markup"]
        else:
            human_markup = ""
        options = datas["options"]
        if (not isinstance(CUR_ANSWER, MyAnswer)) or CUR_ANSWER.question.question_id != question_id:
            print("> step 1: start answer...")
            CUR_ANSWER = MyAnswer(question)
            print("> step 2: has inited")
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
        adb.tap_android_all(result)
        handler.simple_log(">>> No.%s %s Answer is : %s",
                           question_id, answer_type, result)
