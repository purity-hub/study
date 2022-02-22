@[TOC](目录)

# 概述
Collection和Map，Collection存储对象的集合，而Map存储键值对的映射表

## Collection
![在这里插入图片描述](https://img-blog.csdnimg.cn/7c2a548a6a9846f194b0de784a1daecd.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_20,color_FFFFFF,t_70,g_se,x_16)
### Set

 - TreeSet：基于红⿊树实现，⽀持有序性操作，例如根据⼀个范围查找元素的操作。但是查找效率不如 HashSet，HashSet
   查找的时间复杂度为 O(1)，TreeSet 则为 O(logN)。
 - HashSet：基于哈希表实现，⽀持快速查找，但不⽀持有序性操作。并且失去了元素的插⼊顺序信息，也就是说使⽤ Iterator 遍历
   HashSet 得到的结果是不确定的。
 - LinkedHashSet：具有 HashSet 的查找效率，并且内部使⽤双向链表维护元素的插⼊顺序。

### List

 - ArrayList：基于动态数组实现，⽀持随机访问。
 - Vector：和 ArrayList 类似，但它是线程安全的。
 - LinkedList：基于双向链表实现，只能顺序访问，但是可以快速地在链表中间插⼊和删除元素。不仅如此，LinkedList还可以⽤作栈、队列和双向队列。

### Queue

 - LinkedList：可以⽤它来实现双向队列。
 - PriorityQueue：基于堆结构实现，可以⽤它来实现优先队列。

## Map
![在这里插入图片描述](https://img-blog.csdnimg.cn/7f3cd1ef7ea1416db21a4b71736e726d.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_20,color_FFFFFF,t_70,g_se,x_16)

 - TreeMap：基于红⿊树实现。
 - HashMap：基于哈希表实现。
 - HashTable：和 HashMap 类似，但它是线程安全的，这意味着同⼀时刻多个线程同时写⼊HashTable不会导致数据不⼀致。它是遗留类，不应该去使⽤它，⽽是使⽤ConcurrentHashMap来⽀持线程安全，ConcurrentHashMap 的效率会更⾼，因为ConcurrentHashMap 引⼊了分段锁。
 - LinkedHashMap：使⽤双向链表来维护元素的顺序，顺序为插⼊顺序或者最近最少使⽤（LRU）顺 序。

