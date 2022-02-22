@[TOC](目录)
# 分组数据
分组允许把数据分为多个逻辑组，以便能对每个组进行聚集计算。

# 创建分组
GROUP BY

```sql
select vend_id,count(*) as num_prods
from products
group by vend_id;
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/bde9722744234edb96b85fc5916c1c7d.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_10,color_FFFFFF,t_70,g_se,x_16)
重要的规定

 - GROUP BY子句可以包含任意数目的列。这使得能对分组进行嵌套，为数据分组提供更细致的控制。
 - 如果在GROUP
   BY子句中嵌套了分组，数据将在最后规定的分组上进行汇总。换句话说，在建立分组时，指定的所有列都一起计算（所以不能从个别的列取回数据）。
 - GROUP BY子句中列出的每个列都必须是检索列或有效的表达式(但不能是聚集函数）。如果在SELECT中使用表达式，则必须在GROUP
   BY子句中指定相同的表达式。不能使用别名。
 - 除聚集计算语句外，SELECT语句中的每个列都必须在GROUP BY子句中给出。
 - 如果分组列中具有NULL值，则NULL将作为一个分组返回。如果列中有多行NULL值，它们将分为一组。
 - GROUP BY子句必须出现在WHERE子句之后，ORDER BY子句之前。

# 过滤分组

**唯一的差别是WHERE过滤行，而HAVING过滤分组。**

```sql
select cust_id,count(*) as orders
from orders
group by cust_id
having count(*)>=2;
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/345db75cdb0547649fe400e547e834ca.png)
它过滤COUNT(*) >=2（两个以上的订单）的那些分组。

**WHERE在数据分组前进行过滤，HAVING在数据分组后进行过滤。**

```sql
select vend_id,count(*) as num_prods
from products
where prod_price>=10
group by vend_id
having count(*)>=2;
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/37e6da19a26e47179b425dc5270b3d16.png)
*WHERE子句过滤所有prod_price至少为10的行。然后按vend_id分组数据，HAVING子句过滤计数为2或2以上的分组。*

# 分组和排序
![在这里插入图片描述](https://img-blog.csdnimg.cn/c05aa40a686848b1b24ee92e40a0a9f5.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_20,color_FFFFFF,t_70,g_se,x_16)

```sql
select order_num,sum(quantity*item_price) as ordertotal
from orderitems
group by order_num
having sum(quantity*item_price)>=50
order by ordertotal;
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/56eb55dd7fe2407d826140a9c9c97537.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_11,color_FFFFFF,t_70,g_se,x_16)
# SELECT子句顺序
![在这里插入图片描述](https://img-blog.csdnimg.cn/fb555eb23d70422db8b49172b55f3873.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/f0c59958316843eea7a9bf62045f7ecf.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_20,color_FFFFFF,t_70,g_se,x_16)

