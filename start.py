#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""程序主进程"""

from gui import main
from src.units import adb, sqlite

def run():
    """主函数"""
    adb.init()
    sqlite.init_table()
    main.init_gui()


if __name__ == '__main__':
    run()