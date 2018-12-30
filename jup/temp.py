# -*- coding: utf-8 -*-
"""
Spyder Editor

This is a temporary script file.
"""



import re
def test():
    string = "He was 75 in the 1985sdfdhs 45"
    y = re.findall('[^0-9.]+', string)
    print(y)
test()
def test2():
    string = "He was 75 in the 1985sdfdhs 45"
    y = re.findall('[0-9.]+', string)
    print(y)


test2()
