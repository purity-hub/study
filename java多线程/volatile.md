@[TOC](目录)
volatile的功能：

 - 保证变量的内存可见性(线程之间的可见性，共享变量)
 - 禁止volatile变量与普通变量重排序

```java
public class VolatileExample{
	int a=0;
	volatile boolean flag=false;
	public void writer(){
		a=1;
		flag=true;//写操作
	}
	public void reader(){
		if(flag){//读操作
			System.out.println(a);
		}
	}
}
```
对于volatile修饰的变量进行写操作，JMM会立即把该线程对应的本地内存的共享数据刷新到主内存中去，对于读操作，JMM会把该线程对应的本地内存职位无效，从主内存中读取共享变量的值

# 禁止重排序
内存屏蔽：

 - 读屏蔽
 - 写屏蔽

作用：

 - 阻止屏蔽两侧的指令重排序
 - 强制把写缓冲区/高速缓存中的脏数据等写回主内存，或者让缓存中相应的数据失效


![在这里插入图片描述](https://img-blog.csdnimg.cn/235a989c83344280807b6ab072ff2cd8.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_20,color_FFFFFF,t_70,g_se,x_16)
**在功能上，锁更强大，在性能上，volatile更有优势**



![在这里插入图片描述](https://img-blog.csdnimg.cn/3b12c358e2044d10aa4fce205f00c55f.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_20,color_FFFFFF,t_70,g_se,x_16)


