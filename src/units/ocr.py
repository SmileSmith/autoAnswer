# -*- coding: utf-8 -*-

# @Author  : Skye
# @Time    : 2018/1/9 19:34
# @desc    :

import pytesseract
from PIL import ImageFilter
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


def ocr_img(image):

    question_region = config.QUESTION_REGION
    choices_region =  config.CHOICES_REGION

    question_im = image.crop(
        (question_region[0], question_region[1], question_region[2], question_region[3]))  # 坚果 pro1
    choices_im = image.crop(
        (choices_region[0], choices_region[1], choices_region[2], choices_region[3]))

    # 边缘增强滤波,不一定适用
    #question_im = question_im.filter(ImageFilter.EDGE_ENHANCE)
    #choices_im = choices_im.filter(ImageFilter.EDGE_ENHANCE)

    # 转化为灰度图
    question_im = question_im.convert('L')
    choices_im = choices_im.convert('L')

    # 把图片变成二值图像
    question_im = binarizing(question_im, 190)
    choices_im = binarizing(choices_im, 190)

    #question_im = question_im.convert('1')
    #choices_im = choices_im.convert('1')
    # question_im.show()
    # choices_im.show()
    # img=depoint(choices_im)
    # img.show()

    # win环境
    # tesseract 路径

    pytesseract.pytesseract.tesseract_cmd = config.get(
        "tesseract", "tesseract_cmd")

    # 语言包目录和参数
    tessdata_dir_config = config.get("tesseract", "tessdata_dir_config")

    # lang 指定中文简体
    question = pytesseract.image_to_string(
        question_im, lang='chi_sim', config=tessdata_dir_config)
    question = question.replace("\n", "")[2:]
    # 处理将"一"识别为"_"的问题
    question = question.replace("_", "一")

    choice = pytesseract.image_to_string(
        choices_im, lang='chi_sim', config=tessdata_dir_config)
    # 处理将"一"识别为"_"的问题
    choices = choice.strip().replace("_", "一").split("\n")
    choices = [x for x in choices if x != '']

    # 兼容截图设置不对，意外出现问题为两行或三行
    # if (choices[0].endswith('?')):
    #     question += choices[0]
    #     choices.pop(0)
    # if (choices[1].endswith('?')):
    #     question += choices[0]
    #     question += choices[1]
    #     choices.pop(0)
    #     choices.pop(0)

    return question, choices


def ocr_img_tess(image, config):
    """只运行一次 Tesseract"""

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

    # lang 指定中文简体
    region_text = pytesseract.image_to_string(
        region_im, lang='chi_sim', config=tessdata_dir_config)
    region_text = region_text.replace("_", "一").split("\n")
    texts = [x for x in region_text if x != '']
    # print(texts)
    if len(texts) > 2:
        question = texts[0]
        choices = texts[1:]
    else:
        print(Fore.RED + '截图区域设置错误，请重新设置' + Fore.RESET)
        exit(0)

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
