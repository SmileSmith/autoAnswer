#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
    #Author: smilesmith
    #Date: 2018-01-29
    #Desc: 公共方法
"""
import time
from colorama import Fore


def __log_date_time_string():
    """Return the current time formatted for logging."""
    monthname = [None,
                 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    now = time.time()
    year, month, day, hh, mm, ss, x, y, z = time.localtime(now)
    s = "%02d/%3s/%04d %02d:%02d:%02d" % (
        day, monthname[month], year, hh, mm, ss)
    return s


def log_info(log_format, *args):
    """自定义日志"""
    print("[%s] %s" %
          (__log_date_time_string(), log_format % args))


def log_error(log_format, *args):
    """错误日志"""
    print(Fore.LIGHTRED_EX + ("[%s] %s" %
                              (__log_date_time_string(), log_format % args)) + Fore.RESET)


def log_warn(log_format, *args):
    """警告日志"""
    print(Fore.YELLOW + ("[%s] %s" %
                         (__log_date_time_string(), log_format % args)) + Fore.RESET)
