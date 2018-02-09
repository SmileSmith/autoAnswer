#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import tkinter as tk

APP_NAME = 'AI Answer Help'
APP_SIZE = '1200x600'

COLOR_BG = '#328294'


class Window(tk.Tk):
    """窗口"""
    def __init__(self, master=None):
        super().__init__(master)
        self.title(APP_NAME)
        self.geometry(APP_SIZE)

class Application(tk.Frame):
    """主应用"""
    def __init__(self, master=None):
        super().__init__(master)
        self['bg']=COLOR_BG
        self.pack(expand=True, fill='both')
        self.create_widgets()
    
    def create_widgets(self):
        pass


window = Window()
app = Application(master=window)
app.mainloop()

