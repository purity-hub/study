@[TOC](目录)

AJAX 是与服务器交换数据的技术，它在不重载全部页面的情况下，实现了对部分网页的更新。

# 什么是 AJAX？
AJAX = 异步 JavaScript 和 XML（Asynchronous JavaScript and XML）。

简短地说，在不重载整个网页的情况下，AJAX 通过后台加载数据，并在网页上进行显示。

# AJAX load()方法
jQuery load() 方法是简单但强大的 AJAX 方法。

load() 方法从服务器加载数据，并把返回的数据放入被选元素中。

语法:`$(selector).load(URL,data,callback);`

 - 必需的 URL 参数规定您希望加载的 URL。
 - 可选的 data 参数规定与请求一同发送的查询字符串键/值对集合。
 - 可选的 callback 参数是 load() 方法完成后所执行的函数名称。

下面的例子会把文件 "demo_test.txt" 的内容加载到指定的 \<div> 元素中：

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>菜鸟教程(runoob.com)</title>
<script src="https://cdn.staticfile.org/jquery/1.10.2/jquery.min.js">
</script>
<script>
$(document).ready(function(){
	$("button").click(function(){
		$("#div1").load("/try/ajax/demo_test.txt");
	});
});
</script>
</head>
<body>

<div id="div1"><h2>使用 jQuery AJAX 修改文本内容</h2></div>
<button>获取外部内容</button>

</body>
</html>
```
# get() 和 post() 方法
## HTTP 请求：GET vs. POST

两种在客户端和服务器端进行请求-响应的常用方法是：GET 和 POST。

 - GET - 从指定的资源请求数据
 - POST - 向指定的资源提交要处理的数据


GET 基本上用于从服务器获得（取回）数据。注释：GET 方法可能返回缓存数据。

POST 也可用于从服务器获取数据。不过，POST 方法不会缓存数据，并且常用于连同请求一起发送数据。

## $.get() 方法
\$.get() 方法通过 HTTP GET 请求从服务器上请求数据。
语法：`$.get(URL,callback);`

 - 必需的 URL 参数规定您希望请求的 URL。
 - 可选的 callback 参数是请求成功后所执行的函数名。

```html
$("button").click(function(){
  $.get("demo_test.php",function(data,status){
    alert("数据: " + data + "\n状态: " + status);
  });
});
```
## $.post() 方法
$.post() 方法通过 HTTP POST 请求向服务器提交数据。

语法:`$.post(URL,data,callback);`

 - 必需的 URL 参数规定您希望请求的 URL。
 - 可选的 data 参数规定连同请求发送的数据。
 - 可选的 callback 参数是请求成功后所执行的函数名。

```html
$("button").click(function(){
    $.post("/try/ajax/demo_test_post.php",
    {
        name:"菜鸟教程",
        url:"http://www.runoob.com"
    },
    function(data,status){
        alert("数据: \n" + data + "\n状态: " + status);
    });
});
```

```php
<?php
$name = isset($_POST['name']) ? htmlspecialchars($_POST['name']) : '';
$url = isset($_POST['url']) ? htmlspecialchars($_POST['url']) : '';
echo '网站名: ' . $name;
echo "\n";
echo 'URL 地址: ' .$url;
?>
```
又要去学习php

