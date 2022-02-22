@[TOC](目录)
# Tomcat
apache-tomcat-10.0.11--->bin--->startup.bat

localhost:8080

jdk配置好了之后，tomcat也要配置环境变量

```xml
<Connector port="8080" protocol="HTTP/1.1"
               connectionTimeout="20000"
               redirectPort="8443" />
```
默认端口号：

 - tomcat:8080
 - mysql:3306
 - http:80
 - https:443

```xml
<Host name="localhost"  appBase="webapps"
            unpackWARs="true" autoDeploy="true">
```

 - 默认的主机名为losyhost-->127.0.0.1
 - 默认网站应用存放的位置为：webapps

## 网站是如何进行访问的？

 - 输入一个域名：回车
 - 检查本机的:C:\Windows\System32\drivers\etc\host配置文件有没有这个域名的映射
 - 有则返回对应的ip地址：127.0.0.0
 - 没有则去DNS服务器上找(全世界的域名)
![在这里插入图片描述](https://img-blog.csdnimg.cn/a835056fe50f4383886c0345490f3652.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_20,color_FFFFFF,t_70,g_se,x_16)
## 可以配置环境变量
## 发布一个web网站
 - 将自己写的网站放到服务器(tomcat)中指定的web应用文件(webapps)下

网站应该有的结构：
--webapps:
 -ROOT
 -自定义
  -WEB-INF
  --class:java程序
  --lib:web应用所依赖的jar包
  --web.xml:网站的配置文件
  -index.html
  -static
  --css
  --js
  --img

