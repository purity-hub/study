@[TOC](目录)

 1. UserDao接口
 2. UserDaoImpI实现类
 3. UserService业务接口
 4. UserServiceIMPI业务实现类

```xml
<dependencies>
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-webmvc</artifactId>
            <version>5.3.10</version>
        </dependency>
</dependencies>
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/316cbb85ae934e4884fd03ba7c10b93b.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_13,color_FFFFFF,t_70,g_se,x_16)
![在这里插入图片描述](https://img-blog.csdnimg.cn/df1858b01f02440e940acdfd4a9d48bb.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_10,color_FFFFFF,t_70,g_se,x_16)
UserDao:

```java
public interface UserDao {
    void getUser();
}

```
UserDaoImpl:

```java
public class UserDaoImpl implements UserDao{

    @Override
    public void getUser() {
        System.out.print("默认获取用户的数据");
    }
}
```
UserService:

```java
public interface UserService {
    void getUser();
}

```
UserServiceImpl:

```java
public class UserServiceImpl implements UserService{

    //调用接口
    private UserDao userDao=new UserDaoImpl();

    @Override
    public void getUser() {
        userDao.getUser();
    }
}
```
MyTest:

```java
public class MyTest {
    public static void main(String[] args){

        //用户实际调用的时业务层,dao层他们不需要接触
        UserService userService=new UserServiceImpl();
        userService.getUser();
    }
}
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/424b6a6639fa47e589c65bbed2d82fd5.png)
如果这时新增一个dao的实现类需求，就不得不改变原有的代码来调用

在之前的业务中，用户的需求可能会影响我们的代码，如果代码量大，修改一次的成本价十分昂贵

我们使用一个set接口实现，已经发生了革命性的变化：

```java
private UserDao userDao;
    //利用set进行动态实现注入
    public void setUserDao(UserDao userDao){
        this.userDao=userDao;
    }
```

MyTest:

```java
UserService userService=new UserServiceImpl();
((UserServiceImpl) userService).setUserDao(new UserDaoImpl());
userService.getUser();
```

 - 之前，程序是主动创建对象！控制权在程序员手上
 - 使用set注入后，程序不再有主动性，而是被动接受对象

这种思想，从本质上解决了问题，我们不用再去管对象的创建了，系统的耦合性大大降低，可以专注业务的实现上。这是IOC的原型！
