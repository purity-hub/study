@[TOC](目录)
# &nbsp;&nbsp;初学HTML DOM
DOM (Document Object Model) 译为文档对象模型，是 HTML 和 XML 文档的**编程接口**。

HTML DOM 定义了访问和操作 HTML 文档的标准方法。

DOM 以树结构表达 HTML 文档。


```
<!--实例-->
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
</head>
<body>
<script>
<!--通过改变图片的方式来实现更改灯泡亮度的功能-->
function changeImage()
{
	element=document.getElementById('myimage')
	if (element.src.match("bulbon"))
	{
		element.src="/images/pic_bulboff.gif";
	}
	else
	{
		element.src="/images/pic_bulbon.gif";
	}
}
</script>
<img id="myimage" onclick="changeImage()" border="0" src="/images/pic_bulboff.gif" width="100" height="180">
<p>点击灯泡 开/关 灯</p>

</body>
</html>
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/fb09ce1a6d9a464eb762b16cc2e5649d.png#pic_center)

## 什么是 DOM？
DOM 是 W3C（万维网联盟）的标准。

DOM 定义了访问 HTML 和 XML 文档的标准：

"W3C 文档对象模型 （DOM） 是中立于平台和语言的接口，它允许程序和脚本动态地访问和更新文档的内容、结构和样式。"
W3C DOM 标准被分为 3 个不同的部分：

 - 核心 DOM - 针对任何结构化文档的标准模型
 - XML DOM - 针对 XML 文档的标准模型
 - HTML DOM - 针对 HTML    文档的标准模型

*DOM 是 Document Object Model（文档对象模型）的缩写。*

## 什么是 XML DOM？
XML DOM 定义了所有 XML 元素的对象和属性，以及访问它们的方法。

## 什么是 HTML DOM？
HTML DOM 是：

 - HTML 的标准对象模型
 - HTML 的标准编程接口
 - W3C 标准

HTML DOM 定义了所有 HTML 元素的对象和属性，以及访问它们的方法。

换言之，**HTML DOM 是关于如何获取、修改、添加或删除 HTML 元素的标准**。

