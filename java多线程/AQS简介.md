@[TOC](目录)
# AQS简介
AbstractQueueSynchronizer

 - 抽象：只实现一些主要逻辑，有些方法由子类实现
 - 队列：使用先进先出队列存储数据
 - 同步：实现了同步的功能

AQS是一个用来构建锁和同步器的框架，能简单高效地构造出应用广泛地同步器。

# AQS的数据结构
![在这里插入图片描述](https://img-blog.csdnimg.cn/a9f52a746a394be29d0f1a6f27fc73b2.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_20,color_FFFFFF,t_70,g_se,x_16)
# 资源共享模式

 - 独占模式：资源独占，一次只能一个线程获取
 - 共享模式：可同时被多个线程获取

## 获取资源
![在这里插入图片描述](https://img-blog.csdnimg.cn/e081cee53288403fb40f83171eee50d2.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_20,color_FFFFFF,t_70,g_se,x_16)


## 释放资源


