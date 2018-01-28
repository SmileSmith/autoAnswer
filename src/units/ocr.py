# -*- coding: utf-8 -*-

# @Author  : Skye
# @Time    : 2018/1/9 19:34
# @desc    :

import time
import pytesseract
from colorama import Fore
from src.configs import config

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

def ocr_img_tess(image):
    """只运行一次 Tesseract"""
    start = time.time()

    combine_region =  config.COMBINE_REGION

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

    pytesseract.pytesseract.tesseract_cmd =  config.TESSERACT_CMD

    # 语言包目录和参数
    tessdata_dir_config =  config.TESSDATA_DIR

    ocr_start = time.time()
    print("> step 3: 切图的时间为：" + str(ocr_start-start) + "秒")

    # lang 指定中文简体
    region_text = pytesseract.image_to_string(
        region_im, lang='chi_sim', config=tessdata_dir_config)

    split_start = time.time()
    print("> step 3: OCR的时间为：" + str(split_start-ocr_start) + "秒")
    
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

    if len(choices) == 0:
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

    print("> step 3: 文字拼接的时间为：" + str(time.time()-split_start) + "秒")
    return question, choices
