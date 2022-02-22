@[TOC](目录)
# 基本类型

 - byte/8
 - char/16
 - short/16
 - int/32
 - float/32
 - long/64
 - double/64
 - boolean/~

JVM会在编译时期将boolean类型的数据转换为int，使用1来表示true，0表示false。JVM支持boolean数组，但是通过读写byte数组来实现的。


![在这里插入图片描述](https://img-blog.csdnimg.cn/7c85cdb8099848a384c6b3fae6ae9a00.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_15,color_FFFFFF,t_70,g_se,x_16)
# 包装类型
基本类型都有对应的包装类型，**基本类型与其对应的包装类型之间的赋值使用自动装箱与拆箱完成**。

```java
Integer x=2;//装箱 调用了 Integer.valueOf(2)
int y=x;//拆箱 调用了 x.intValue()
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/7a5e9bfaf433403d8c6ab3b1b6fb8d73.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_20,color_FFFFFF,t_70,g_se,x_16)

# 缓存池
引入：`new Integer(123)`和`Integer.valueOf(123)`的区别

 - `new Integer(123)`每次都会新建一个对象
 - `Integer.valueOf(123)`会使用缓存池中的对象，多次调用会取得同一对象的引用

```java
Integer x = new Integer(123);
Integer y = new Integer(123);
System.out.println(x == y); // false
Integer z = Integer.valueOf(123);
Integer k = Integer.valueOf(123);
System.out.println(z == k); // true
```

来看看valueOf的源码：

```java
public static Integer valueOf(int i) {
	//判断值是否在缓存池
 	if (i >= IntegerCache.low && i <= IntegerCache.high)
 	return IntegerCache.cache[i + (-IntegerCache.low)];
 	return new Integer(i);
}
```
java8中，**Integer缓存池的大小默认为-128~127**

Integer缓存池IntegerCache的上界可以调节，启动jvm时，通过`-XX:AutoBoxCacheMax=<size>`来指定这个缓存池的大小，这个选项在jvm初始化时会设定一个名为java.lang.IntegerCache.high系统属性，然后IntegerCache初始化时就会读取该系统属性来决定上界


