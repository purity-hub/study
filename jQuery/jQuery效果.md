@[TOC](目录)
# 隐藏和显示
# jQuery hide() 和 show()

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<script src="https://cdn.staticfile.org/jquery/1.10.2/jquery.min.js">
</script>
<script>
$(document).ready(function(){
  $("#hide").click(function(){
    $("p").hide();
  });
  $("#show").click(function(){
    $("p").show();
  });
});
</script>
</head>
<body>
<p>如果你点击“隐藏” 按钮，我将会消失。</p>
<button id="hide">隐藏</button>
<button id="show">显示</button>
</body>
</html>
```
语法:

 - `$(selector).hide(speed,callback);`
 - `$(selector).show(speed,callback);`


# jQuery toggle()
可以使用 toggle() 方法来切换 hide() 和 show() 方法。

```html
$("button").click(function(){
  $("p").toggle();
});
```
# 淡入淡出
![在这里插入图片描述](https://img-blog.csdnimg.cn/0cbb436eaf144030bfe2e47ad8ec7a39.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_20,color_FFFFFF,t_70,g_se,x_16)
## jQuery Fading 方法

jQuery 拥有下面四种 fade 方法：

 - fadeIn()
 - fadeOut()
 - fadeToggle()
 - fadeTo()

### jQuery fadeIn() 方法
jQuery fadeIn() 用于淡入已隐藏的元素。
语法:`$(selector).fadeIn(speed,callback);`

 - 可选的 speed 参数规定效果的时长。它可以取以下值："slow"、"fast" 或毫秒。.
 - 可选的 callback 参数是 fading 完成后所执行的函数名称。

### jQuery fadeOut() 方法
jQuery fadeOut() 方法用于淡出可见元素。
语法:`$(selector).fadeOut(speed,callback);`

 - 可选的 speed 参数规定效果的时长。它可以取以下值："slow"、"fast" 或毫秒。
 - 可选的 callback 参数是 fading 完成后所执行的函数名称。

### jQuery fadeToggle() 方法
jQuery fadeToggle() 方法可以在 fadeIn() 与 fadeOut() 方法之间进行切换。

 - 如果元素已淡出，则 fadeToggle() 会向元素添加淡入效果。
 - 如果元素已淡入，则 fadeToggle() 会向元素添加淡出效果。

语法:`$(selector).fadeToggle(speed,callback);`

 - 可选的 speed 参数规定效果的时长。它可以取以下值："slow"、"fast" 或毫秒。
 - 可选的 callback 参数是 fading 完成后所执行的函数名称。

### jQuery fadeTo() 方法
jQuery fadeTo() 方法允许渐变为给定的不透明度（值介于 0 与 1 之间）。
语法：`$(selector).fadeTo(speed,opacity,callback);`

 - 必需的 speed 参数规定效果的时长。它可以取以下值："slow"、"fast" 或毫秒。
 - fadeTo() 方法中必需的 opacity 参数将淡入淡出效果设置为给定的不透明度（值介于 0 与 1 之间）。
 - 可选的 callback 参数是该函数完成后所执行的函数名称。

# 滑动
## jQuery 滑动方法
jQuery 拥有以下滑动方法：

 - slideDown()
 - slideUp()
 - slideToggle()

### jQuery slideDown() 方法
jQuery slideDown() 方法用于向下滑动元素。

语法:`$(selector).slideDown(speed,callback);`

 - 可选的 speed 参数规定效果的时长。它可以取以下值："slow"、"fast" 或毫秒。
 - 可选的 callback 参数是滑动完成后所执行的函数名称。

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<script src="https://cdn.staticfile.org/jquery/1.10.2/jquery.min.js">
</script>
<script> 
$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideDown("slow");
  });
});
</script>
 
<style type="text/css"> 
#panel,#flip
{
    padding:5px;
    text-align:center;
    background-color:#e5eecc;
    border:solid 1px #c3c3c3;
}
#panel
{
    padding:50px;
    display:none;
}
</style>
</head>
<body>
 
<div id="flip">点我滑下面板</div>
<div id="panel">Hello world!</div>
​
</body>
</html>
```
### jQuery slideUp() 方法
jQuery slideUp() 方法用于向上滑动元素。
语法:`$(selector).slideUp(speed,callback);`

 - 可选的 speed 参数规定效果的时长。它可以取以下值："slow"、"fast" 或毫秒。
 - 可选的 callback 参数是滑动完成后所执行的函数名称。

### jQuery slideToggle() 方法

jQuery slideToggle() 方法可以在 slideDown() 与 slideUp() 方法之间进行切换。

# 动画
## animate() 方法
jQuery animate() 方法用于创建自定义动画。
语法：`$(selector).animate({params},speed,callback);`

 - 必需的 params 参数定义形成动画的 CSS 属性。
 - 可选的 speed 参数规定效果的时长。它可以取以下值："slow"、"fast" 或毫秒。
 - 可选的 callback 参数是动画完成后所执行的函数名称。

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<script src="https://cdn.staticfile.org/jquery/1.10.2/jquery.min.js">
</script>
<script> 
$(document).ready(function(){
  $("button").click(function(){
    $("div").animate({left:'250px'});
  });
});
</script> 
</head>
 
<body>
<button>开始动画</button>
<p>默认情况下，所有的 HTML 元素有一个静态的位置，且是不可移动的。 
如果需要改变为，我们需要将元素的 position 属性设置为 relative, fixed, 或 absolute!</p>
<div style="background:#98bf21;height:100px;width:100px;position:absolute;">
</div>
​
</body>
</html>
```
## animate() - 操作多个属性

```html
$("button").click(function(){
  $("div").animate({
    left:'250px',
    opacity:'0.5',
    height:'150px',
    width:'150px'
  });
});
```
可以用 animate() 方法来操作几乎所有 CSS 属性

## animate() - 使用相对值

```html
$("button").click(function(){
  $("div").animate({
    left:'250px',
    height:'+=150px',
    width:'+=150px'
  });
});
```
## animate() - 使用预定义的值

```html
$(document).ready(function(){
  $("button").click(function(){
    $("div").animate({
      height:'toggle'
    });
  });
});
```

## animate() - 使用队列功能
jQuery 提供针对动画的队列功能。

```html
$("button").click(function(){
  var div=$("div");
  div.animate({height:'300px',opacity:'0.4'},"slow");
  div.animate({width:'300px',opacity:'0.8'},"slow");
  div.animate({height:'100px',opacity:'0.4'},"slow");
  div.animate({width:'100px',opacity:'0.8'},"slow");
});
```
下面的例子把 <div> 元素往右边移动了 100 像素，然后增加文本的字号：

```html
$("button").click(function(){
  var div=$("div");
  div.animate({left:'100px'},"slow");
  div.animate({fontSize:'3em'},"slow");
});
 
```
# 停止动画
## jQuery stop() 方法
语法:`$(selector).stop(stopAll,goToEnd);`

 - 可选的 stopAll 参数规定是否应该清除动画队列。默认是 false，即仅停止活动的动画，允许任何排入队列的动画向后执行。
 - 可选的 goToEnd 参数规定是否立即完成当前动画。默认是 false。

