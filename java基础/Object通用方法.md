@[TOC](目录)

```java
public native int hashCode()
public boolean equals(Object obj)
protected native Object clone() throws CloneNotSupportedException
public String toString()
public final native Class<?> getClass()
protected void finalize() throws Throwable {}
public final native void notify()
public final native void notifyAll()
public final native void wait(long timeout) throws InterruptedException
public final void wait(long timeout, int nanos) throws InterruptedException
public final void wait() throws InterruptedException
```
# equals
1. 等价关系

- 自反性

```java
x.equals(x); // true
```

- 对称性

```java
x.equals(y) == y.equals(x); // true
```

- 传递性

```java
if (x.equals(y) && y.equals(z))
 x.equals(z); // true;
```


- 一致性
多次调⽤ equals() ⽅法结果不变
- 与null的比较
对任何不是 null 的对象 x 调⽤ x.equals(null) 结果都为 false

2. 等价与相等

```java
Integer x = new Integer(1);
Integer y = new Integer(1);
System.out.println(x.equals(y)); // true
System.out.println(x == y); // false
```
 3. 实现


 - 检查是否为同⼀个对象的引⽤，如果是直接返回 true；
 - 检查是否是同⼀个类型，如果不是，直接返回 false；
 - 将 Object 对象进⾏转型；
 - 判断每个关键域是否相等。

# hashCode()

```java
@Override
public int hashCode() {
 	int result = 17;
 	result = 31 * result + x;
 	result = 31 * result + y;
 	result = 31 * result + z;
 	return result;
}
```
# toString()
默认返回 ToStringExample@4554617c 这种形式
@ 后⾯的数值为散列码的⽆符号⼗六进制表示

# clone()
1. cloneable
clone() 是 Object 的 protected ⽅法，它不是 public，⼀个类不显式去重写 clone()，其它类就不能直接去调⽤该类实例的 clone() ⽅法

```java
public class CloneExample implements Cloneable {
 	private int a;
 	private int b;
 	@Override
 	public Object clone() throws CloneNotSupportedException {
 		return super.clone();
 	}
}
```

2. 浅拷贝
拷⻉对象和原始对象的引⽤类型引⽤**同⼀个**对象

3. 深拷贝
拷⻉对象和原始对象的引⽤类型引⽤**不同**对象

4. 代替方案
*最好不要去使⽤ clone()，使⽤ clone() ⽅法来拷⻉⼀个对象即复杂⼜有⻛险，它会抛出异常，并且还需要类型转换。*

```java
public class CloneConstructorExample {
 	private int[] arr;
 	public CloneConstructorExample() {
 		arr = new int[10];
 		for (int i = 0; i < arr.length; i++) {
 			arr[i] = i;
 		}
 	}
 	public CloneConstructorExample(CloneConstructorExample original) {
 		arr = new int[original.arr.length];
 		for (int i = 0; i < original.arr.length; i++) {
 			arr[i] = original.arr[i];
 		}
 	}
 	public void set(int index, int value) {
 		arr[index] = value;
 	}
 	public int get(int index) {
 		return arr[index];
 	}
}
```

```java
CloneConstructorExample e1 = new CloneConstructorExample();
CloneConstructorExample e2 = new CloneConstructorExample(e1);
e1.set(2, 222);
System.out.println(e2.get(2)); // 2
```

