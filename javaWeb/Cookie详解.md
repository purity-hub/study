@[TOC](目录)
# 会话
用户打开一个浏览器，点击了很多超链接，访问了多个web资源，关闭浏览器，这个过程可以称之为**会话**

**有状态会话**：
怎么证明自己是学生？

我       学校

 1. 发票 学校给我开发票
 2. 学校登记 学校标记我来过了

--一个网站怎么证明自己来过了
客户端 服务端

 1. 服务端给客户端一个信件，客户端下次访问服务器带上信件就可以了：cookie
 2. 服务器登记来过了，下次来时匹配一下

# 保存会话的两种技术
**cookie**

 - 客户端技术（响应，请求）

**session**

 - 服务器技术，利用这个技术，可以保存用户会话信息，我们可以把信息或数据放在Session中

常见场景：网站登录后下次不用登录了，第二次访问就进去了


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
    <servlet-name>cookiedemo1</servlet-name>
    <servlet-class>com.lhy.servlet.CookieDemo1</servlet-class>
  </servlet>
  <servlet-mapping>
    <servlet-name>cookiedemo1</servlet-name>
    <url-pattern>/c1</url-pattern>
  </servlet-mapping>
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/7a5f7bfcb9df42f8be7d3eb16f090331.png)
设置有效期：`setAge(24*60*60)`为一天

 - 一个cookie只能保存一个信息
 - 一个web站点可以给浏览器发送多个cookie，最多存放20个cookie
 - 300个是浏览器上限
 - cookie大小有限制4kb

删除cookie:

 - 不设置有效期，关闭浏览器，自动失效
 - 设置有效期时间为0`setAge(0)`

中文解码：

```java
out.write(URLDecoder.decode(cookie.getValue(),"utf-8"));
```

