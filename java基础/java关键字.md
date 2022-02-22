@[TOC](目录)
# final
1. 数据

- 对于基本类型，final使数值不变
- 对于引用类型，final使引用不变，但引用的对象本身可以修改

```java
final int x = 1;
// x = 2; // cannot assign value to final variable 'x'
final A y = new A();
y.a = 1;

```

2. 方法
声明⽅法不能被⼦类重写


private ⽅法隐式地被指定为 final，如果在⼦类中定义的⽅法和基类中的⼀个 private ⽅法签名相同，此时⼦类的⽅法不是重写基类⽅法，⽽是在⼦类中定义了⼀个新的⽅法。

3. 类

声明类不允许被继承

# static
1. 静态变量

- 静态变量：⼜称为类变量，也就是说这个变量属于类的，类所有的实例都共享静态变量，可以直接通过类名来访问它。静态变量在内存中只存在⼀份。
- 实例变量：每创建⼀个实例就会产⽣⼀个实例变量，它与该实例同⽣共死。

```java
public class A {
 	private int x; // 实例变量
 	private static int y; // 静态变量
 	public static void main(String[] args) {
 	// int x = A.x; // Non-static field 'x' cannot be referenced from a static context
 	A a = new A();
 	int x = a.x;
 	int y = A.y;
 	}
}
```

2. 静态方法

静态⽅法在类加载的时候就存在了，它不依赖于任何实例。所以静态⽅法必须有实现，也就是说它不能是抽象⽅法。

```java
public abstract class A {
 	public static void func1(){
 }
 	// public abstract static void func2(); // Illegal combination ofmodifiers: 'abstract' and 'static'
}
```
只能访问所属类的静态字段和静态⽅法，⽅法中不能有 this 和 super 关键字，因此这两个关键字与具体对象关联。

```java
public class A {
 	private static int x;
 	private int y;
 	public static void func1(){
 		int a = x;
 // int b = y; // Non-static field 'y' cannot be referenced from a static context
 // int b = this.y; // 'A.this' cannot be referenced from a static context
 	}
}
```



3. 静态语句块
静态语句块在类初始化时运⾏⼀次。

```java
public class A {
 	static {
 		System.out.println("123");
 	}
 	public static void main(String[] args) {
 		A a1 = new A();
 		A a2 = new A();
 	}
}
```

```cmd
123
```

4. 静态内部类
⾮静态内部类依赖于外部类的实例，也就是说需要先创建外部类实例，才能⽤这个实例去创建⾮静态内部类。⽽静态内部类不需要。

```java
public class OuterClass {
	//这个要创建实例才能用
 	class InnerClass {
 	}
 	static class StaticInnerClass {
 	}
 	public static void main(String[] args) {
 	// InnerClass innerClass = new InnerClass(); // 'OuterClass.this' cannot be referenced from a static context
 		OuterClass outerClass = new OuterClass();
 		InnerClass innerClass = outerClass.new InnerClass();
 		StaticInnerClass staticInnerClass = new StaticInnerClass();
 	}
}
```
静态内部类不能访问外部类的⾮静态的变量和⽅法。

5. 静态导包
在使⽤静态变量和⽅法时不⽤再指明 ClassName，从⽽简化代码，但可读性⼤⼤降低。

```java
import static com.xxx.ClassName.*
```

6. 初始化顺序
静态变量和静态语句块优先于实例变量和普通语句块，静态变量和静态语句块的初始化顺序取决于它们在代码中的顺序。

存在继承的情况下，初始化顺序：

 - ⽗类（静态变量、静态语句块）
 - ⼦类（静态变量、静态语句块）
 - ⽗类（实例变量、普通语句块）
 - ⽗类（构造函数）
 - ⼦类（实例变量、普通语句块）
 - ⼦类（构造函数）

