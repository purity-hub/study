@[TOC](目录)
# 过滤数据
## where语句

```sql
select prod_name,prod_price from products
where prod_price=2.50;
```
*如果在客户机上过滤数据，服务器不得不通过网络发送多余的数据，这将导致网络带宽的浪费*

## where子句操作符
操作符|说明
----|-----
=|等于
<>|不等于
!= |不等于
< |小于
<=| 小于等于
> |大于
>=| 大于等于
between| 在指定的两个值之间

```sql
select prod_name,prod_price from products
where prod_price between 5 and 10;
```
空值检查：

```sql
select prod_name from products
where prod_price is null;
```
# 小结
如何用SELECT语句的WHERE子句过滤返回的数据
