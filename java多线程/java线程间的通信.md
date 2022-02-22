@[TOC](目录)
# 锁与同步
一个锁同一时间只能被一个线程所持有

```java
public class ObjectLock{
	private static Object lock=new Object();
	static class ThreadA implements Runnable{
		@Override
		public void run(){
			synchronized(lock){
				for(int i=0;i<100;i++){
					System.out.println("ThreadA"+i);
				}
			}
		}
	} 
	static classThreadB implements Runnable{
		@Override
		public void run(){
			synchronized(lock){
				for(int i=0;i<100;i++){
					System.out.println("ThreadB"+i);
				}
			}
		}
	}
	public static void main(String[] args){
		new Thread(new ThreadA()).start();
		Thread.sleep();
		new Thread(new ThreadB()).start();
	}
}
```

加上了线程锁，在main线程下启动了ThreadA线程，之后sleep，使得ThreadA线程得以执行，此时线程B不会执行，因为线程A有锁，要等到线程A执行完毕后才会执行线程B

# 等待/通知机制
基于锁的方式，线程会不断地去尝试获得锁，这会耗费服务器资源

 - wait()
 - notify()

# 信号量
volatile保证内存可见性

多个线程需要相互合作，我们用简单的锁和等待通知机制不方便，这时可以用到信号量

# 管道
基于管道流的通信方式

比如read和write，当使用read管道时进入阻塞状态，直到等到write.close结束管道写入，此线程就会接受到管道输入的字符串

# 其他通信相关
## join
主线程想等待子线程执行完毕后，获得子线程中处理完的某个数据，就要用到join方法


## sleep方法
**sleep方法不会释放当前的锁，而wait方法会**

## ThreadLocal类

 - set
 - get

当希望将类的某个静态变量与线程状态关联，可以考虑使用

使用场景：数据库连接，Session管理
涉及大量的复杂对象的初始化和关闭，如果每个线程都声明一些私有变量来操作，那就不再那么轻量了。

