@[TOC](文章目录)

# 使用mysql
## 连接

 - 主机名（计算机名）——如果连接到本地MySQL服务器，为localhost；
 - 端口（如果使用默认端口3306之外的端口）
 - 一个合法的用户名；
 - 用户口令（如果需要）

## 选择数据库

**关键字(key word) 作为MySQL语言组成部分的一个保留字。决不要用关键字命名一个表或列。附录E列出了MySQL的关键字。**

*必须先使用USE打开数据库，才能读取其中的数据*

![在这里插入图片描述](https://img-blog.csdnimg.cn/fa9df58c133744b29f647a8364945874.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_11,color_FFFFFF,t_70,g_se,x_16)
其他show语句：

 - SHOW STATUS，用于显示广泛的服务器状态信息；
 - SHOW CREATE DATABASE和SHOW CREATE TABLE，分别用来显示创建特定数据库或表的MySQL语句；
 - SHOW GRANTS，用来显示授予用户（所有用户或特定用户）的安全权限；
 - SHOW ERRORS和SHOW WARNINGS，用来显示服务器错误或警告消息。

## 小结
如何连接和登录MySQL，如何用USE选择数据库，如何用SHOW查看MySQL数据库、表和内部信息

