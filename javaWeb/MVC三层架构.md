@[TOC](目录)
# MVC三层架构
## 什么是MVC
Model,View,Controller 模型，视图，控制器
![在这里插入图片描述](https://img-blog.csdnimg.cn/ea5e685fc4ec47749f5cd972f7d7e6d7.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_20,color_FFFFFF,t_70,g_se,x_16)
用户直接访问控制层，控制层就可以直接操作数据库
servlet--CRUD-->数据库
弊端：程序十分臃肿，不利于维护

**架构：没有什么是加一层解决不了的**
程序员调用JDBC
JDBC



![在这里插入图片描述](https://img-blog.csdnimg.cn/a2953760083b4a34820c13d1274ad3d0.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_20,color_FFFFFF,t_70,g_se,x_16)

## Model

 - 业务处理：业务逻辑（service）
 - 数据持久层：CRUD（Dao）

## View

 - 展示数据
 - 提供链接发起Servlet请求（a,form,img...）

## Controller

 - 接收用户的请求：（req:请求参数，Session信息...）
 - 交给业务层处理对应的代码
 - 控制视图的跳转

登录----->接收用户的登录请求---->处理用户的请求（获取用户的参数）------>交给业务层处理登录业务------>Dao(查询用户名，密码是否正确)----->数据库

