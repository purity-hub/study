@[TOC](目录)
# 游标
有时，需要在检索出来的行中前进或后退一行或多行。这就是使用游标的原因。

游标主要用于交互式应用，其中用户需要滚动屏幕上的数据，并对数据进行浏览或做出更改。

# 使用游标
## 创建游标
游标用DECLARE语句创建

```sql
create procedure processorders()
begin
	declare ordernumbers cursor
	for
	select order_num from orders;
end;
```
在定义游标之后，可以打开它。
## 打开和关闭游标
游标用OPEN CURSOR语句来打开

```sql
open ordernumbers;
```
游标处理完成后，应当使用如下语句关闭游标

```sql
close ordernumbers;
```
CLOSE释放游标使用的所有内部内存和资源，因此在每个游标不再需要时都应该关闭。

**隐含关闭** 如果你不明确关闭游标，MySQL将会在到达END语句时自动关闭它


## 使用游标数据
可以使用FETCH语句分别访问它的每一行

FETCH指定检索什么数据（所需的列），检索出来的数据存储在什么地方。它还向前移动游标中的内部行指针，使下一条FETCH语句检索下一行（不重复读取同一行）

从游标中检索单个行:
```sql
create procedure processorders()
begin
	declare o int;
	declare ordernumbers cursor
	for
	select order_num from orders;
	open ordernumbers;
	fetch ordernumbers into o;
	close ordernumbers;
end;
```
循环检索数据，从第一行到最后一行:

```sql
create procedure processorders()
begin
	declare done boolean default 0;
	declare o int;

	declare ordernumbers cursor
	for
	select order_num from orders;

	declare continue handler for sqlstate '02000' set done=1;

	open ordernumbers;

	repeat
		fetch ordernumbers into o;
	until done end repeat;

	close ordernumbers;
end;
```
这个例子使用FETCH检索当前order_num
到声明的名为o的变量中。

SQLSTATE '02000'是一个未找到条件
