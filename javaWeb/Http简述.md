@[TOC](目录)
# Http
## 什么是http
HTTP（超文本传输协议）是一个简单的请求-响应协议，它通常运行在TCP之上

 - 文本:html,字符串
 - 超文本:图片，音乐，视频，定位，地图...
 - 80


HTTPS：
 - 443

## 两个时代

 - http1.0:客户端可以于web服务器连接后，只能获得一个web资源，断开资源
 - http:2.0:可以获得多个web资源

## Http请求

 - 客户端--发请求--服务器
![在这里插入图片描述](https://img-blog.csdnimg.cn/dc0743aeb644409197b9e53216fb6493.png)
### 请求行
 - 请求行中的请求方式：GET
 - 请求方式：GET,POST,
 - get:请求能够携带的参数比较少，大小有限制，会在浏览器的URL地址上显示数据内容，不安全，但高效
 - post:请求能够携带的参数没有限制，大小没有限制，不会在浏览器的URL地址上显示数据内容，安全，但不高效

### 消息头
![在这里插入图片描述](https://img-blog.csdnimg.cn/46fbef630dfa4eaea2cbe22653da1b2d.png)

 - 

## Http响应
服务器--响应--客户端
![在这里插入图片描述](https://img-blog.csdnimg.cn/422423f9c84a484583be81aa1f212067.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_15,color_FFFFFF,t_70,g_se,x_16)
## 响应状态码
200：请求响应成功
3xx:请求重定向
你重新到我给你的新位置去
4xx:找不到资源404
5xx:服务器代码错误500 502：网关错误


## 当浏览器地址栏输入地址并回车的一瞬间到页面展示经历了什么？
