 *.xml文件路径在java包下时，不可使用mybatis.mapper-locations配置，可根据路径配置如下

在pom.xml的<build>标签中添加如下

```xml
<build>
        <resources>
            <resource>
                <directory>src/main/java</directory>
                <includes>
                    <include>**/*.xml</include>
                </includes>
            </resource>
            <resource>
                <directory>src/main/resources</directory>
            </resource>
        </resources>
    </build>
```

```yml
mybatis:
  type-aliases-package: com.lhy.pojo
```
连接数据库：

```yml
server:
  port: 8080
spring:
  datasource:
    username: root
    password: 123456
    url: jdbc:mysql://localhost:3306/animalmanage?useSSL=false&serverTimezone=UTC&useUnicode=true&characterEncoding=UTF-8
    driver-class-name: com.mysql.cj.jdbc.Driver
    type: com.alibaba.druid.pool.DruidDataSource
```

```java
@Mapper
public interface LoginMapper {
    public User selectUserById(int id);
    public User selectUserByName(String name);
    public int insertUser(User user);
}
```

```yml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="com.lhy.mapper.LoginMapper">
    <select id="selectUserById" resultType="com.lhy.pojo.User" parameterType="int">
        SELECT * from users where idnumber = #{id}
    </select>
    <select id="selectUserByName" resultType="com.lhy.pojo.User" parameterType="String">
        SELECT * from users where username = #{username}
    </select>
    <insert id="insertUser" parameterType="com.lhy.pojo.User">
        insert into  users(name,password) values(#{name},#{password})
    </insert>

</mapper>
```
实体类可以用idea自动生成


