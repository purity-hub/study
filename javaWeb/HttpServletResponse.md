@[TOC](目录)
# HttpServletResponse
web服务器接收到客户端的http请求，针对这个请求，分别创建一个代表请求的HttpServletRequest对象，代表响应的HttpServletResponse

 - 如果要获取客户端请求过来的参数，找HttpServletRequest
 - 如果要给客户端响应一些信息：找HttpServletResponse

## 简单分类
负责向浏览器发送数据的方法

```java
ServletOutputStream getOutputStream() throws IOException;
printWriter getwriter() throws IOException;
```
负责向浏览器发送一些响应头的方法

响应的状态码：

```java
int SC_CONTINUE = 100;
int SC_SWITCHING_PROTOCOLS = 101;
int SC_OK = 200;
int SC_CREATED = 201;
int SC_ACCEPTED = 202;
int SC_NON_AUTHORITATIVE_INFORMATION = 203;
int SC_NO_CONTENT = 204;
int SC_RESET_CONTENT = 205;
int SC_PARTIAL_CONTENT = 206;
int SC_MULTIPLE_CHOICES = 300;
int SC_MOVED_PERMANENTLY = 301;
int SC_MOVED_TEMPORARILY = 302;
int SC_FOUND = 302;
int SC_SEE_OTHER = 303;
int SC_NOT_MODIFIED = 304;
int SC_USE_PROXY = 305;
int SC_TEMPORARY_REDIRECT = 307;
int SC_BAD_REQUEST = 400;
int SC_UNAUTHORIZED = 401;
int SC_PAYMENT_REQUIRED = 402;
int SC_FORBIDDEN = 403;
int SC_NOT_FOUND = 404;
int SC_METHOD_NOT_ALLOWED = 405;
int SC_NOT_ACCEPTABLE = 406;
int SC_PROXY_AUTHENTICATION_REQUIRED = 407;
int SC_REQUEST_TIMEOUT = 408;
int SC_CONFLICT = 409;
int SC_GONE = 410;
int SC_LENGTH_REQUIRED = 411;
int SC_PRECONDITION_FAILED = 412;
int SC_REQUEST_ENTITY_TOO_LARGE = 413;
int SC_REQUEST_URI_TOO_LONG = 414;
int SC_UNSUPPORTED_MEDIA_TYPE = 415;
int SC_REQUESTED_RANGE_NOT_SATISFIABLE = 416;
int SC_EXPECTATION_FAILED = 417;
int SC_INTERNAL_SERVER_ERROR = 500;
int SC_NOT_IMPLEMENTED = 501;
int SC_BAD_GATEWAY = 502;
int SC_SERVICE_UNAVAILABLE = 503;
int SC_GATEWAY_TIMEOUT = 504;
int SC_HTTP_VERSION_NOT_SUPPORTED = 505;
```
## 常见应用

 1. 向浏览器输出消息
 2. 下载文件
 - 要获取的下载文件路径
 - 下载的文件名
 - 设置想办法让浏览器能支持下载我们需要的东西
 - 获取下载文件的输入流
 - 创建缓冲区
 - 获取OutputStream对象
 - 将FileOutputStream流写到buffer缓冲区
 - 使用OutputStream将缓冲区中的数据输入到客户端

```java
public class FileServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
//      -要获取的下载文件路径
        String realPath = "D:\\javawebstudy\\javaweb-03\\target\\classes\\computer.png";
        System.out.println("下载文件的路径是"+realPath);
//      下载的文件名
        String filename = realPath.substring(realPath.lastIndexOf("\\") + 1);
//      - 设置想办法让浏览器能支持下载我们需要的东西
        resp.setHeader("Content-disposition","attachment;filename="+filename);
//      - 获取下载文件的输入流
        FileInputStream in = new FileInputStream(realPath);
//      - 创建缓冲区
        int len=0;
        byte[] buffer = new byte[1024];
//      - 获取OutputStream对象
        ServletOutputStream out = resp.getOutputStream();
//      - 将FileOutputStream流写到buffer缓冲区
//        - 使用OutputStream将缓冲区中的数据输入到客户端
        while((len=in.read(buffer))>0){
            out.write(buffer,0,len);
        }
        in.close();
        out.close();
//      
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doGet(req, resp);
    }
}

```

