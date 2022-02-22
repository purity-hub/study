@[TOC](目录)
# HTML DOM 访问
访问 HTML DOM - 查找 HTML 元素。

## 访问 HTML 元素（节点）
访问 HTML 元素等同于访问节点

您能够以不同的方式来访问 HTML 元素：

 - 通过使用 getElementById() 方法
 - 通过使用 getElementsByTagName() 方法
 - 通过使用 getElementsByClassName() 方法

## getElementById() 方法
getElementById() 方法返回带有指定 ID 的元素引用：

```node.getElementById("id");```

```
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
</head>
<body>

<p id="intro">Hello World!</p>
<p>这个实例演示了 <b>getElementById</b> 方法!</p>

<script>
x=document.getElementById("intro");
document.write("<p>段落的文本为: " + x.innerHTML + "</p>");
</script>

</body>
</html>
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/f8788f29ec58474089aa9822d5d9b137.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_14,color_FFFFFF,t_70,g_se,x_16)

## getElementsByTagName() 方法
getElementsByTagName() 返回带有指定标签名的所有元素。

```node.getElementsByTagName("tagname");```

```
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
</head>
<body>

<p>Hello World!</p>
<p>DOM 是非常有用的!</p>
<p>这个实例演示了 <b>getElementsByTagName</b> 方法的使用。</p>

<script>
x=document.getElementsByTagName("p");
document.write("第一个段落的文本为: " + x[0].innerHTML);
</script>

</body>
</html>
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/d82eae1be96c4c6cb672a60527ac3d32.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_19,color_FFFFFF,t_70,g_se,x_16)

```
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
</head>
<body>

<p>Hello World!</p>

<div id="main">
<p>DOM 是非常有用的。</p>
<p>这个实例演示了 <b>getElementsByTagName</b> 方法的使用。</p>
</div>

<script>
x=document.getElementById("main").getElementsByTagName("p");
document.write("div 中的第一个段落为: " + x[0].innerHTML);
</script>

</body>
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/a1f8c605628b491b993814e247a0a7f0.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_20,color_FFFFFF,t_70,g_se,x_16)

## The getElementsByClassName() Method

```document.getElementsByClassName("intro");```
上面的例子返回包含 class="intro" 的所有元素的一个列表：

注意：getElementsByClassName() 在 Internet Explorer 5,6,7,8 中无效。

