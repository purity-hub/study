@[TOC](目录)
# 组合查询
有两种基本情况，其中需要使用组合查询：

 - 在单个查询中从不同的表返回类似结构的数据；
 - 对单个表执行多个查询，按单个查询返回数据。


# 创建组合查询
可用UNION操作符来组合数条SQL查询

## 使用UNION

```sql
select vend_id,prod_id,prod_price
from products
where prod_price<=5
UNION
select vend_id,prod_id,prod_price
from products
where vend_id in(1001,1002);
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/f313d47b746f43c4aa251fa5c92d5646.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_11,color_FFFFFF,t_70,g_se,x_16)
## UNION规则

 - UNION必须由两条或两条以上的SELECT语句组成，语句之间用关键字UNION分隔（因此，如果组合4条SELECT语句，将要使用3个UNION关键字）。
 - UNION中的每个查询必须包含相同的列、表达式或聚集函数（不过各个列不需要以相同的次序列出）。
 - 列数据类型必须兼容：类型不必完全相同，但必须是DBMS可以隐含地转换的类型（例如，不同的数值类型或不同的日期类型）


## 包含或取消重复的行
UNION从查询结果集中自动去除了重复的行

使用UNION ALL，MySQL不取消重复的行

## 对组合查询结果排序
UNION在最后一条SELECT语句后使用ORDER BY子句


