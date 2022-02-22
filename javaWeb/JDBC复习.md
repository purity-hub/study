@[TOC](目录)
JDBC:java连接数据库

![在这里插入图片描述](https://img-blog.csdnimg.cn/971667138eda4803b4c56734966e24d7.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_18,color_FFFFFF,t_70,g_se,x_16)
需要jar包的支持：

 - java.sql
 - javax.sql
 - mysql-conneter-java...连接驱动


```xml
<dependency>
      <groupId>mysql</groupId>
      <artifactId>mysql-connector-java</artifactId>
      <version>8.0.25</version>
    </dependency>
```

```java
public class Testjdbc {
    public static void main(String[] args) {
        //配置信息
        String url="jdbc:mysql://localhost:3306/jdbc";
        String username="root";
        String password="123456";

        //加载驱动
        //Class.forName("com.mysql.jdbc.Driver");
        try {
            DriverManager.registerDriver(new com.mysql.jdbc.Driver());
        } catch (SQLException e) {
            e.printStackTrace();
        }

        //连接数据库
        try {
            Connection connection = DriverManager.getConnection(url, username, password);
            //向数据库发送SQL的对象Statement:CRUD
            Statement statement = connection.createStatement();
            //编写SQL
            String sql="select * from users";
            //执行查询SQL，返回一个结果集
            ResultSet rs = statement.executeQuery(sql);
            while(rs.next()){
                System.out.println("id="+rs.getObject("id"));
                System.out.println("name="+rs.getObject("name"));
                System.out.println("password="+rs.getObject("password"));
                System.out.println("email="+rs.getObject("email"));
                System.out.println("birthday="+rs.getObject("birthday"));
            }
            //关闭连接，释放资源
            rs.close();
            statement.close();
            connection.close();

        } catch (SQLException e) {
            e.printStackTrace();
        }


    }
}
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/37d50f9bb4174f73a1ca8402035a2d44.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_9,color_FFFFFF,t_70,g_se,x_16)
# 再IDEA中连接数据库
![在这里插入图片描述](https://img-blog.csdnimg.cn/24869dc5623a45ebb0eb68e03fbae030.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_10,color_FFFFFF,t_70,g_se,x_16)
# JDBC六步

 1. 加载驱动
 2. 连接数据库，代表数据库
 3. 向数据库发送SQL的对象Statement
 4. 编写SQL
 5. 执行SQL
 6. 关闭连接

增删改返回一个受影响的行数
查则返回一个结果集


预编译有？占位符，最后赋值

```java
String sql="insert into users(id,name,password,email,birthday) values(?,?,?,?,?)";
connection.prepareStatement(sql).setInt(1,1);
//......
```


# 事务
要么都成功，要么都失败
ACID原则，保证数据的安全

```
开启事务
事务提交
事务回滚
关闭事务

转账：
A：1000
B：1000

```
**junit做单元测试**


@Test注解只有在方法上有效

搭建一个环境
![在这里插入图片描述](https://img-blog.csdnimg.cn/175a8dfbc0004ae9a7193dd25401ff65.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_14,color_FFFFFF,t_70,g_se,x_16)

```sql
start transaction ;#开启事务

update account set money = money-100 where name='A';
update account set money = money+100 where name='B';
commit ;
```

```java
public class Testjdbc2 {
    @Test
    public void Test(){
        String url="jdbc:mysql://localhost:3306/jdbc";
        String username="root";
        String password="123456";

        try {
            //注册驱动
            DriverManager.registerDriver(new com.mysql.jdbc.Driver());
        } catch (SQLException e) {
            e.printStackTrace();
        }
        Connection connection = null;
        try {
            connection = DriverManager.getConnection(url, username, password);
        } catch (SQLException e) {
            e.printStackTrace();
        }
        try {
            //Connection connection = DriverManager.getConnection(url, username, password);
            //开启事务
            connection.setAutoCommit(false);
            //执行的sql语句
            String sql="update account set money = money-100 where name='A';";
            connection.createStatement().executeUpdate(sql);
            //在这里制造一个错误
            int i=1/0;
            String sql2="update account set money = money+100 where name='B';';";
            connection.createStatement().executeUpdate(sql2);
        } catch (SQLException e) {
            try {
                //如果出现异常，则回滚
                connection.rollback();
            } catch (SQLException ex) {
                ex.printStackTrace();
            }
            e.printStackTrace();
        }
    }
}
```

