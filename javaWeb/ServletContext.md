@[TOC](目录)
# ServletContext
web容器在启动时，会为每个web程序都创建一个对应的ServeletContext对象，它代表了当前的web应用

 ## 共享数据：
 

```java
 public class HelloSevlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        ServletContext context = this.getServletContext();
        String username="luohongyun";
        context.setAttribute("username",username);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doGet(req, resp);
    }
}
```

```java
public class GetContext extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        ServletContext context = this.getServletContext();
        String username = (String) context.getAttribute("username");
        System.out.println(username);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doGet(req, resp);
    }
}

```

```xml
<servlet>
    <servlet-name>hello</servlet-name>
    <servlet-class>com.lhy.servlet.HelloSevlet</servlet-class>
  </servlet>
  <servlet-mapping>
    <servlet-name>hello</servlet-name>
    <url-pattern>/hello</url-pattern>
  </servlet-mapping>
  <servlet>
    <servlet-name>getcontext</servlet-name>
    <servlet-class>com.lhy.servlet.GetContext</servlet-class>
  </servlet>
  <servlet-mapping>
    <servlet-name>getcontext</servlet-name>
    <url-pattern>/getcontext</url-pattern>
  </servlet-mapping>
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/0f001d7de3374e37a6424ccc34470f50.png)
## 获取初始化参数

```xml
<context-param>
    <param-name>url</param-name>
    <param-value>jdbc:mysql://localhost:3306/mybatis</param-value>
  </context-param>
```

```java
public class ServeletDemo extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        ServletContext context = this.getServletContext();
        String url = context.getInitParameter("url");
        resp.getWriter().print(url);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doGet(req, resp);
    }
}
```
## 请求转发

```java
protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        ServletContext context = this.getServletContext();
        RequestDispatcher dispatcher = context.getRequestDispatcher("/getcontext");//转发路径
        dispatcher.forward(req,resp);//请求转发
    }
```
## 读取资源文件
- 在Java目录下新建properties
- 在resources目录下新建properties

发现：都被打包到了同一路径下：classes,我们俗称这个路径为classpath
思路：需要一个而文件流，
```xml
<build>
    <resources>
      <resource>
        <directory>src/main/resources</directory>
        <includes>
          <include>**/*.properties</include>
          <include>**/*.xml</include>
        </includes>
        <filtering>true</filtering>
      </resource>
      <resource>
        <directory>src/main/java</directory>
        <includes>
          <include>**/*.properties</include>
          <include>**/*.xml</include>
        </includes>
        <filtering>true</filtering>
      </resource>
    </resources>
</build>
```

