@[TOC](目录)
# 什么是JSP
java server pages:Java服务器端页面，也和Servlet一样，用于动态Web技术
最大的特点：

 - 写JSP就像是在写HTML
 - 区别：
 - HTML只给用户提供静态的数据
 - JSP页面可以嵌入JAVA代码，为用户提供动态数据

# JSP原理
浏览器向服务器发送请求，不管访问什么资源，其实都是在访问Servlet

JSP最终也会被转化为java类

```java
public interface JspPage extends Servlet {
    void jspInit();

    void jspDestroy();
}
```

 1. 判断请求
 2. 内置一些对象
 3. 输出页面前增加的代码

# JSP基础语法
了解即可（java语法都支持）

## JSP表达式

```jsp
<%--JSP表达式
用来将程序的输出到客户端--%>
<%= new java.util.Date()%>
```
## JSP注释

```jsp
<%-- 注释 --%>
```

## JSP脚本片段

```jsp
<%
    int sum=0;
    for (int i = 0; i < 100; i++) {
        sum+=i;
    }
    out.println("<h1>Sum"+sum+"</h1>");
%>
```
## 脚本片段再实现
jsp声明：会被编译到java类中，其他的，就会被生成到jspServlet中

## EL表达式
## JSP声明

```jsp
<%! int i = 0; %> 
<%! int a, b, c; %> 
<%! Circle a = new Circle(2.0); %> 
```

## JSP指令
![在这里插入图片描述](https://img-blog.csdnimg.cn/3540edc3accf4ead8ff510c4cf325874.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_20,color_FFFFFF,t_70,g_se,x_16)
## JSP行为
![在这里插入图片描述](https://img-blog.csdnimg.cn/a24e94500e8447c581bd619f457a8a06.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_20,color_FFFFFF,t_70,g_se,x_16)

## 中文编码

```jsp
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
```
## 判断语句

```jsp
<% if (day == 1 || day == 7) { %>
      <p>今天是周末</p>
<% } else { %>
      <p>今天不是周末</p>
<% } %>
```
## 循环语句

```jsp
<%for ( fontSize = 1; fontSize <= 3; fontSize++){ %>
   <font color="green" size="<%= fontSize %>">
    菜鸟教程
   </font><br />
<%}%>
```

