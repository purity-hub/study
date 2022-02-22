@[TOC](目录)
# 数据插入

 - 插入完整的行
 - 插入行的一部分
 - 插入多行
 - 插入某些查询的结果

# 插入完整的行

```sql
insert into Customers
values(null,'Pep E. LaPew');
```
上面这种语法不安全，尽量避免使用

```sql
insert into customers(cust_name,cust_address,cust_city)
values('Pep E. LaPew','100 Main Street','Los Angeles');
```
# 插入多个行

```sql
insert into customers(...)
values(),();
```
# 插入检索出的数据

```sql
insert into customers(...)
select ... from custnew;
```
使用INSERT SELECT从custnew中将所有数据导入customers


