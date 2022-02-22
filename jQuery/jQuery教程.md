@[TOC](目录)
# jQuery简介
需要具备：

 - HTML
 - CSS
 - JavaScript

## 什么是jQuery
jQuery 是一个 JavaScript 函数库。

jQuery 是一个轻量级的"写的少，做的多"的 JavaScript 库。

jQuery 库包含以下功能：

 - HTML 元素选取
 - HTML 元素操作
 - CSS 操作
 - HTML 事件函数
 - JavaScript 特效和动画
 - HTML DOM 遍历和修改
 - AJAX
 - Utilities

[jQuery下载](https://jquery.com/download/)

jQuery 库是一个 JavaScript 文件，您可以使用 HTML 的 <script> 标签引用它：

```html
<head>
<script src="jquery-1.10.2.min.js"></script>
</head>
```
## 替代方案

Staticfile CDN、百度、又拍云、新浪、谷歌和微软的服务器都存有 jQuery 。

```html
<head>
<script src="https://cdn.staticfile.org/jquery/1.10.2/jquery.min.js">
</script>
</head>
```
# jQuery语法
基础语法： `$(selector).action()`

 - 美元符号定义 jQuery
 - 选择符（selector）"查询"和"查找" HTML 元素
 - jQuery 的 action() 执行对元素的操作

例如：

 - $(this).hide() - 隐藏当前元素
 - $("p").hide() - 隐藏所有 \<p> 元素
 - $("p.test").hide() - 隐藏所有 class="test" 的 \<p>元素
 - $("#test").hide() - 隐藏 id="test" 的元素

## 文件就绪事件

```html
$(document).ready(function(){
 
   // 开始写 jQuery 代码...
 
});
```
# jQuery选择器
## 元素选择器
jQuery 元素选择器基于元素名选取元素。

在页面中选取所有 \<p> 元素:`$("p")`

```html
$(document).ready(function(){
  $("button").click(function(){
    $("p").hide();
  });
});
```
## #id选择器
通过 id 选取元素语法如下：`$("#test")`

```html
$(document).ready(function(){
  $("button").click(function(){
    $("#test").hide();
  });
});
```
## .class选择器
jQuery 类选择器可以通过指定的 class 查找元素。`$(".test")`

```html
$(document).ready(function(){
  $("button").click(function(){
    $(".test").hide();
  });
});
```
语法	|描述	
----|----
$("*")	|选取所有元素
$(this)	|选取当前 HTML 元素	
$("p.intro")	|选取 class 为 intro 的 \<p> 元素	
$("p:first")	|选取第一个 \<p> 元素	
$("ul li:first")	|选取第一个 \<ul> 元素的第一个 \<li> 元素	
$("ul li:first-child")	|选取每个 \<ul> 元素的第一个 \<li> 元素	
$("[href]")	|选取带有 href 属性的元素	
$("a[target='_blank']")	|选取所有 target 属性值等于 "_blank" 的 \<a> 元素	
$("a[target!='_blank']")	|选取所有 target 属性值不等于 "_blank" 的 \<a> 元素	
$(":button")	|选取所有 type="button" 的 \<input> 元素 和 \<button> 元素	
$("tr:even")	|选取偶数位置的 \<tr> 元素	
$("tr:odd")	|选取奇数位置的 \<tr> 元素
$(this)	|选取当前 HTML 元素
$("p.intro")	|选取 class 为 intro 的 \<p> 元素	
$("p:first")	|选取第一个 \<p> 元素	
$("ul li:first")	|选取第一个 \<ul> 元素的第一个 \<li> 元素	
$("ul li:first-child")	|选取每个 \<ul> 元素的第一个 \<li> 元素	
$("[href]")	|选取带有 href 属性的元素	
$("a[target='_blank']")	|选取所有 target 属性值等于 "_blank" 的 \<a> 元素	
$("a[target!='_blank']")	|选取所有 target 属性值不等于 "_blank" 的 \<a> 元素	
$(":button")	|选取所有 type="button" 的 \<input> 元素 和 \<button> 元素	
$("tr:even")	|选取偶数位置的 \<tr> 元素	
$("tr:odd")	|选取奇数位置的 \<tr> 元素	

## 独立文件中使用 jQuery 函数
如果您的网站包含许多页面，并且您希望您的 jQuery 函数易于维护，那么请把您的 jQuery 函数放到独立的 .js 文件中。

```html
<head>
<script src="http://cdn.static.runoob.com/libs/jquery/1.10.2/jquery.min.js">
</script>
<script src="my_jquery_functions.js"></script>
</head>
```

