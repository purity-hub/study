@[TOC](目录)
# HTML DOM 导航
通过 HTML DOM，您能够使用节点关系在节点树中导航。

## HTML DOM 节点列表
getElementsByTagName() 方法返回节点列表。节点列表是一个节点数组。
```var x=document.getElementsByTagName("p");```
可以通过下标号访问这些节点。如需访问第二个 \<p>，您可以这么写：
```y=x[1];```

## HTML DOM 节点列表长度
length 属性定义节点列表中节点的数量。

## 导航节点关系
您能够使用三个节点属性：parentNode、firstChild 以及 lastChild ，在文档结构中进行导航。

```
<html>
<head>
<meta charset="utf-8">
</head>
<body>
 
<p>Hello World!</p>
<div>
  <p>DOM 是非常有用的!</p>
  <p>这个实例演示了节点的关系。</p>
</div>
 
</body>
</html>
```

 - 首个 \<p> 元素是 \<body> 元素的首个子元素（firstChild）
 - \<div> 元素是 \<body> 元素的最后一个子元素（lastChild）
 - \<body> 元素是首个 \<p> 元素和 \<div> 元素的父节点（parentNode）

**firstChild 属性可用于访问元素的文本：**

```
<p id="intro">Hello World!</p>
 
<script>
x=document.getElementById("intro");
document.write(x.firstChild.nodeValue);
</script>
```

## DOM 根节点
这里有两个特殊的属性，可以访问全部文档：
 - document.documentElement - 全部文档
 - document.body - 文档的主体

## childNodes 和 nodeValue
除了 innerHTML 属性，您也可以使用 childNodes 和 nodeValue 属性来获取元素的内容。

```
<p id="intro">Hello World!</p>
 
<script>
txt=document.getElementById("intro").childNodes[0].nodeValue;
document.write(txt);
</script>
```

