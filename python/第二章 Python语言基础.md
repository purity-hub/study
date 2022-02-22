@[TOC](文章目录)


<hr style=" border:solid; width:100px; height:1px;" color=#000000 size=1">

# 前言

<font color=#999AAA >初步了解Python程序的构成元素（模块，语句表达式，类，对象，函数等）</font>
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210619220207241.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzUzMjAwMTU4,size_16,color_FFFFFF,t_70#pic_center)


<hr style=" border:solid; width:100px; height:1px;" color=#000000 size=1">

# 1、程序概述
案例：
已知三角形三条边，求三角形的面积
```
import math
a=3.0
b=4.0
c=5.0
h=(a+b+c)/2
s=math.sqrt(h*(h-a)*(h-b)*(h-c))
print(s)
```

 1. Python程序由模块组成，模块对应于扩展名为.py的源文件。一个Python程序由一个或者多个模块组成
 2. 模块由语句组成。模块即Python源文件。运行程序时，按照模块的语句顺序，依次执行其中的语句
 3. 语句是Python程序的过程构造块，用于创建对象、变量赋值、调用函数、控制分支、创建循环、增加注释等。语句包含表达式
 4. 表达式用于创建和处理对象

# 2、对象和引用
<font color="red">一切皆对象</font>
## 2.1、Python的对象
每个对象由标识，类型和值标识

**标识**：用于唯一标识一个对象，通常对应对象在计算机内存中的位置
**类型**：用于表示对象所属的数据类型，数据类型用于限定对象的取值范围以及允许执行的处理操作
**值**：用于表示对象的数据类型的值

```
#查看对象
>>>a=123        #输出123
>>>id(a)        #输出140732357223904
>>>type(a)      #输出 <class 'int'>
>>>print(a)     #输出123
```

```
#查看内置函数，函数也是对象
>>>type(abs)     #输出 <class 'builtin_function_or_method'>
>>>id(abs)       #输出1284973331456
>>>type(range)   #输出 <class 'type'>
>>>id(range)     #输出140732356995008
```
## 2.2、创建实例对象
### 2.2.1、使用字面值创建

 - 14、201等表示int数据类型的值
 - 0.12、3.14等表示float数据类型的值
 - True和False表示bool数据类型的值
 - 'Hello,world'、‘小明’等表示str数据类型的值

```
>>> 123    #输出123
>>> "abc"  #输出‘abc’
```


### 2.2.2、使用类对象创建

```
>>> int(12)       #输出12
>>> complex(1,2)  #输出(1+2j)
```
## 2.3、变量和对象的引用
**变量无类型，对象有类型**：类型的概念不是存在于变量中，而是存在于对象中。变量本身就是通用的，它只是恰巧在某个时间点上引用了当时的特点对象而已

**变量引用对象**：变量通过一根线连着对象，变量用自己所拥有的能力把对象和自己连接起来(指针连接对象空间)，这就是引用。引用完成就实现了赋值

## 2.4、值传递和引用传递
Python参数传递统一使用的是引用传递方式。因为Python对象分为**可变对象**和**不可变对象**

**可变对象**：值可以被修改，list,dict,set

```
x = y = [1, 2, 3]   #变量x和y指向list对象[1, 2, 3]
id(x)               #输出：1656936944328。表示变量x指向的list对象[1, 2, 3]的id
id(y)               #输出：1656936944328。表示变量y指向的list对象[1, 2, 3]的id
x.append(4)         #变量x指向的list对象[1, 2, 3]附加一个元素4
x                   #输出：[1, 2, 3, 4]。表示变量x指向的list对象[1, 2, 3, 4]
id(x)               #输出：1656936944328。变量x指向的list对象[1, 2, 3, 4]的id未改变
x is y              #输出：True。表示变量x和y指向同一个list对象[1, 2, 3, 4]
x == y              #输出：True。表示变量x和y指向的list对象值相等
z = [1, 2, 3, 4]    #变量z指向的list对象[1, 2, 3, 4]
id(z)               #输出：1656965757064。表示变量z指向的list对象[1, 2, 3, 4]的id
x is z              #输出：False。表示变量x和z指向不同的list对象[1, 2, 3, 4]
x == z              #输出：True。表示变量x和z指向的list对象值相等
```

**不可变对象**：其值不能被修改，number,string,tuple

```
a = 18   #变量a指向int对象18
id(a)    #输出：140706365363776。表示a指向的int对象18的id
a = 25   #变量a指向int对象25
id(a)    #输出：140706365364000。表示a指向的int对象25的id
b = 25   #变量b指向int对象25
id(b)    #输出：140706365364000。表示b指向的int对象25的id
id(25)   #输出：140706365364000。表示int对象25的id
```

## 2.5、静态VS动态 类型语言
静态类型语言与动态类型语言刚好相反，它的数据类型是在编译期间检查的。也就是说，在编写程序的时候就要声明所有变量的数据类型。C/C++是静态类型语言的典型带便，其它的静态类型语言还有C#、Java等。

动态类型语言是指在运行期间才去做数据类型检查的语言。也就是说，在用动态类型的语言编程时，永远不用给任何变量指定数据类型，该语言会在你第一次赋值给变量的时候，在内部将数据类型记录下来。Python和Ruby就是一种典型的动态类型语言，其它的各种脚本语言如VBScript也多少属于动态类型语言。

## 2.6、强类型VS弱类型
强类型定义语言：强制数据类型定义的语言。也就是说，一旦一个变量被指定了某个数据类型，如果不经过强制转换，那么它就永远是这个数据类型了

弱类型定义语言：数据类型可以被忽略的语言。它与强类型定义语言相反, 一个变量可以赋不同数据类型的值。

<font color=red>**Python是动态的强类型语言**

# 3、基本语法
## 3.1、标识符及其命名规则

 - 标识符是变量、函数、类、模块和其他对象的名称 
 - 标识符的第一个字符必须是字母、下划线（“_”），其后的字符可以是字母、下划线或数字
 - 一些特殊的名称，如if、for等保留关键字，不能作为标识符

标识符注意事项：

 1. Python标识符区分大小写。例如，ABC和abc视为不同的名称
 2. 以双下划线开始和结束的名称通常具有特殊的含义。例如，init为类的构造函数，一般应避免使用
 3. 避免使用Python预定义标识符名作为自定义标识符名

## 3.2、保留关键字

```
help> keywords

Here is a list of the Python keywords.  Enter any keyword to get more help.

False               class               from                or
None                continue            global              pass
True                def                 if                  raise
and                 del                 import              return
as                  elif                in                  try
assert              else                is                  while
async               except              lambda              with
await               finally             nonlocal            yield
break               for                 not                 
```

## 3.3、预定义标识符

 - Python语言包含许多预定义内置类、异常、函数等，例如，float、ArithmeticError、print等
 - 用户应该避免使用Python预定义标识符名作为自定义标识符名
 - 使用Python的内置函数dir(builtins)，可以查看所有内置的异常名、函数名等

## 3.4、命名规则

## 3.5、变量和赋值语句

## 3.6、链式赋值

## 3.7、复合赋值语句

## 3.8、删除变量

## 3.9、序列封包/解包赋值

## 3.10、常量

## 3.11、表达式和运算符

## 3.12、Python语句

## 3.13、注释

## 3.14、空语句

# 4、函数和模块
## 4.1、函数

## 4.2、模块

## 4.3、包


<hr style=" border:solid; width:100px; height:1px;" color=#000000 size=1">

# 总结

