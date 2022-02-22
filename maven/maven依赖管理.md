@[TOC](目录)
# 依赖配置
依赖指当前项目运行所需的jar包，一个项目可以设置多个依赖
格式：

```xml
<!--设置当前项目所依赖的所有jar包-->
<dependencies>
	<!--设置具体的依赖-->
    <dependency>
      <!--设置所属群组id-->
      <groupId>junit</groupId>
      <!--依赖所属项目id-->
      <artifactId>junit</artifactId>
      <!--依赖版本号-->
      <version>4.11</version>
      <scope>test</scope>
    </dependency>
  </dependencies>
```
# 依赖传递
依赖具有传递性

 - 直接依赖：在当前项目中通过依赖配置建立依赖关系
 - 间接依赖：被资源的资源如果依赖其他资源，当前项目间接依赖其他资源

依赖传递的冲突问题

 - 路径优先：当依赖中出现相同的资源时，层级越深，优先级越低，层级越浅，优先级越高
 - 声明优先：当资源在相同层级依赖时，配置顺序靠前的覆盖配置顺序靠后的
 - 特殊优先：当同级配置了相同资源的不同版本，后配置的覆盖先配置的

![在这里插入图片描述](https://img-blog.csdnimg.cn/d6df19597e99432b8731b3e586ce5f1d.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_20,color_FFFFFF,t_70,g_se,x_16)
# 可选依赖
可选依赖指对外隐藏当前所依赖的资源--不透明

```xml
<dependencies>
    <dependency>
      <groupId>junit</groupId>
      <artifactId>junit</artifactId>
      <version>4.11</version>
      <optional>true</optional>
    </dependency>
  </dependencies>
```
# 排除依赖
排除依赖指主动断开依赖的资源，被排除的资源无需指定版本--不需要
```xml
<dependencies>
    <dependency>
      <groupId>junit</groupId>
      <artifactId>junit</artifactId>
      <version>4.11</version>
      <exclusions>
        <exclusion>
          <groupId>org.hamcrest</group>
          <artifactId>hamcrest-core</artifactId>
        </exclusion>
      </exclusions>
    </dependency>
  </dependencies>
```
# 依赖范围
依赖的jar默认情况可以在任何地方使用，可以通过scope标签设定其作用范围

作用范围：

 - 主程序范围有效(main文件夹范围内)
 - 测试程序范围有效(test文件范围内)
 - 是否参与打包(package指令范围内)
![在这里插入图片描述](https://img-blog.csdnimg.cn/a9c3521f204c4ffa8d56a361c07423bb.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_20,color_FFFFFF,t_70,g_se,x_16)
# 依赖范围传递
带有依赖范围的资源在进行传递时，作用范围将受到影响
![在这里插入图片描述](https://img-blog.csdnimg.cn/80e577673847474abb5e3e3f3c4cc52a.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_20,color_FFFFFF,t_70,g_se,x_16)

