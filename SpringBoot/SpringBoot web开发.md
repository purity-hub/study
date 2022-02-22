@[TOC](目录)
# SpringBoot web开发
jar:webapp

自动装配

springboot到底帮我们配置了什么？我们能不能修改，扩展。

 - xxxxAutoConfiguration 向容器中自动配置组件
 - xxxxProperties自动配置类，装配配置文件中自定义的一些内容

要解决的问题：

 - 导入静态资源
 - 首页
 - jsp,模板引擎 Thymeleaf
 - 装配扩展SpringMVC
 - 增删改查
 - 拦截器
 - 国际化
# 静态资源

```java
public void addResourceHandlers(ResourceHandlerRegistry registry) {
            if (!this.resourceProperties.isAddMappings()) {
                logger.debug("Default resource handling disabled");
            } else {
                this.addResourceHandler(registry, "/webjars/**", "classpath:/META-INF/resources/webjars/");
                this.addResourceHandler(registry, this.mvcProperties.getStaticPathPattern(), (registration) -> {
                    registration.addResourceLocations(this.resourceProperties.getStaticLocations());
                    if (this.servletContext != null) {
                        ServletContextResource resource = new ServletContextResource(this.servletContext, "/");
                        registration.addResourceLocations(new Resource[]{resource});
                    }

                });
            }
        }
```


![在这里插入图片描述](https://img-blog.csdnimg.cn/35974f9b403448b4aaba129d69a34929.png)
public 目录下新建1.js文件helllo
![在这里插入图片描述](https://img-blog.csdnimg.cn/a206c7250cd04abcbd040b48e8d52c8b.png)

resources>static>public

总结：

 1. 在SpringBoot,我们可以使用以下方式处理静态资源
 2. webjars
 3. public,static,/**,resources  
 4. 优先级：resources>static:(默认)>public


