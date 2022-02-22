项目结构：
![在这里插入图片描述](https://img-blog.csdnimg.cn/2323e7fa7c6442f3a58cf97f7d301476.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_14,color_FFFFFF,t_70,g_se,x_16)
原理：
![在这里插入图片描述](https://img-blog.csdnimg.cn/aefadc77219f4cf7969d056227887d2b.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_16,color_FFFFFF,t_70,g_se,x_16)
pom.xml:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>2.6.0</version>
        <relativePath/> <!-- lookup parent from repository -->
    </parent>
    <groupId>com.lhy</groupId>
    <artifactId>BookLend</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <name>BookLend</name>
    <description>BookLend</description>
    <properties>
        <java.version>11</java.version>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
        <project.build.locales>zh_CN</project.build.locales>
        <project.build.jdk>${java.version}</project.build.jdk>
        <!--<spring.boot.version>2.0.5.RELEASE</spring.boot.version>-->
        <spring.boot.version>2.3.1.RELEASE</spring.boot.version>
        <springboot-javafx-support.version>2.1.6</springboot-javafx-support.version>
    </properties>

    <dependencies>
        <!--jdbc-->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-jdbc</artifactId>
        </dependency>
        <!--mysql-->
        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
            <scope>runtime</scope>
        </dependency>
        <!--lombok-->
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <optional>true</optional>
        </dependency>
        <!--测试-->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>
        <!--javafx-->
        <dependency>
            <groupId>de.roskenet</groupId>
            <artifactId>springboot-javafx-support</artifactId>
            <version>2.1.6</version>
        </dependency>
        <!--mybatis-->
        <dependency>
            <groupId>org.mybatis</groupId>
            <artifactId>mybatis</artifactId>
            <version>3.5.7</version>
        </dependency>
        <!--不能少了这个依赖啊mybatis-->
        <dependency>
            <groupId>org.mybatis.spring.boot</groupId>
            <artifactId>mybatis-spring-boot-starter</artifactId>
            <version>1.1.1</version>
        </dependency>
        <!--junit-->
        <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <scope>test</scope>
        </dependency>
        <!--阿里巴巴-->
        <dependency>
            <groupId>com.alibaba</groupId>
            <artifactId>druid-spring-boot-starter</artifactId>
            <version>1.1.14</version>
        </dependency>
        <!--springboot-starter-->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter</artifactId>
            <version>2.3.1.RELEASE</version>
        </dependency>
    </dependencies>

    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
                <version>2.6.0</version>
                <configuration>
                    <excludes>
                        <exclude>
                            <groupId>org.projectlombok</groupId>
                            <artifactId>lombok</artifactId>
                        </exclude>
                    </excludes>
                </configuration>
            </plugin>
        </plugins>
    </build>

</project>

```
主启动类：

```java
package com.lhy.booklend;

import com.lhy.booklend.View.HelloworldView;
import de.felixroske.jfxsupport.AbstractJavaFxApplicationSupport;
import javafx.event.EventHandler;
import javafx.scene.control.Alert;
import javafx.scene.control.ButtonType;
import javafx.stage.Stage;
import javafx.stage.WindowEvent;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Optional;

@SpringBootApplication
public class BookLendApplication extends AbstractJavaFxApplicationSupport {

    public static void main(String[] args) {
        //SpringApplication.run(BookLendApplication.class, args);
        launch(BookLendApplication.class, HelloworldView.class,args);
    }

    //通过调用Thread类的start()方法来启动一个线程
    @Override
    public void start(Stage stage) throws Exception {
        //设置关闭请求的监听器
        stage.setOnCloseRequest(new EventHandler<WindowEvent>() {
            @Override
            public void handle(WindowEvent event) {
                Alert alert = new Alert(Alert.AlertType.CONFIRMATION);
                alert.setTitle("退出？！");
                //设置对话框的 icon 图标
                alert.initOwner(stage);
                alert.setHeaderText("您确定要退出程序？");
                Optional result = alert.showAndWait();
                if (result.get() == ButtonType.CANCEL) {
                    event.consume();
                }

            }
        });

        super.start(stage);
    }
}

```
主启动类中对应打开的视图类：

```java
package com.lhy.booklend.View;

import de.felixroske.jfxsupport.AbstractFxmlView;
import de.felixroske.jfxsupport.FXMLView;

@FXMLView(value="/static/fxml/Helloworld.fxml")
public class HelloworldView extends AbstractFxmlView {
}

```
指向一个配置文件：

```xml
<?import javafx.scene.layout.Pane?>
<?import javafx.scene.control.Label?>
<?import javafx.scene.text.Font?>
<?import javafx.scene.control.Button?>
<Pane maxHeight="-Infinity" maxWidth="-Infinity" minHeight="-Infinity" minWidth="-Infinity" prefHeight="400.0" prefWidth="600.0" xmlns="http://javafx.com/javafx/8.0.112"
      xmlns:fx="http://javafx.com/fxml/1"
       fx:controller="com.lhy.booklend.login.controller.UserController">
    <children>
        <Label layoutX="99.0" layoutY="109.0" prefHeight="34.0" prefWidth="394.0" text="Hello World!">
            <font>
                <Font size="26.0" />
            </font>
        </Label>
        <Button layoutX="99.0" layoutY="169.0" prefHeight="34.0" prefWidth="150.0" text="Hello" onAction="#toHello"/>
    </children>
</Pane>

```
下面实现前后端交互：

entity:

```java
package com.lhy.booklend.login.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {

  private long id;
  private String name;
  private String password;
  private long enabled;
  private java.sql.Timestamp registeredTime;
  private String type;


  public long getId() {
    return id;
  }

  public void setId(long id) {
    this.id = id;
  }


  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }


  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }


  public long getEnabled() {
    return enabled;
  }

  public void setEnabled(long enabled) {
    this.enabled = enabled;
  }


  public java.sql.Timestamp getRegisteredTime() {
    return registeredTime;
  }

  public void setRegisteredTime(java.sql.Timestamp registeredTime) {
    this.registeredTime = registeredTime;
  }


  public String getType() {
    return type;
  }

  public void setType(String type) {
    this.type = type;
  }

}

