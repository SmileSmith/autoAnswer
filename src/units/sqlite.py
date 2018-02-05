#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
    #Author: smilesmith
    #Date: 2018-01-31
    #Desc: Sqlite3
"""

import sqlite3

CONNECT = sqlite3.connect('sqlite.db')


def execute_sql(sql, *args):
    """执行语句"""
    try:
        cursor = CONNECT.cursor()
        cursor.execute(str(sql), (*args))
        execute_result = cursor.fetchall()
        cursor.close()
        CONNECT.commit()
        return execute_result
    except sqlite3.Error as sqlit_error:
        print(sqlit_error)


def close_connection():
    """关闭连接"""
    CONNECT.close()


def init_table():
    """初始化表结构"""
    execute_sql('create table if not exists question (\
        id INTEGER PRIMARY KEY AUTOINCREMENT, \
        question_text varchar(400), \
        individual int(1),\
        round int(2), \
        phase varchar(20))')

    # 答题结果表
    execute_sql('create table if not exists ai_result (\
        id INTEGER PRIMARY KEY AUTOINCREMENT, \
        ai_type varchar(20), \
        result_index int(1), \
        result_text varchar(20), \
        result_type varchar(20), \
        result_prop decimal(3,2), \
        question_id int(8))')

    # 正确结果表
    execute_sql('create table if not exists correct_result (\
        id INTEGER PRIMARY KEY AUTOINCREMENT, \
        correct_index int(1), \
        correct_text varchar(20), \
        question_id int(8))')


if __name__ == '__main__':
    # 新建表
    execute_sql('create table if not exists ai_result_test (\
        id INTEGER PRIMARY KEY AUTOINCREMENT, \
        ai_type varchar(20), \
        result int(1), \
        result_text varchar(20), \
        result_type varchar(20), \
        round int(2), \
        phase varchar(8))')

    # 增
    execute_sql('insert into ai_result_test (\
        id, ai_type, result, result_text, result_type, round, phase) \
        values (null, ?, ?, ?, ?, ?, ?)',
                ('human', 0, '答案', 'single', 0, '20180131'))

    print('add data...')
    # 查
    print(execute_sql('select * from ai_result_test where result_type =?', ('single',)))

    # 改
    execute_sql('update ai_result_test set result_type =? where result_type =?',
                ('percentage', 'single'))

    print('update data...')
    print(execute_sql('select * from ai_result_test where result_type =?', ('percentage',)))

    # 删
    execute_sql('delete from ai_result_test where result_type =?',
                ('percentage',))
    print('delete data...')
    print(execute_sql('select * from ai_result_test'))

    close_connection()
