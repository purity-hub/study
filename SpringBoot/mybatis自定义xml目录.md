pom.xml:

```xml
<build>
<resources>
            <resource>
                <directory>src/main/resources</directory>
                <filtering>true</filtering>
            </resource>
            <!--xml文件-->
            <resource>
                <directory>src/main/java</directory>
                <includes>
                    <include>**/*.xml</include>
                </includes>
            </resource>
        </resources>
    </build>
```
配置文件：

```properties
mybatis.mapper-locations=classpath*:com/lhy/booklend/**/mapper/xml/*Mapper.xml
```
**代表任意目录


