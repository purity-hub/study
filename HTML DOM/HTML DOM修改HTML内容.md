
@[TOC](目录)
# HTML DOM - 修改 HTML 内容
通过 HTML DOM，JavaScript 能够访问 HTML 文档中的每个元素。

## 改变 HTML 内容
改变元素内容的最简单的方法是使用 innerHTML 属性。

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
![在这里插入图片描述](https://img-blog.csdnimg.cn/4eebd2bf7cbc40a4b47a86f893c21c79.png)
改变 HTML 样式
通过 HTML DOM，您能够访问 HTML 对象的样式对象。

```
<p id="p1">Hello world!</p>
<p id="p2">Hello world!</p>
 
<script>
document.getElementById("p2").style.color="blue";
document.getElementById("p2").style.fontFamily="Arial";
document.getElementById("p2").style.fontSize="larger";
</script>
```

## 使用事件
HTML DOM 允许您在事件发生时执行代码。
当 HTML 元素"有事情发生"时，浏览器就会生成事件：
 - 在元素上点击
 - 加载页面
 - 改变输入字段

```
<input type="button"
onclick="document.body.style.backgroundColor='lavender';"
value="修改背景颜色">
```

```
<script>
function ChangeBackground()
{
    document.body.style.backgroundColor="lavender";
}
</script>
 
<input type="button" onclick="ChangeBackground()" value="修改背景颜色" />
```

```
<p id="p1">Hello world!</p>
 
<script>
function ChangeText()
{
    document.getElementById("p1").innerHTML="Hello Runoob!";
}
</script>
 
<input type="button" onclick="ChangeText()" value="修改文本" />
```

