﻿@[TOC](目录)
# HTML DOM 节点
在 HTML DOM 中，所有事物都是节点。DOM 是被视为节点树的 HTML。

## DOM Nodes
根据 W3C 的 HTML DOM 标准，HTML 文档中的所有内容都是节点：

 - 整个文档是一个文档节点
 - 每个 HTML 元素是元素节点
 - HTML 元素内的文本是文本节点
 - 每个 HTML 属性是属性节点
 - 注释是注释节点

## HTML DOM 节点树
HTML DOM 将 HTML 文档视作树结构。这种结构被称为节点树：
![在这里插入图片描述](https://img-blog.csdnimg.cn/929f7834ec3245fe8b4540747732299d.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)

## 节点父、子和同胞
节点树中的节点彼此拥有层级关系。
*我们常用父（parent）、子（child）和同胞（sibling）等术语来描述这些关系。父节点拥有子节点。同级的子节点被称为同胞（兄弟或姐妹）。*

 - 在节点树中，顶端节点被称为根（root）。
 - 每个节点都有父节点、除了根（它没有父节点）。
 - 一个节点可拥有任意数量的子节点。
 - 同胞是拥有相同父节点的节点。

```
<html>
  <head>
    <meta charset="utf-8">
    <title>DOM 教程</title>
  </head>
  <body>
    <h1>DOM 课程1</h1>
    <p>Hello world!</p>
  </body>
</html>
```

 - \<html> 节点没有父节点；它是根节点
 - \<head> 和 \<body> 的父节点是 \<html> 节点
 - 文本节点 "Hello world!" 的父节点是 \<p> 节点

并且：

 - \<html> 节点拥有两个子节点：\<head> 和 \<body>
 - \<head> 节点拥有两个子节点：\<meta> 与 \<title> 节点
 - \<title> 节点也拥有一个子节点：文本节点 "DOM 教程"
 - \<h1> 和 \<p> 节点是同胞节点，同时也是 \<body> 的子节点

并且：

 - \<head> 元素是 \<html> 元素的首个子节点
 - \<body> 元素是 \<html> 元素的最后一个子节点
 - \<h1> 元素是 \<body> 元素的首个子节点
 - \<p> 元素是 \<body> 元素的最后一个子节点

## <p color=red> 警告！
DOM 处理中的常见错误是希望元素节点包含文本。

在本例中：\<title>DOM 教程\</title>，元素节点 \<title>，包含值为 "DOM 教程" 的文本节点。

可通过节点的 innerHTML 属性来访问文本节点的值。


