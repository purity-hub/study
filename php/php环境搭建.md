@[TOC](目录)
# php简介

 - PHP 是一种创建动态交互性站点的强有力的服务器端脚本语言。
 - PHP 是免费的，并且使用非常广泛。同时，对于像微软 ASP 这样的竞争者来说，PHP 无疑是另一种高效率的选项。
## php是什么?
 - PHP（全称：PHP：Hypertext Preprocessor，即"PHP：超文本预处理器"）是一种通用开源脚本语言。
 - PHP 脚本在服务器上执行。
 - PHP 可免费下载使用。

## php文件?

 - PHP 文件可包含文本、HTML、JavaScript代码和 PHP 代码
 - PHP 代码在服务器上执行，结果以纯 HTML 形式返回给浏览器
 - PHP 文件的默认文件扩展名是 ".php"

## 能做什么？

 - PHP 可以生成动态页面内容
 - PHP 可以创建、打开、读取、写入、关闭服务器上的文件
 - PHP 可以收集表单数据
 - PHP 可以发送和接收 cookies
 - PHP 可以添加、删除、修改您的数据库中的数据
 - PHP 可以限制用户访问您的网站上的一些页面
 - PHP 可以加密数据

# 安装Apache
[Apache](https://apache.org/)

进入bin目录下的配置文件httpd.conf

![在这里插入图片描述](https://img-blog.csdnimg.cn/14f9dd99c85547d4a4c093147d165bff.png)
检查语法是否错误：
```powershell
httpd -t
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/014c3f2b582443f2b112b079ab4178df.png)
启动服务:httpd.exe

```powershell
httpd -k start -n "Apache"
```
浏览器访问：localhost:80
![在这里插入图片描述](https://img-blog.csdnimg.cn/a46f7a9a297d433eba008d80fe419401.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_20,color_FFFFFF,t_70,g_se,x_16)
# 安装与配置php
[php](https://www.php.net/)

php.exe可以解析php代码，转变为html代码，可以打开开发者模式查看

## 配置php
进入bin目录下的配置文件httpd.conf

```powershell
#加载php
LoadModule php_module 'D:/Apache/php8/php8apache2_4.dll'
#加载php配置文件
PHPIniDir 'D:/Apache/php8'
#分配工作
AddType application/x-httpd-php .php
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/96cf28a2aaf646ad9b9c3c1f436d6fdd.png)
在htdocs目录下新建ceshi.php测试：

```php
<!DOCTYPE html> 
<html> 
<body> 

<?php 
echo "Hello World!"; 
?> 

</body> 
</html>
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/128e27f1e2514d87aac67fd43c0435ed.png)
# 连接mysql
php.ini文件下：

```powershell
;增加扩展路径
extension_dir = "D:/Apache/php8/ext"
```

```powershell
extension=mysqli
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/5724517acef44e7185d1e38dcdaab201.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_20,color_FFFFFF,t_70,g_se,x_16)
测试mysql连接：

```php
<?php
$con = mysqli_connect("localhost","root","123456");
if (!$con){
  die('Could not connect: ' . mysql_error());
}else{
    echo("测试连接成功");
}

// some code

?>
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/1c83f581b3fc449cae1989dfb73282d0.png)
好了，环境配置成功了，可以回到php官网查阅文档写代码了
