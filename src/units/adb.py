#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
    #Author: smilesmith
    #Date: 2018-01-25
    #Desc: ADB相关命令
"""
import subprocess
import time
import os
import sys
from multiprocessing import Process
from PIL import Image
from src.configs import config
from .ocr import ocr_img_tess

DEVICES_LIST = []

OPTIONS_LIST = []

def init():
    """初始化adb"""
    global DEVICES_LIST
    DEVICES_LIST = get_device_infos()

def get_device_infos():
    """获取设备信息"""
    devices_list = []
    device_infos = subprocess.Popen(
        'adb devices', shell=True, stdout=subprocess.PIPE)
    out, err = device_infos.communicate()
    print('\n' + str(out.decode("utf-8")))
    for line in out.decode("utf-8").splitlines()[1:-1]:
        devices_list.append(line.split("\t")[0])
    return devices_list

def get_options(device_id, index):
    """获取选项"""
    start = time.time()
    check_screenshot(device_id, index)
    open_start = time.time()
    print("> step 3: 截图的时间为： " + str(open_start-start) + "秒")
    img = Image.open("./screenshot" + index + ".png")
    print("> step 3: 读图的时间为： " + str(time.time()-open_start) + "秒")
    question, options = ocr_img_tess(img)
    OPTIONS_LIST.append({'options': options, 'device_id': device_id})

def get_options_all():
    """获取所有选项"""
    for index, device_id in enumerate(DEVICES_LIST):
        sub_process = Process(target=get_options, args=(device_id, str(index)))
        sub_process.start()

def tap_android_individual(results):
    """根据不同的安卓设备点击"""
    pass

def tap_android_all(result_index):
    """根据答案点击安卓设备"""
    if len(DEVICES_LIST) == 0:
        print("[%s] !!! No device found, Please check your adb" %
              log_date_time_string())
        return
    left_start, top_start = config.TAP_START.replace(" ", "").split(",")
    target_left = int(left_start)
    top_start = int(top_start)
    top_gap = int(config.TAP_GAP)
    target_top = top_start + top_gap * (result_index + 1)

    for device_id in DEVICES_LIST:
        command = "adb -s " + device_id + " shell input tap " + \
            str(target_left) + " " + str(target_top)
        subprocess.Popen(command, shell=True, stdout=subprocess.PIPE)


def log_date_time_string():
    """Return the current time formatted for logging."""
    monthname = [None,
                 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    now = time.time()
    year, month, day, hh, mm, ss, x, y, z = time.localtime(now)
    s = "%02d/%3s/%04d %02d:%02d:%02d" % (
        day, monthname[month], year, hh, mm, ss)
    return s


# SCREENSHOT_WAY 是截图方法，经过 check_screenshot 后，会自动递减，不需手动修改
SCREENSHOT_WAY = 3

def pull_screenshot(device_id, index):
    """
    获取屏幕截图，目前有 0 1 2 3 四种方法，未来添加新的平台监测方法时，
    可根据效率及适用性由高到低排序
    """
    global SCREENSHOT_WAY
    if 1 <= SCREENSHOT_WAY <= 3:
        process = subprocess.Popen(
            "adb -s " + device_id + " shell screencap -p",
            shell=True, stdout=subprocess.PIPE)
        binary_screenshot = process.stdout.read()
        if SCREENSHOT_WAY == 2:
            binary_screenshot = binary_screenshot.replace(b'\r\n', b'\n')
            # binary_screenshot = binary_screenshot.split(b' ')
            # binary_screenshot = binary_screenshot[len(binary_screenshot) - 1]
            #print(binary_screenshot)
        elif SCREENSHOT_WAY == 1:
            binary_screenshot = binary_screenshot.replace(b'\r\r\n', b'\n')
        f = open("screenshot" + index + ".png", 'wb')
        f.write(binary_screenshot)
        f.close()
    elif SCREENSHOT_WAY == 0:
        os.system("adb -s " + device_id + " shell screencap -p /sdcard/screenshot" + index + ".png")
        os.system("adb -s " + device_id + " pull /sdcard/screenshot" + index + ".png .")


def check_screenshot(device_id, index):
    """
    检查获取截图的方式
    """
    global SCREENSHOT_WAY
    if os.path.isfile('screenshot.png'):
        try:
            os.remove('screenshot.png')
        except Exception:
            pass
    if SCREENSHOT_WAY < 0:
        print('暂不支持当前设备')
        sys.exit()
    pull_screenshot(device_id, index)
    try:
        Image.open("./screenshot" + index + ".png").load()
        print('> step 3: get photo by type {} '.format(SCREENSHOT_WAY))
    except Exception:
        SCREENSHOT_WAY -= 1
        check_screenshot(device_id, index)
