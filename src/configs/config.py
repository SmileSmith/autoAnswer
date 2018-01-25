#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
    #Author: smilesmith
    #Date: 2018-01-25
    #Desc: 配置信息
"""
import configparser

SCREENT_CONFIG = configparser.ConfigParser()
SCREENT_CONFIG.read('./src/configs/screen.conf', encoding='utf-8')

QUESTION_REGION = SCREENT_CONFIG.get("region", "question_region").replace(' ', '').split(',')
QUESTION_REGION = list(map(int, QUESTION_REGION))

CHOICES_REGION = SCREENT_CONFIG.get("region", "choices_region").replace(' ', '').split(',')
CHOICES_REGION = list(map(int, CHOICES_REGION))

COMBINE_REGION = SCREENT_CONFIG.get("region", "combine_region").replace(' ', '').split(',')
COMBINE_REGION = list(map(int, COMBINE_REGION))

TAP_START = SCREENT_CONFIG.get("tap", "start")
TAP_GAP = SCREENT_CONFIG.get("tap", "gap")


OCR_CONFIG = configparser.ConfigParser()
OCR_CONFIG.read('./src/configs/ocr.conf', encoding='utf-8')

TESSERACT_CMD = OCR_CONFIG.get("tesseract", "tesseract_cmd")
TESSDATA_DIR = OCR_CONFIG.get("tesseract", "tessdata_dir")
