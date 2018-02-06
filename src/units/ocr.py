# -*- coding: utf-8 -*-

# @Author  : Skye
# @Time    : 2018/1/9 19:34
# @desc    :

import time
import pytesseract
from colorama import Fore
from src.configs import config
from .method import log_info, log_warn

# 二值化算法


def binarizing(img, threshold):
    pixdata = img.load()
    w, h = img.size
    for y in range(h):
        for x in range(w):
            if pixdata[x, y] < threshold:
                pixdata[x, y] = 0
            else:
                pixdata[x, y] = 255
    return img


# 去除干扰线算法
def depoint(img):  # input: gray image
    pixdata = img.load()
    w, h = img.size
    for y in range(1, h - 1):
        for x in range(1, w - 1):
            count = 0
            if pixdata[x, y - 1] > 245:
                count = count + 1
            if pixdata[x, y + 1] > 245:
                count = count + 1
            if pixdata[x - 1, y] > 245:
                count = count + 1
            if pixdata[x + 1, y] > 245:
                count = count + 1
            if count > 2:
                pixdata[x, y] = 255
    return img


def ocr_img_tess_choices(image):
    """只运行一次 Tesseract"""

    choices_region = config.CHOICES_REGION

    # 切割选项区域，左上角坐标和右下角坐标,自行测试分辨率
    region_im = image.crop(
        (choices_region[0], choices_region[1], choices_region[2], choices_region[3]))

    # 转化为灰度图
    region_im = region_im.convert('L')

    # 把图片变成二值图像
    region_im = binarizing(region_im, 190)

    # region_im.show()

    # win环境
    # tesseract 路径

    pytesseract.pytesseract.tesseract_cmd = config.TESSERACT_CMD

    # 语言包目录和参数
    tessdata_dir_config = config.TESSDATA_DIR

    # lang 指定中文简体
    region_text = pytesseract.image_to_string(
        region_im, lang='chi_sim', config=tessdata_dir_config)

    region_text = region_text.replace("_", "一").split("\n")
    texts = [x for x in region_text if x != '']

    choices = []

    if len(texts) > 2:
        choices = texts
    else:
        print(Fore.RED + '截图区域设置错误，请重新设置' + Fore.RESET)

    return choices


def ocr_img_tess(image):
    """只运行一次 Tesseract"""

    combine_region = config.COMBINE_REGION

    # 切割题目+选项区域，左上角坐标和右下角坐标,自行测试分辨率
    region_im = image.crop(
        (combine_region[0], combine_region[1], combine_region[2], combine_region[3]))

    # 转化为灰度图
    region_im = region_im.convert('L')

    # 把图片变成二值图像
    region_im = binarizing(region_im, 190)

    # region_im.show()

    # win环境
    # tesseract 路径

    pytesseract.pytesseract.tesseract_cmd = config.TESSERACT_CMD

    # 语言包目录和参数
    tessdata_dir_config = config.TESSDATA_DIR

    # lang 指定中文简体
    region_text = pytesseract.image_to_string(
        region_im, lang='chi_sim', config=tessdata_dir_config)

    region_text = region_text.replace("_", "一").split("\n")
    texts = [x for x in region_text if x != '']
    # print(texts)
    question = ""
    choices = []

    if len(texts) > 2:
        question = texts[0]
        choices = texts[1:]
    else:
        print(Fore.RED + '截图区域设置错误，请重新设置' + Fore.RESET)

    if not choices:
        return "", []

    # 意外出现问题为两行或三行
    if choices[0].endswith('?'):
        question += choices[0]
        choices.pop(0)
    elif choices[1].endswith('?'):
        question += choices[0]
        question += choices[1]
        choices.pop(0)
        choices.pop(0)

    return question, choices
