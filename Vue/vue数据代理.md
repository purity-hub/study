@[TOC](目录)

![在这里插入图片描述](https://img-blog.csdnimg.cn/7d73d5f2246542228eb2fda8b4b57834.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_20,color_FFFFFF,t_70,g_se,x_16)
![在这里插入图片描述](https://img-blog.csdnimg.cn/fbcab36a39934e8eb51e8ced17e8302d.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_20,color_FFFFFF,t_70,g_se,x_16)
# 总结

 1. Vue数据代理：
通过vm对象来代理data对象中属性的操作(读/写)
  2. Vue数据代理好处：
更加方便地操作data中地数据
3. 基本原理：
通过Object.defineProperty()把data对象中所有属性添加到vm上，为每一个添加到vm上地属性，都指定一个getter和setter。在getter和setter内部去操作(读/写)data中对应地属性。

