@[TOC](目录)
# HTML DOM - 修改
修改 HTML = 改变元素、属性、样式和事件。

## 修改 HTML 元素
修改 HTML DOM 意味着许多不同的方面：

 - 改变 HTML 内容
 - 改变 CSS 样式
 - 改变 HTML 属性
 - 创建新的 HTML 元素
 - 删除已有的 HTML 元素
 - 改变事件（处理程序）

## 创建 HTML 内容
**改变元素内容的最简单的方法是使用 innerHTML 属性。**

```
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
</head>
<body>

<p id="p1">Hello World!</p>

<script>
document.getElementById("p1").innerHTML="新文本!";
</script>

<p>段落通过脚本来修改内容。</p>

</body>
</html>
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/330d3e495efc4969b5cef8e51d2cbba9.png)

## 改变 HTML 样式
**通过 HTML DOM，您能够访问 HTML 元素的样式对象。**

```
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
</head>
<body>

<p id="p1">Hello world!</p>
<p id="p2">Hello world!</p>

<script>
document.getElementById("p2").style.color="blue";
document.getElementById("p2").style.fontFamily="Arial";
document.getElementById("p2").style.fontSize="larger";
</script>

</body>
</html>
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/3364f88167dc4fa6b4918d1348d470d3.png)

## 创建新的 HTML 元素
**如需向 HTML DOM 添加新元素，您首先必须创建该元素（元素节点），然后把它追加到已有的元素上。**

```
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>菜鸟教程(runoob.com)</title>
</head>
<body>

<div id="div1">
<p id="p1">这是一个段落。</p>
<p id="p2">这是另一个段落。</p>
</div>
<script>
var para=document.createElement("p");
var node=document.createTextNode("这是一个新段落。");
para.appendChild(node);
var element=document.getElementById("div1");
element.appendChild(para);
</script>
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/89a2b58e336542438e4b12da36642a9e.png)

