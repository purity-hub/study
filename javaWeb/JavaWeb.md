@[TOC](目录)
# 基本概念
web开发：

 - web:网页的意思
 - 静态web:html,css. 提供给所有人看的数据始终不会发生变化
 - 动态web：每个人看到的信息不同
技术栈：servlet/ISP,ASP,PHP


在Java中，动态web资源开发的技术统称为JavaWeb

## Web应用程序
可以提供浏览器访问的程序

 - a.html、b.html......多个web资源可以被外界访问

![在这里插入图片描述](https://img-blog.csdnimg.cn/3968dd8f88964af5b1afd96af54f67f4.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_16,color_FFFFFF,t_70,g_se,x_16)

 - 能访问到的任何资源都存放于某个角落的计算机上
 - URL
 - 这个统一的web资源会被放在同一个文件夹上，web应用程序-->Tomcat:服务器
 - 一个web应用由多部分组成(静态web，动态web)
 - html,css,js
 - jsp,servlet
 - java程序
 - jar包
 - 配置文件(Properties)

web应用程序编写完毕后，若想提供给外界访问：需要一个服务器来统一管理

## 静态web

![在这里插入图片描述](https://img-blog.csdnimg.cn/c4c04f66b2c9409a83f9bcd9d63f7525.png)
存在的缺点：

 - web页面无法动态更新，所有用户看到的都是同一页面
 - 轮播图，点击特效：伪动态
 - JavaScript
 - VBScript
 - 数据无法持久化，用户无法交互

## 动态web
页面会动态展示，web的页面展示的效果因人而异


![在这里插入图片描述](https://img-blog.csdnimg.cn/0203ce4950cf4fcc921c6eb371e6e852.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_20,color_FFFFFF,t_70,g_se,x_16)
缺点：
假如服务器的动态资源出现了错误，需要重新编写**后台程序**，程序发布，停机维护
优点：

 - web页面可以动态更新
 - 可以于数据交互（数据持久化）


