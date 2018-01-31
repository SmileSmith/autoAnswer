#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
    #Author: smilesmith
    #Date: 2018-01-31
    #Desc: 数据库访问接口
"""

from src.units import sqlite

def get_question_id(question_round, question_phase):
    """获取题目ID"""
    question_ids = sqlite.execute_sql(
        'select id from question where round=? and phase=?', (question_round, question_phase))
    if not question_ids:
        return None
    return question_ids[0][0]

def save_question(question):
    """保存答题结果"""
    sqlite.execute_sql('insert into question (\
        id, question_text, individual, round, phase) \
        values (null, ?, ?, ?, ?)',
                       (question.text, question.individual, question.round, question.phase))

    question_id = get_question_id(question.round, question.phase)
    return question_id
