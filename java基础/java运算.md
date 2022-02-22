@[TOC](目录)
# 参数传递
Java 的参数是以**值传递**的形式传⼊⽅法中，⽽不是引⽤传递。

在将⼀个参数传⼊⼀个⽅法时，本质上是将对象的地址以值的⽅式传递到形参中

```java
public static void main(String[] args) {
 	Dog dog = new Dog("A");
 	System.out.println(dog.getObjectAddress()); // Dog@4554617c
 	func(dog);
 	System.out.println(dog.getObjectAddress()); // Dog@4554617c
 	System.out.println(dog.getName()); // A
 }
 private static void func(Dog dog) {
 	System.out.println(dog.getObjectAddress()); // Dog@4554617c
 	dog = new Dog("B");
 	System.out.println(dog.getObjectAddress()); // Dog@74a14482
 	System.out.println(dog.getName()); // B
 }
```
# float和double
**Java 不能隐式执⾏向下转型，因为这会使得精度降低。**

```java
//float f=1.1;
float f = 1.1f;
```
1.1字面量属于double类型

# 隐式类型转换
使⽤ += 或者 ++ 运算符会执⾏隐式类型转换

```java
s1+=1;
s1++;
//s1=(short) (s1+1);
```
# switch
从java7开始，可以在switch判断条件中使用String对象

```java
String s = "a";
switch (s) {
 	case "a":
 		System.out.println("aaa");
 		break;
 	case "b":
 		System.out.println("bbb");
 		break;
}
```
如果值过于复杂，那么还是⽤ if ⽐较合适


