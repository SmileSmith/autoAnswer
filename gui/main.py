#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import tkinter as tk
from tkinter import font

from multiprocessing import Process

from src.controllers import controller
from src.spiders import sogouSpider
from src.units import adb

from gui.loop import loop_sogou, loop_uc

APP_NAME = 'AI Answer Help'
APP_SIZE = '1300x700'

COLOR_BG = '#328294'
COLOR_FONT = '#fff'

FONT_FAMIY = "微软雅黑"
FONT_BASE = None
FONT_TITLE = None

root = None

class Window(tk.Tk):
    """窗口"""

    def __init__(self, master=None):
        super().__init__(master)
        self.title(APP_NAME)
        self.geometry(APP_SIZE)
        self.create_fonts()

    def create_fonts(self):
        global FONT_BASE
        FONT_BASE = font.Font(root=self, family=FONT_FAMIY,)
        global FONT_TITLE
        FONT_TITLE = font.Font(
            root=self, family=FONT_FAMIY, size=30, weight="bold")


class Application(tk.Frame):
    """主应用"""

    def __init__(self, master=None):
        super().__init__(master)
        self['bg'] = COLOR_BG
        self.pack(expand=True, fill='both')
        self.create_frames()

    def create_frames(self):
        title = Title(self)
        title.pack(side='top', fill='x')
        config_frame = ConfigFrame(self)
        config_frame.pack(side='left', expand=True, fill='y')
        content_frame = ContentFrame(self, width=700)
        content_frame.pack(side='left', expand=True, fill='y')
        controller_frame = ControllerFrame(self)
        controller_frame.pack(side='left', expand=True, fill='y')


class Title(tk.Frame):
    """标题区域"""

    def __init__(self, master=None):
        super().__init__(master)
        self.create_widgets()

    def create_widgets(self):
        title = tk.Label(self, height=2)
        title['text'] = APP_NAME
        title['font'] = FONT_TITLE
        title['bg'] = COLOR_BG
        title['fg'] = COLOR_FONT
        title['bd'] = 1
        title.pack(expand=True, fill='x')


class BaseFrame(tk.Frame):
    def __init__(self, master=None, bg=COLOR_BG, width=300):
        super().__init__(master)
        self['width'] = width
        self['bg'] = bg
        self.create_widgets()

    def create_widgets(self):
        pass


class ConfigFrame(BaseFrame):
    """配置区域"""

    def create_widgets(self):
        base = BaseFrame(self, bg=COLOR_FONT)
        base.pack(pady=20)
        self.ai_auto = tk.Checkbutton(self, text="AI Auto", )
        self.ai_auto['font'] = FONT_BASE
        self.ai_auto.pack(fill='x', padx=50, ipady=10, pady=30)
        self.ai_save = tk.Checkbutton(self, text="Save Result", )
        self.ai_save['font'] = FONT_BASE
        self.ai_save.pack(fill='x', padx=50, ipady=10, pady=30)
        controller.toggle_ai({'switch': 'ON'})


class ContentFrame(BaseFrame):
    """内容区域"""

    def create_widgets(self):
        base = BaseFrame(self, bg=COLOR_FONT, width=700)
        base.pack(pady=20)
        adb.DEVICES_LIST
        text = 'Hello! App Has Inited. Try Start~'
        self.log = tk.Message(self, text=text, justify='left', anchor='nw', width=600)
        self.log['font'] = FONT_BASE
        self.log['bg'] = COLOR_BG
        self.log['fg'] = COLOR_FONT
        self.log.pack(pady=30, expand=True, fill='both')    

class ControllerFrame(BaseFrame):
    """操作区域"""

    def create_widgets(self):
        self.round = 1

        base = BaseFrame(self, bg=COLOR_FONT)
        base.pack(pady=20)
        self.start = tk.Button(self, text="Start", command=self.start_loop)
        self.start['font'] = FONT_BASE
        self.start.pack(fill='x', padx=50, ipady=10, pady=30)
        self.start = tk.Button(self, text="Stop", command=self.stop_loop)
        self.start['font'] = FONT_BASE
        self.start.pack(fill='x', padx=50, ipady=10, pady=30)
        self.quit = tk.Button(self, text="Quit", command=self.quit_all)
        self.quit.pack(side='bottom', fill='x', padx=50, ipady=10, pady=30,)
    
    def start_loop(self):
        self.sogou = Process(target=loop_sogou)
        self.sogou.start()
        self.uc = Process(target=loop_uc)
        self.uc.start()

    def stop_loop(self):
        self.sogou.terminate()
        self.uc.terminate()

    def quit_all(self):
        self.stop_loop()
        root.destroy()



def init_gui():
    global root
    root = Window()
    app = Application(master=root)
    app.mainloop()


if __name__ == '__main__':
    init_gui()