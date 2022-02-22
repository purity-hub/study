@[TOC](目录)
# 聚焦函数

 - 确定表中行数（或者满足某个条件或包含某个特定值的行数）。
 - 获得表中行组的和。
 - 找出表列（或所有行或某些特定的行）的最大值、最小值和平均值。

**聚集函数（aggregate function） 运行在行组上，计算和返回单个值的函数**

![在这里插入图片描述](https://img-blog.csdnimg.cn/448dac5f3ae2457d997637664c3b9d82.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_20,color_FFFFFF,t_70,g_se,x_16)
## AVG函数
AVG()可用来返回所有列的平均值，也可以用来返回特定列或行的平均值

```sql
select avg(prod_price) as avg_price
from products
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/81df984b5751412eaa3cc01c48725598.png)
**NULL值** AVG()函数忽略列值为NULL的行

## COUNT函数

 - 使用COUNT(*)对表中行的数目进行计数，不管表列中包含的是空值（NULL）还是非空值。
 - 使用COUNT(column)对特定列中具有值的行进行计数，忽略NULL值

```sql
select count(*) as num_cust
from customers;
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/5ccbab7c4d784a208c84d6516f41f464.png)

```sql
select count(cust_email) as num_cust
from customers;
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/5d41c0e728cb42f68e3243ef44436934.png)
## MAX函数
MAX()返回指定列中的最大值。MAX()要求指定列名

```sql
select max(prod_price) as max_price
from products;
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/3ebdb56eba61457dbd146ddb07fea71f.png)

NULL值 MAX()函数忽略列值为NULL的行。

## MIN函数
返回指定列的最小值

## SUM函数
SUM()用来返回指定列值的和（总计）

```sql
select sum(quantity) as items_ordered
from orderitems
where order_num=20005;
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/4c9201c384e14b3a97aaf988b350c586.png)
# 聚焦不同值
以上5个聚集函数都可以如下使用：

 - 对所有的行执行计算，指定ALL参数或不给参数（因为ALL是默认行为）；
 - 只包含不同的值，指定DISTINCT参数。

```sql
select avg(distinct prod_price) as avg_price
from products
where vend_id=1003;
```
# 组合聚焦函数

```sql
select count(*) as num_items,
min(prod_price) as price_min,
max(prod_price) as price_max,
avg(prod_price) as price_avg
from products;
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/b0f0342131574d038971d180a6768d52.png)



