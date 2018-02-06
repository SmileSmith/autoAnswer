#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
    #Author: smilesmith
    #Date: 2018-01-25
    #Desc: 配置信息
"""
import configparser

_SCREENT_CONFIG = configparser.ConfigParser()
_SCREENT_CONFIG.read('./src/configs/screen.conf', encoding='utf-8')

QUESTION_REGION = _SCREENT_CONFIG.get("region", "question_region").replace(' ', '').split(',')
QUESTION_REGION = list(map(int, QUESTION_REGION))

CHOICES_REGION = _SCREENT_CONFIG.get("region", "choices_region").replace(' ', '').split(',')
CHOICES_REGION = list(map(int, CHOICES_REGION))

COMBINE_REGION = _SCREENT_CONFIG.get("region", "combine_region").replace(' ', '').split(',')
COMBINE_REGION = list(map(int, COMBINE_REGION))

TAP_START = _SCREENT_CONFIG.get("tap", "start")
TAP_GAP = _SCREENT_CONFIG.get("tap", "gap")


_OCR_CONFIG = configparser.ConfigParser()
_OCR_CONFIG.read('./src/configs/ocr.conf', encoding='utf-8')

TESSERACT_CMD = _OCR_CONFIG.get("tesseract", "tesseract_cmd")
TESSDATA_DIR = _OCR_CONFIG.get("tesseract", "tessdata_dir")

_WEIGHT_CONFIG = configparser.ConfigParser()
_WEIGHT_CONFIG.read('./src/configs/weight.conf', encoding='utf-8')

BAIDU_WEIGHT = _WEIGHT_CONFIG.getfloat("weight", "baidu")
BAIDU_P_WEIGHT = _WEIGHT_CONFIG.getfloat("weight", "baidu_percentage")
SOGOU_WEIGHT = _WEIGHT_CONFIG.getfloat("weight", "sogou")
UC_WEIGHT = _WEIGHT_CONFIG.getfloat("weight", "uc")


_CIRCULATE_CONFIG = configparser.ConfigParser()
_CIRCULATE_CONFIG.read('./src/configs/circulate.conf', encoding='utf-8')

TRY_TIMES = int(_CIRCULATE_CONFIG.get("circulate", "try_times"))
OCR_THRESHOLD = float(_CIRCULATE_CONFIG.get("circulate", "ocr_threshold"))
WAIT_TIME = float(_CIRCULATE_CONFIG.get("circulate", "wait_time"))