```xml
<servlet>
    <servlet-name>filedown</servlet-name>
    <servlet-class>com.lhy.servlet.FileServlet</servlet-class>
  </servlet>
  <servlet-mapping>
    <servlet-name>filedown</servlet-name>
    <url-pattern>/filedown</url-pattern>
  </servlet-mapping>
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/754b57e8800743709f220f0f2ca536b7.png)
下载中文文件名：`URLEncoder.encode(filename,"utf-8")`
## 验证码功能
验证码怎么来的？

 - 前端实现
 - 后端实现，需要用到java的图片类

```java
public class ImageServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        //如何让浏览器5s刷新一次
        resp.setHeader("refresh","5");
        //在内存中创建图片
        BufferedImage image = new BufferedImage(80,20,BufferedImage.TYPE_INT_BGR);
        //得到图片
        //一支笔
        Graphics2D g =(Graphics2D) image.getGraphics();
        //设置图片的背景颜色
        g.setColor(Color.WHITE);
        g.fillRect(0,0,80,20);
        //给图片写数据
        g.setColor(Color.BLUE);
        g.setFont(new Font(null,Font.BOLD,20));
        g.drawString(makeRandom(),0,20);

        //告诉浏览器这个以图片方式打开
        resp.setContentType("image/jpeg");
        //网站存在缓存，不让它缓存
        resp.setDateHeader("expires",-1);
        resp.setHeader("Cache-Control","no-cache");
        resp.setHeader("pragma","no-cache");

        //把图片写给浏览器
        ImageIO.write(image, "jpg",resp.getOutputStream());
    }
    //随机数
    private String makeRandom(){
        Random random = new Random();
        String num = random.nextInt(999999) + "";
        StringBuffer sb = new StringBuffer();
        for (int i = 0; i < 6-num.length(); i++) {
            sb.append("0");
        }
        num = sb.toString()+num;
        return num;
    }
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doGet(req, resp);
    }
}
```

```xml
<servlet>
    <servlet-name>image</servlet-name>
    <servlet-class>com.lhy.servlet.ImageServlet</servlet-class>
  </servlet>
  <servlet-mapping>
    <servlet-name>image</servlet-name>
    <url-pattern>/image</url-pattern>
  </servlet-mapping>
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/636740359c2a496e8a28c27077d2134e.png)
## 实现重定向
![在这里插入图片描述](https://img-blog.csdnimg.cn/2edcecd64f8841d78276f8c88321d957.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_13,color_FFFFFF,t_70,g_se,x_16)

 - 用户登录

```java
void sendRedirect(String var1) throws IOException;
```

```java
protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		/*
		resp.setHeader("Location","/s1/image");
		resp.setStatus(302);
		*/
        resp.sendRedirect("/s1/image");
    }
```
注册后输入url后会跳转到image页面

## 重定向和转发的区别
相同点：

 - 页面都会实现跳转

不同点：

 - 请求转发的时候，url不会产生变化
 - 重定向的时候，url地址会发生变化


```java
public class RequestTest extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("进入了");
        String username = req.getParameter("username");
        String password = req.getParameter("password");
        System.out.println(username+":"+password);
        if(username.equals("luohongyun")&&password.equals("123456")){
            System.out.println("重定向");
            resp.sendRedirect("./success.jsp");
        }
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doGet(req, resp);
    }
}
```

```jsp
<html>
<body>
<h2>Hello World!</h2>
<%@ page contentType="text/html; charset=UTF-8"  %>
<form action="/s1/login">
    用户名<input type="text" name="username"><br>
    密码<input type="password" name="password"><br>
    <input type="submit">
</form>
</body>
</html>
```

```jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>

</head>
<body>
<h1>success</h1>
</body>
</html>
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/a124056812634c179eeb7a929a2bfd54.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_13,color_FFFFFF,t_70,g_se,x_16)
![在这里插入图片描述](https://img-blog.csdnimg.cn/7a84fb45f6054f338dfa5ef087548183.png)

