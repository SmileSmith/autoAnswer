#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
    #Author: smilesmith
    #Date: 2018-02-05
    #Desc: 回顾分析控制器
"""
from src.services import reviewService

def get_review_datas():
    """获取所有结果"""
    return reviewService.get_review_datas()