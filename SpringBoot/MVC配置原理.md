@[TOC](目录)


//如果想自定义一些定制化的组件，只要写这个组件，交给spring-boot自动装配
//扩展 springmvc

```java
@Configuration
public class MyMvcConfig implements WebMvcConfigurer {
    //ViewResolver 实现了视图解析器接口的类，我们就可以把它看作视图解析器

    public static class MyViewResolver implements ViewResolver{


        @Bean
        public ViewResolver myViewResolver(){
            return new MyViewResolver();
        }

        @Override
        public View resolveViewName(String viewName, Locale locale) throws Exception {
            return null;
        }
    }
}
```


