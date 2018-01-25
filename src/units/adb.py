#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
    #Author: smilesmith
    #Date: 2018-01-25
    #Desc: ADB相关命令
"""
import subprocess
import time
from src.configs import config


def get_device_infos():
    """获取设备信息"""
    devices_list = []
    device_infos = subprocess.Popen(
        'adb devices', shell=True, stdout=subprocess.PIPE)
    out, err = device_infos.communicate()
    for line in out.decode("utf-8").splitlines()[1:-1]:
        devices_list.append(line.split("\t")[0])
    return devices_list


def tap_android(index, devices_list):
    """根据答案点击安卓设备"""
    if len(devices_list) == 0:
        print("[%s] !!! No device found, Please check your adb" %
              log_date_time_string())
        return
    top_start = int(config.TAP_START)
    top_gap = int(config.TAP_GAP)
    target_left = 540
    target_top = top_start + top_gap * (index + 1)

    for device_id in devices_list:
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
