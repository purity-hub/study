@[TOC](目录)

# 什么是事件
页面对不同访问者的响应叫做事件。

事件处理程序指的是当 HTML 中发生某些事件时所调用的方法。

常见 DOM 事件：

鼠标事件	|键盘事件|	表单事件|	文档/窗口事件
---|----|----|----
click	|keypress|	submit|	load
dblclick|	keydown|	change|	resize
mouseenter|	keyup|	focus|	scroll
mouseleave|	| 	blur|	unload
hover|

# jQuery 事件方法语法	 
页面中指定一个点击事件 `$("p").click();`

您可以通过一个事件函数实现：

```html
$("p").click(function(){
    // 动作触发后执行的代码!!
});
```
# 常用的 jQuery 事件方法

