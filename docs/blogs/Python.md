---
title: Python
date: '2025-07-07 14:29:37'
meta:
  - name: keywords
    content: Python
tags:
  - Python
categories:
  - Python
permalink: /post/python-z24kfx0.html
author:
  name: xiaoqin
  link: https://github.com/wine-wind
---


<!-- more -->




# Python

## 变量和简单数据类型

### title()

> 以首字母大写的方式显示每个单词，即将每个单词的首字母都改为大写。

```python
name = "ada lovelace"
print(name.title())

# Ada Lovelace
```

### upper()

> 将字符串改为全部大写

```python
name = "Ada Lovelace"
print(name.upper())
# ADA LOVELACE
```

### lower()

> 将字符串改为全部小写

```python
name = "Ada Lovelace"
print(name.lower())
# ada lovelace
```

### 字符串中使用变量（f的用法）

```python
first_name = "ada"
last_name = "lovelace"
# --------------例1-----------------
# 第一种方法
# full_name = first_name + " " + last_name
# 第二种方法
# full_name = f"{first_name} {last_name}"
# 第三种方法
# full_name = "{} {}".format(first_name, last_name)
# 第四种方法
# full_name = " ".join([first_name, last_name])
# 第五种方法
# full_name = "".join([first_name, " ", last_name])
# print(full_name)
# ada lovelace

# --------------例2-----------------
full_name = f"{first_name} {last_name}"
print(f"Hello, {full_name.title()}!")
# Hello, Ada Lovelace!

# --------------例3-----------------
first_name = "ada"
last_name = "lovelace"
full_name = f"{first_name} {last_name}"
message = f"Hello, {full_name.title()}!"
print(message)
# Hello, Ada Lovelace!
```

### 使用制表符或换行符来添加空白（\t）

> 空白 泛指任何非打印字符，如空格、制表符和换行符。

```python
print("Python")
# Python
print("\tPython")
# 		Python
print("Languages:\nPython\nC\nJavaScript")
'''
Languages:
Python
C
JavaScript
'''
print("Languages:\n\tPython\n\tC\n\tJavaScript")
'''
Languages:
        Python
        C
        JavaScript
'''
```

### rstrip()

> Python能够找出字符串开头和末尾多余的空白。要确保字符串末尾没有空白，可使用方法rstrip()。

‍

```python
favorite_language = 'python  '
print(favorite_language.rstrip())
# python
```

‍
