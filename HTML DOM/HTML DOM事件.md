@[TOC](目录)
# HTML DOM - 事件
HTML DOM 允许 JavaScript 对 HTML 事件作出反应。
HTML 事件的例子：
 - 当用户点击鼠标时
 - 当网页已加载时
 - 当图片已加载时
 - 当鼠标移动到元素上时
 - 当输入字段被改变时
 - 当 HTML 表单被提交时
 - 当用户触发按键时

在本例中，当用户点击时，会改变 \<h1> 元素的内容：
```<h1 onclick="this.innerHTML='Ooops!'">点击文本!</h1>```

在本例中，会从事件处理程序中调用函数：

```
<script>
function changetext(id){
    id.innerHTML="Ooops!";
}
</script>
</head>
<body>
 
<h1 onclick="changetext(this)">点击文本!</h1>
```

## HTML 事件属性
如需向 HTML 元素分配事件，您可以使用事件属性。
向 button 元素分配一个 onclick 事件：
```<button onclick="displayDate()">点我</button>```

## 使用 HTML DOM 来分配事件
HTML DOM 允许您使用 JavaScript 向 HTML 元素分配事件：
为 button 元素分配 onclick 事件：
```document.getElementById("myBtn").onclick=function(){displayDate()};```

## onload 和 onunload 事件
当用户进入或离开页面时，会触发 onload 和 onunload 事件。

onload 事件可用于检查访客的浏览器类型和版本，以便基于这些信息来加载不同版本的网页。

onload 和 onunload 事件可用于处理 cookies。
```<body onload="checkCookies()">```

## onchange 事件
onchange 事件常用于输入字段的验证。

```
function myFunction(){
	var x=document.getElementById("fname");
	x.value=x.value.toUpperCase();
}
<input type="text" id="fname" onchange="upperCase()">
```

## onmouseover 和 onmouseout 事件
onmouseover 和 onmouseout 事件可用于在鼠标指针移动到或离开元素时触发函数。

```
<!DOCTYPE html>
<html><head>
<meta charset="utf-8">
</head>
<body>

<div onmouseover="mOver(this)" onmouseout="mOut(this)" style="background-color:#D94A38;width:120px;height:20px;padding:40px;">Mouse Over Me</div>

<script>
function mOver(obj)
{
	obj.innerHTML="Thank You"
}

function mOut(obj)
{
	obj.innerHTML="Mouse Over Me"
}
</script>

</body>
</html>
```

## onmousedown、onmouseup 以及 onclick 事件
onmousedown、onmouseup 以及 onclick 事件是鼠标点击的全部过程。首先当某个鼠标按钮被点击时，触发 onmousedown 事件，然后，当鼠标按钮被松开时，会触发 onmouseup 事件，最后，当鼠标点击完成时，触发 onclick 事件。

```
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
</head>
<body>

<div onmousedown="mDown(this)" onmouseup="mUp(this)" style="background-color:#D94A38;width:90px;height:20px;padding:40px;">Click Me</div>

<script>
function mDown(obj)
{
	obj.style.backgroundColor="#1ec5e5";
	obj.innerHTML="Release Me"
}

function mUp(obj)
{
	obj.style.backgroundColor="#D94A38";
	obj.innerHTML="Thank You"
}
</script>

</body>
</html>
```

