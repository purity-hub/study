@[TOC](目录)
Filter:过滤器，用来过滤网站的数据

 - 处理中文乱码
 - 登录验证...

![在这里插入图片描述](https://img-blog.csdnimg.cn/4fcdae6bc0e446d3b7598f1f12fdaffe.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_20,color_FFFFFF,t_70,g_se,x_16)

Filter开发步骤

 1. 导包
 2. 编写过滤器：导包别导错

![在这里插入图片描述](https://img-blog.csdnimg.cn/4a377ff8222a413c843d4f1f156c9c9e.png)
乱码:

```java
public class CharsetFilter implements Filter {
    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        System.out.println("CharsetFilter初始化");
    }

    
    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        servletRequest.setCharacterEncoding("utf-8");
        servletResponse.setCharacterEncoding("utf-8");
        servletResponse.setContentType("text/html;charset=utf-8");
        System.out.println("CharsetFilter执行前");
        filterChain.doFilter(servletRequest,servletResponse);
        System.out.println("CharsetFilter执行后");
    }

    @Override
    public void destroy() {
        System.out.println("CharsetFilter销毁");
    }
}
```
在web.xml中配置过滤器
```xml
<filter>
    <filter-name>charsetFilter</filter-name>
    <filter-class>com.lhy.filter.CharsetFilter</filter-class>
  </filter>
  <filter-mapping>
    <filter-name>charsetFilter</filter-name>
    <url-pattern>/servlet/*</url-pattern>
  </filter-mapping>
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/0fa4f5b703ee4d0d8120aec6d3acd357.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/9e9052ab9e73464989619825c69d2709.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_20,color_FFFFFF,t_70,g_se,x_16)
服务器停止后：销毁
![在这里插入图片描述](https://img-blog.csdnimg.cn/6124b16df15647a0a072490fede2b12f.png)

