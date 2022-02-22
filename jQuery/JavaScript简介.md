@[TOC](目录)
# 为什么学习JavaScript

 1. HTML 定义了网页的内容
 2. CSS 描述了网页的布局
 3. JavaScript 控制了网页的行为

# 简介
JavaScript 是互联网上最流行的脚本语言，这门语言可用于 HTML 和 web，更可广泛用于服务器、PC、笔记本电脑、平板电脑和智能手机等设备。

# JavaScript 是脚本语言

 - JavaScript 是一种轻量级的编程语言。
 - JavaScript 是可插入 HTML 页面的编程代码。
 - JavaScript 插入 HTML 页面后，可由所有的现代浏览器执行。
 - JavaScript 很容易学习。

# 对事件的反应

```html
<button type="button" onclick="alert('欢迎!')">点我!</button>
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/2e368bb2eab64adb94147c7501e198ec.png)
# 改变HTML内容

```html	
<h1>我的第一段 JavaScript</h1>
<p id="demo">
JavaScript 能改变 HTML 元素的内容。
</p>
<script>
function myFunction()
{
	x=document.getElementById("demo");  // 找到元素
	x.innerHTML="Hello JavaScript!";    // 改变内容
}
</script>
<button type="button" onclick="myFunction()">点击这里</button>
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/4eca170e73f84264830e2c2a07e3e38e.png)
**document.getElementById("some id")**。这个方法是 HTML DOM 中定义的。

DOM (Document Object Model)（文档对象模型）是用于访问 HTML 元素的正式 W3C 标准。

# 改变 HTML 样式

```html
<p id="demo">
JavaScript 能改变 HTML 元素的样式。
</p>
<script>
function myFunction()
{
	x=document.getElementById("demo") // 找到元素
	x.style.color="#ff0000";          // 改变样式
}
</script>
<button type="button" onclick="myFunction()">点击这里</button>
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/47e6e6a1754a4114bed127510d5b8063.png)
[菜鸟教程](https://www.runoob.com/js/js-syntax.html)
