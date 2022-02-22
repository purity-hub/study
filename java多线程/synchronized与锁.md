@[TOC](目录)
# synchronized
**临界区**：指某一块代码区域，同一时刻只能由一个线程执行

# 锁

 1. 无锁状态
 2. 偏向锁状态
 3. 轻量级锁状态
 4. 重量级锁状态


## java对象头
内容：
![在这里插入图片描述](https://img-blog.csdnimg.cn/7ab62f0a6a6845e3b4f6d121480e0b0b.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_20,color_FFFFFF,t_70,g_se,x_16)
Mark Word:
![在这里插入图片描述](https://img-blog.csdnimg.cn/f9178dc55a384794b1d3ab95667d188d.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_20,color_FFFFFF,t_70,g_se,x_16)
## 偏向锁
在资源无争的情况下消除了同步语句(加锁/解锁)，提高了程序的运行性能

![在这里插入图片描述](https://img-blog.csdnimg.cn/638942c247a24bc19095e5e689817c4e.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_20,color_FFFFFF,t_70,g_se,x_16)
## 轻量级锁
## 重量级锁
## 优缺点
![在这里插入图片描述](https://img-blog.csdnimg.cn/00977e8ad4ff4bcd86206829eaafbc4d.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_20,color_FFFFFF,t_70,g_se,x_16)

