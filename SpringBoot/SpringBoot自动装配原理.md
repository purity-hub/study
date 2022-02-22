@[TOC](目录)
# 原理初探
pom.xml

 - spring-boot-dependencies:核心依赖在父工程中
 - 我们在引入一些SpringBoot的时候，不需要指定版本，就因为有这些版本仓库

启动器

 - `<dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter</artifactId>
        </dependency>
    </dependencies>`
    
   
 - 启动器：就是springboot的启动场景
 - 比如spring-boot-starter-web,它会自动导入web环境下的所有依赖
 - 将所有的场景变成一个一个的启动器
 - 我们要什么功能，只要找到对应的启动器就可以了

**主程序**

```java
//SpringBootApplication:标注这个类是springboot的应用
@SpringBootApplication
public class HelloApplication {

    public static void main(String[] args) {
        //Springboot应用程序
        SpringApplication.run(HelloApplication.class, args);
    }

}
```

```java
@SpringBootConfiguration配置
   @Configuration 
     @Component
@EnableAutoConfiguration自动配置
   @AutoConfigurationPackage自动配置包
     @Import({Registrar.class})导入选择器
```
Ctrl+单击------>点击查看源码

 1. springboot在启动的时候，从类路径下/META-INF/spring.factories获取指定的值；
 2. 将这些自动配置的类导入容器，自动配置就会生效，帮我们做了自动配置
 3. 以前我们需要自动配置的东西，现在sprongboot帮我们做了
 4. 整个javaEE,解决方案和自动配置的东西都在`org.springframework.boot.autoconfigure;`
 5. 它会把所有需要的组件，以类名的方式返回，这些组件就会被添加到容器；
 6. 容器中也会存在非常多的xxxAutoConfiguration的文件，给这个场景导入了所有的组件；并自动配置
 7. 有了自动配置类，就免了手动配置的操作了

