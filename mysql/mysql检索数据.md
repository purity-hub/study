@[TOC](目录)
# 检索数据
## select语句
用途：从一个或多个表中检索信息
## 检索单个列
```sql
select prod_name from products;
```
从products表中检索一个名为prod_name的列，from关键字指出从其中检索数据的表名。

*返回数据的顺序可能是数据被添加到表中的顺序，也可能不是*
**SQL语句不区分大小写**
## 检索多个列

```sql
select prod_id,prod_name,prod_price from products;
```
## 检索所有列
*使用*通配符*

```sql
select * from products;
```
一般最好不要用*，除非你确实需要表中的所有列，检索不需要的列会降低和应用程序的性能

## 检索不同的行
使用distinct关键字

```sql
select distinct vend_id from products;
```
distinct关键字必须直接放到列名的前面
**distinct关键字应用于所有列**
## 限制结果

```sql
select prod_name
from products
limit 5;
```
limit 5指示MySQL返回不多于5行

```sql
limit 5,5
```
表示返回从行5开始的5行(第一行是行0)

## 使用完全限定的表名

```sql
select products.prod_name
from crashcourse.products;
```
有一些情形需要用到完全限定名，此处留意即可

# 小结
使用SQL的SELECT语句来检索单个表列、多个表列以及所有表列

