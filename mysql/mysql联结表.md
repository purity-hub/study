@[TOC](目录)
# 联结
SQL最强大的功能之一就是能在数据检索查询的执行中联结表
## 关系表
**外键（foreign key） 外键为某个表中的一列，它包含另一个表的主键值，定义了两个表之间的关系**

**可伸缩性（scale） 能够适应不断增加的工作量而不失败。设计良好的数据库或应用程序称之为可伸缩性好（scale well）**


## 为什么要使用联结
数据存储在多个表中，怎样用单条SELECT语句检索出数据？
答案是使用联结

# 创建联结

```sql
select vend_name,prod_name,prod_price
from vendors,products
where vendors.vend_id=products.vend_id
order by vend_name,prod_name;
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/bb3c4a61908c4439ae89d19a6aca9da0.png)
## where 子句的重要性
**笛卡儿积（cartesian product） 由没有联结条件的表关系返回的结果为笛卡儿积。检索出的行的数目将是第一个表中的行数乘以第二个表中的行数**

```sql
select vend_name,prod_name,prod_price
from vendors,products
order by vend_name,prod_name;
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/89576386624b4e5ea66b9c4e8d3437e2.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_16,color_FFFFFF,t_70,g_se,x_16)
从上面的输出中可以看到，相应的笛卡儿积不是我们所想要的。这里返回的数据用每个供应商匹配了每个产品，它包括了供应商不正确的产品。实际上有的供应商根本就没有产品。

**应该保证所有联结都有WHERE子句，否则MySQL将返回比想要的数据多得多的数据**


## 内部联结
**目前为止所用的联结称为等值联结（equijoin），它基于两个表之间的相等测试。这种联结也称为内部联结。**

以下返回上面相同的数据：

```sql
select vend_name,prod_name,prod_price
from vendors inner join products
on vendors.vend_id=products.vend_id;
```

## 联结多个表

SQL对一条SELECT语句中可以联结的表的数目没有限制

```sql
select prod_name,vend_name,prod_price,quantity
from orderitems,products,vendors
where products.vend_id=vendors.vend_id
and orderitems.prod_id=products.prod_id
and order_num=2005;
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/12313b7875334567b8c68921681f9417.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_19,color_FFFFFF,t_70,g_se,x_16)
**联结的表越多，性能下降越厉害**


