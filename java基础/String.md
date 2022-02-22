@[TOC](目录)
java8
```java
public final class String
 	implements java.io.Serializable, Comparable<String>, CharSequence {
	 /** The value is used for character storage. */
 	private final char value[];
}
```
String被声明为final，不可被继承

java9

```java
public final class String
	 implements java.io.Serializable, Comparable<String>, CharSequence {
	 /** The value is used for character storage. */
	 private final byte[] value;
	 /** The identifier of the encoding used to encode the bytes in {@code
value}. */
	 private final byte coder;//标识使用的编码
}
```
# 不可变的好处

 1. **可以缓存hash值**

String用作HashMap的Key，使得hash值不可变，因此只需进行一次计算

 2. **String Pool的需要**

一个String对象已经被创建，就会从String Pool中取得引用，只有String是不可变的，可能使用String Pool


![在这里插入图片描述](https://img-blog.csdnimg.cn/c9852c71a2f6462696768d0ad38ea13a.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_20,color_FFFFFF,t_70,g_se,x_16)

 3. 安全性

不变性保证了参数不可变。例如网络请求时作为网络连接参数一旦改变那就是连接的其他的主机了

 4. 线程安全

天生具备线程安全


# String StringBuffer StringBuilder

 1. 可变性

 - String不可变
 - StringBuilder和StringBuffer可变

 2. 线程安全
- String不可变，因此线程安全
- StringBuilder 不是线程安全的
- StringBuffer 是线程安全的，内部使⽤ synchronized 进⾏同步

# String Pool
字符串常量池

```java
String s1 = new String("aaa");
String s2 = new String("aaa");
System.out.println(s1 == s2); // false
String s3 = s1.intern();
String s4 = s2.intern();
System.out.println(s3 == s4); // true

String s5 = "bbb";
String s6 = "bbb";
System.out.println(s5 == s6); // true
```
*在 Java 7 之前，String Pool 被放在运⾏时常量池中，它属于永久代。⽽在 Java 7，String Pool 被移到堆中。这是因为永久代的空间有限，在⼤量使⽤字符串的场景下会导致 OutOfMemoryError 错误*

# new String("abc")

```java
public class NewStringTest {
 	public static void main(String[] args) {
 	String s = new String("abc");
 	}
}
```
使⽤ javap -verbose 进⾏反编译:

```java
// ...
Constant pool:
// ...
 #2 = Class #18 // java/lang/String
 #3 = String #19 // abc
// ...
 #18 = Utf8 java/lang/String
 #19 = Utf8 abc
// ...
 public static void main(java.lang.String[]);
 descriptor: ([Ljava/lang/String;)V
 flags: ACC_PUBLIC, ACC_STATIC
 Code:
 stack=3, locals=2, args_size=1
 0: new #2 // class java/lang/String
 3: dup
 4: ldc #3 // String abc
 6: invokespecial #4 // Method java/lang/String."
<init>":(Ljava/lang/String;)V
 9: astore_1
// ...
```
String的构造函数：

```java
public String(String original) {
 	this.value = original.value;
 	this.hash = original.hash;
}
```

