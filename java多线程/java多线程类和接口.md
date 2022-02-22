@[TOC](目录)
# Thread类和Runnable接口

 - 继承Thread类，并重写run方法
 - 实现Runnable接口的run方法

## 继承Thread类

```java
public class Demo{
	public static class MyThread extends Thread{
		@Override
		public void run(){
			System.out.println("MyThread");
		}
	}
	public static void main(String[] args){
		Thread myThread=new MyThread();
		myThread.start();
	}
}
```
调用start方法启动该线程。
## 实现Runnable接口

```java
public class Demo{
	public static class MyThread implements Runnable{
		@Override
		public void run(){
			System.out.println("MyThread");
		}
	}
	public static void mian(String[] args){
		new MyThread().start();
		new Thread(()->{
			System.out.println("Java 8 匿名内部类");
		}).start();
	}
}
```
## Thread类的构造方法

```java
public Thread(Runnable target){
	init(null,target,"Thread-"+nextThreadNum(),0);
}
```

 - g:线程组，指定这个线程在哪个线程组下
 - target:指定要执行的任务
 - name:线程的名字，多个线程可以重复
 - acc:用于初始化私有变量`inheriteaAccessControlContext`
 - inheritThreadLocals:可继承的ThreadLocal，


## Thread类的常用方法

 - currentThread()
 - start()
 - yield()
 - sleep()
 - join()

# Callable、Future与FutureTask
## Callable接口

```java
class Task implements Callable<Tnteger>{
	@Override
	public Integer call() throws Exception{
		Thread.sleep(1000);
		return 2;
	}
	public static void main(String[] args){
		ExecutorService executor =Executors.newCachedThreadPool();
		Task task=new Task();
		Future<Integer> result=executor.submit(task);
		System.out.println(result.get());
	}
}
```
## Future接口
为了让任务有取消功能，就使用Callable来代替Runnable。如果为了可取消性而使用Future但是又不提供可用的接口，则可声明Future<?>形式类型、并返回null作为底层任务的结果


## FutureTask类
Future只是一个接口，去实现这些功能比较困难，JDK提供这样一个类来给我们使用

几个状态：

 - NEW=0
 - COMPLETING=1
 - NORMAL=2
 - EXCEPTIONAL=3
 - CANCELLED=4
 - INTERRUPTING=5
 - INTERRUPTED=6



