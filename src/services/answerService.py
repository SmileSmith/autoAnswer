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
from src.configs import config
from src.models.question import Question
from src.models.answer import MyAnswer
from src.models.result import Result
from src.units import adb
from src.units.method import log_info, date_time_string
from src.daos import answerDao, questionDao

CUR_ANSWER = MyAnswer(Question('start', '0', '19700101'))


def answer_by_ai(datas, ai_type):
    """处理AI答题"""
    # 解析数据
    question_round = str(datas["question"]["round"])
    question_text = datas["question"]["text"]
    options = datas["options"]
    phase = date_time_string()
    if not options:
        return

    # 刷新或读取问题
    if (not isinstance(CUR_ANSWER, MyAnswer)) or CUR_ANSWER.question.round != question_round:
        question = Question(question_text, question_round, phase)
        log_info("> step 1: start [No.%s] ...", question_round)

        question_id = refresh_answer(question)
        question.set_id(question_id)
        log_info("> step 2: get question ")
        print("[%s. %s]" % (question_round, question_text))
    else:
        question = CUR_ANSWER.question

    # 设置选项
    CUR_ANSWER.set_option(options, ai_type)

    # 填充答案
    if ai_type == "baidu":
        # 百度Step-0 只有题目
        if 'results' not in datas:
            return
        results = datas["results"]
        result = int(datas["result"])
        add_result_baidu(result, options, question)
        add_result_baidu_percentage(results, question)

    elif ai_type == "sogou":
        result = int(datas["result"])
        add_result_sogou(result, options, question)

    elif ai_type == "uc":
        result = int(datas["result"])
        add_result_uc(result, options, question)

    # adb.tap_android_all(result)
    log_info("> step 3: add results: %s by %s",
             result, ai_type)


def refresh_answer(question):
    global CUR_ANSWER
    CUR_ANSWER = MyAnswer(question)
    CUR_ANSWER.start_answer_all()
    
    question_id = questionDao.get_question_id(question.round, question.phase)

    if not question_id:
        question_id = questionDao.save_question(question)
    return question_id


def add_result_baidu(index, options, question):
    """添加百度AI答案"""
    prop = config.BAIDU_WEIGHT
    text = options[index]
    result = Result(index, text, prop, question.id)
    result.set_type("baidu")
    answerDao.save_result(result)
    CUR_ANSWER.add_result(result)


def add_result_baidu_percentage(results, question):
    """添加百度百分比答案"""
    for index, result in enumerate(results):
        result = Result(index, result['text'], result['prop'] * config.BAIDU_P_WEIGHT, question.id)
        result.set_type("baidu", "percentage")
        answerDao.save_result(result)
        CUR_ANSWER.add_result(result)


def add_result_sogou(index, options, question):
    """添加搜狗AI答案"""
    prop = config.SOGOU_WEIGHT
    text = options[index]
    result = Result(index, text, prop, question.id)
    result.set_type("sogou")
    answerDao.save_result(result)
    CUR_ANSWER.add_result(result)


def add_result_uc(index, options, question):
    """添加UC-AI答案"""
    if '|-|' in options[0]:
        new_results = options[0].split("|-|")
        log_info("> step 3: add results individual")
        for index, result_text in enumerate(new_results):
            result = Result(index, result_text, config.UC_WEIGHT, question.id)
            result.set_type("uc", "single")
            answerDao.save_result(result)
            CUR_ANSWER.add_result(result)
    else:
        prop = config.UC_WEIGHT
        text = options[index]
        result = Result(index, text, prop, question.id)
        result.set_type("uc")
        answerDao.save_result(result)
        CUR_ANSWER.add_result(result)


def answer_by_human(datas, answer_type):
    """处理人工答题"""
    result = int(datas["result"])
    question_round = str(datas["question"]["round"])
    adb.tap_android_all(result)
    log_info(">>> No.%s %s Human Answer : %s",
             question_round, answer_type, result)


def save_correct_result(datas):
    """保存正确结果"""
    questions = datas['question']
    question_phase = date_time_string()
    for question in questions:
        question_id = questionDao.get_question_id(str(question['id']), question_phase)
        if isinstance(question['answer'], list):
            for answer in question['answer']:
                result = Result(0, answer, 1, question_id)
                answerDao.save_correct_result(result)
        else:
            result = Result(0, question['answer'], 1, question_id)
            answerDao.save_correct_result(result)
    log_info(">>> Save Correct Result Success...")
