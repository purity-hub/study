@[TOC](目录)
# 访问权限
private、protected 以及 public

# 抽象类与接口
## 抽象类
抽象类和抽象⽅法都使⽤ abstract 关键字进⾏声明。如果⼀个类中包含抽象⽅法，那么这个类必须声明为抽象类。

**抽象类不能被实例化，只能被继承**

## 接口
接⼝的成员（字段 + ⽅法）默认都是 public 的，并且不允许定义为 private 或者 protected。从 Java 9开始，允许将⽅法定义为 private，这样就能定义某些复⽤的代码⼜不会把⽅法暴露出去。

## 比较

 - 从设计层⾯上看，抽象类提供了⼀种 IS-A 关系，需要满⾜⾥式替换原则，即⼦类对象必须能够替换掉所有⽗类对象。⽽接⼝更像是⼀种
   LIKE-A 关系，它只是提供⼀种⽅法实现契约，并不要求接⼝和实现接⼝的类具有 IS-A 关系。
 - 从使⽤上来看，⼀个类可以实现多个接⼝，但是不能继承多个抽象类。
 - 接⼝的字段只能是 static 和 final 类型的，⽽抽象类的字段没有这种限制。
 - 接⼝的成员只能是 public 的，⽽抽象类的成员可以有多种访问权限。


## 选择
使用接口：

 - 需要让不相关的类都实现⼀个⽅法，例如不相关的类都可以实现 Comparable 接⼝中的compareTo() ⽅法；
 - 需要使⽤多重继承。

使用抽象类：

 - 需要在⼏个相关的类中共享代码。
 - 需要能控制继承来的成员的访问权限，⽽不是都为 public。
 - 需要继承⾮静态和⾮常量字段。


**接⼝优先于抽象类**

*因为接⼝没有抽象类严格的类层次结构要求，可以灵活地为⼀个类添加⾏为。并且从 Java 8 开始，接⼝也可以有默认的⽅法实现，使得修改接⼝的成本也变的很低。*

# super

 - 访问⽗类的构造函数
 - 访问⽗类的成员

```java
public class SuperExample {
 	protected int x;
 	protected int y;
 	public SuperExample(int x, int y) {
 		this.x = x;
 		this.y = y;
 	}
 	public void func() {
 	System.out.println("SuperExample.func()");
 	}
}
```

```java
public class SuperExtendExample extends SuperExample {
 	private int z;
 	public SuperExtendExample(int x, int y, int z) {
 		super(x, y);
 		this.z = z;
 	}
 	@Override
 	public void func() {
 		super.func();
 		System.out.println("SuperExtendExample.func()");
 	}
}
```
# 重写与重载
## 重写

 - ⼦类⽅法的访问权限必须⼤于等于⽗类⽅法；
 - ⼦类⽅法的返回类型必须是⽗类⽅法返回类型或为其⼦类型。
 - ⼦类⽅法抛出的异常类型必须是⽗类抛出异常类型或为其⼦类型。

**使⽤ @Override 注解，可以让编译器帮忙检查是否满⾜上⾯的三个限制条件**

## 重载
存在于同⼀个类中，指⼀个⽅法与已经存在的⽅法名称上相同，但是参数类型、个数、顺序⾄少有⼀个不同。

```java
class OverloadingExample {
 	public void show(int x) {
 		System.out.println(x);
 	}
 	public void show(int x, String y) {
 		System.out.println(x + " " + y);
 	}
}
```

