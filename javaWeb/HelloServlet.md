@[TOC](目录)
# Servlet
## 简介

 - sun公司开发动态web的一门技术
 - sun公司在这些API中提供了一个接口叫做：Selvlet,如果想要开发Servlet，只需：编写一个类，实现Servlet接口，部署到web服务器上

把实现了Servlet接口的java程序叫做Servlet

## HelloServlet
父项目：

```xml
<modules>
        <module>javaweb-01</module>
</modules>
```
子项目会有：

```xml
<parent>
    <artifactId>java03</artifactId>
    <groupId>com.lhy</groupId>
    <version>1.0-SNAPSHOT</version>
</parent>
```

父项目中的依赖子项目可以用

 1. 修改web.xml为最新的
 2. 将maven的结构搭建完整

编写程序：

 1. 编写一个普通类
 2. 实现Servelet接口，这里直接继承

```java
public class HelloServelet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        //ServletOutputStream outputStream = resp.getOutputStream();
        PrintWriter writer = resp.getWriter();//响应流
        writer.print("hello!!!");
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doGet(req, resp);
    }
}
```

 1. 编写Servelet的映射，要通过浏览器来访问，要连接web服务器，所以要注册我们写的Servelt，好需要给他一个浏览器要的访问路径

```xml
<!--注册Servelet-->
<servlet>
        <servlet-name>hello</servlet-name>
        <servlet-class>com.lhy.servlet.HelloServelet</servlet-class>
    </servlet>
    <!--Servelt请求路径-->
    <servlet-mapping>
        <servlet-name>hello</servlet-name>
        <url-pattern>hello</url-pattern>
    </servlet-mapping>
```

**配置comcat**

配置项目发布的路径

启动测试
![在这里插入图片描述](https://img-blog.csdnimg.cn/6c3ad625a235429ba79cb164d963525c.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_20,color_FFFFFF,t_70,g_se,x_16)

这里的项目结构的工件只能留一个，否则会报错

![在这里插入图片描述](https://img-blog.csdnimg.cn/51ad8453c10348bd8ad0340af982020b.png)
注意：新建项目的时候要选中web