```
mapper:

```java
package com.lhy.booklend.login.mapper;

import com.lhy.booklend.login.entity.User;
import org.apache.ibatis.annotations.Mapper;


import java.util.List;

@Mapper
public interface UserMapper {
    //查找全部用户
    List<User> findAll();
}

```
mapper.xml:

```java
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<!--nameplace只能其接口，对其实现-->
<mapper namespace="com.lhy.booklend.login.mapper.UserMapper">
    <select id="findAll" resultType="com.lhy.booklend.login.entity.User">
        --      通过idnumber查询用户，返回用户集合
        SELECT * from users
    </select>


</mapper>

```
service:

```java
package com.lhy.booklend.login.service;

import com.lhy.booklend.login.entity.User;

import java.util.List;

public interface UserService {
    List<User> findAll();
}

```
service.impl:

```java
package com.lhy.booklend.login.service.impl;

import com.lhy.booklend.login.entity.User;
import com.lhy.booklend.login.mapper.UserMapper;
import com.lhy.booklend.login.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.List;

@Repository
public class UserServiceImpl implements UserService {

    @Autowired
     UserMapper userMapper;

    @Override
    public List<User> findAll() {
        return userMapper.findAll();
    }
}

```
controller:

```java
package com.lhy.booklend.login.controller;

import com.lhy.booklend.login.service.UserService;
import de.felixroske.jfxsupport.FXMLController;
import javafx.fxml.FXML;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

@FXMLController
public class UserController {

    @Autowired
    UserService userService;

    @FXML
    public void toHello(){
        //System.out.println(userService.findAll());
        System.out.println("HelloWorld!");
    }
}

```
运行结果：
![在这里插入图片描述](https://img-blog.csdnimg.cn/3ed76db07a434c90800d13f7c15e3de1.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_20,color_FFFFFF,t_70,g_se,x_16)
![在这里插入图片描述](https://img-blog.csdnimg.cn/c9a23b75726a430b9f1f13605d4f203c.png)

