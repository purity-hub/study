@[TOC](目录)

# HttpServletRequest
## 获取前端传递的参数

```java
req.getParamerter();
req.getParameterMap();
```

## 请求转发

```java
public class LoginServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doPost(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String username = req.getParameter("username");
        String password = req.getParameter("password");
        String[] hobbies = req.getParameterValues("hobby");
        System.out.println(username);
        System.out.println(password);
        System.out.println(Arrays.toString(hobbies));
        //请求转发
        req.getRequestDispatcher("./success.jsp").forward(req,resp);
    }
}
```

```jsp
<html>
<body>
<h2>Hello World!</h2>
<%@ page contentType="text/html; charset=UTF-8"  %>
<div style="align-content: center">
    <form action="/s1/login" method="post">
        用户名：<input type="text" name="username"><br>
        密码：<input type="password" name="password"><br>
        爱好：<input type="checkbox" name="hobby" value="打球">打球
             <input type="checkbox" name="hobby" value="睡觉">睡觉
             <input type="checkbox" name="hobby" value="唱歌">唱歌<br>
        <input type="submit">
    </form>
</div>
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
![在这里插入图片描述](https://img-blog.csdnimg.cn/dd96a564c7b745189810da6060fe693a.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_13,color_FFFFFF,t_70,g_se,x_16)
![在这里插入图片描述](https://img-blog.csdnimg.cn/4fd702faa2b14eefac4408c77a154489.png)

