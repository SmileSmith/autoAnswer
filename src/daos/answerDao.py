#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
    #Author: smilesmith
    #Date: 2018-01-31
    #Desc: 数据库访问接口
"""

from src.units import sqlite


def save_result(result):
    """保存答题结果"""
    sqlite.execute_sql('insert into ai_result (\
        id, ai_type, result_index, result_text, result_type, result_prop, question_id) \
        values (null, ?, ?, ?, ?, ?, ?)',
                       (result.ai_type, result.index, result.text, result.type, result.prop, result.question_id))

def get_all_result():
    """获取所有正确结果"""
    ai_results = sqlite.execute_sql('select * from ai_result')
    return ai_results

def save_correct_result(result):
    """保存正确的答案"""
    sqlite.execute_sql('insert into correct_result (\
        id, correct_text, question_id) \
        values (null, ?, ?)',
                       (result.text, result.question_id))

def get_all_correct_result():
    """获取所有正确结果"""
    correct_results = sqlite.execute_sql('select * from correct_result')
    return correct_results
