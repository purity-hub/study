@[TOC](目录)

 - 服务器会给每一个用户（浏览器）创建一个Session对象
 - 一个Session独占一个浏览器，只要浏览器没有关闭，这个就存在
 - 用户登录之后，整个网站它都可以访问

Session和cookie的区别：

```java
public class CookieDemo1 extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        req.setCharacterEncoding("utf-16");
        resp.setCharacterEncoding("utf-16");

        PrintWriter out = resp.getWriter();
        Cookie[] cookies = req.getCookies();
        if(cookies!=null){
            out.write("您上一次登录的时间是");
            for (int i = 0; i < cookies.length; i++) {
                Cookie cookie = cookies[i];
                if(cookie.getName().equals("lastLoginTime")){
                    long lastLoginTime = Long.parseLong(cookie.getValue());
                    Date date = new Date(lastLoginTime);
                    out.write(date.toLocaleString());
                }

            }
        }else{
            out.print("这是您第一次登录");
        }
        resp.addCookie(new Cookie("lastLoginTime",System.currentTimeMillis()+""));
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doGet(req, resp);
    }
}
```

```xml
<servlet>
    <servlet-name>session</servlet-name>
    <servlet-class>com.lhy.servlet.SessionDemo1</servlet-class>
  </servlet>
  <servlet-mapping>
    <servlet-name>session</servlet-name>
    <url-pattern>/session</url-pattern>
  </servlet-mapping>
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/e8b81283c09c4989936cd08746f1cae8.png)
注销：`req.removeAttribute();`

Session和cookie的区别：

 - Cookie是把用户的数据写给用户的浏览器，浏览器（可以保存多个）
 - Session把用户的数据写到用户独占的Session中，服务端保存（保存重要信息，减少服务器资源的浪费）
 - Session对象由服务创建

使用场景：

 - 保存一个登录用户的信息
 - 购物车信息
 - 在整个网站中经常会使用的数据，会将它保存在Session中

会话自动过期：

```xml
<session-config>
    <session-timeout>15</session-timeout>
  </session-config>
```

