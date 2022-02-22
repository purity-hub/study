@[TOC](目录)
# 获取内容和属性
jQuery 拥有可操作 HTML 元素和属性的强大方法。

# jQuery DOM 操作
DOM = Document Object Model（文档对象模型）

## 获得内容 - text()、html() 以及 val()

 - text() - 设置或返回所选元素的文本内容
 - html() - 设置或返回所选元素的内容（包括 HTML 标记）
 - val() - 设置或返回表单字段的值

## 获取属性 - attr()
jQuery attr() 方法用于获取属性值。

下面的例子演示如何获得链接中 href 属性的值：

```html
$("button").click(function(){
  alert($("#runoob").attr("href"));
});
```
# 设置内容和属性
下面的例子演示如何通过 text()、html() 以及 val() 方法来设置内容：

```html
$("#btn1").click(function(){
    $("#test1").text("Hello world!");
});
$("#btn2").click(function(){
    $("#test2").html("<b>Hello world!</b>");
});
$("#btn3").click(function(){
    $("#test3").val("RUNOOB");
});
```
## text()、html() 以及 val() 的回调函数
回调函数有两个参数：被选元素列表中当前元素的下标，以及原始（旧的）值。然后以函数新值返回您希望使用的字符串。

```html
$("#btn1").click(function(){
    $("#test1").text(function(i,origText){
        return "旧文本: " + origText + " 新文本: Hello world! (index: " + i + ")"; 
    });
});
 
$("#btn2").click(function(){
    $("#test2").html(function(i,origText){
        return "旧 html: " + origText + " 新 html: Hello <b>world!</b> (index: " + i + ")"; 
    });
});
```
## 设置属性 - attr()

```html
$("button").click(function(){
  $("#runoob").attr("href","http://www.runoob.com/jquery");
});
```

```html
$("button").click(function(){
    $("#runoob").attr({
        "href" : "http://www.runoob.com/jquery",
        "title" : "jQuery 教程"
    });
});
```
## attr() 的回调函数
回调函数有两个参数：被选元素列表中当前元素的下标，以及原始（旧的）值。然后以函数新值返回您希望使用的字符串。

```html
$("button").click(function(){
  $("#runoob").attr("href", function(i,origValue){
    return origValue + "/jquery"; 
  });
});
```
# 添加元素
## 添加新的 HTML 内容

 - append() - 在被选元素的结尾插入内容
 - prepend() - 在被选元素的开头插入内容
 - after() - 在被选元素之后插入内容
 - before() - 在被选元素之前插入内容

## jQuery append() 方法
jQuery append() 方法在被选元素的结尾插入内容（仍然在该元素的内部）。

## jQuery prepend() 方法
jQuery prepend() 方法在被选元素的开头插入内容。

## after() 和 before() 方法

 - jQuery after() 方法在被选元素之后插入内容。
 - jQuery before() 方法在被选元素之前插入内容。

# 删除元素
通过 jQuery，可以很容易地删除已有的 HTML 元素。

 - remove() - 删除被选元素（及其子元素）
 - empty() - 从被选元素中删除子元素

## jQuery remove() 方法
jQuery remove() 方法删除被选元素及其子元素。

## jQuery empty() 方法
jQuery empty() 方法删除被选元素的子元素。

# 获取并设置CSS类

jQuery 拥有若干进行 CSS 操作的方法。我们将学习下面这些：

 - addClass() - 向被选元素添加一个或多个类
 - removeClass() - 从被选元素删除一个或多个类
 - toggleClass() - 对被选元素进行添加/删除类的切换操作
 - css() - 设置或返回样式属性

## addClass() 方法

```html
$("button").click(function(){
  $("h1,h2,p").addClass("blue");
  $("div").addClass("important");
});

```
## removeClass() 方法

```html
$("button").click(function(){
  $("h1,h2,p").removeClass("blue");
});
```
## css方法

```html
$("p").css("background-color");
```
### 设置 CSS 属性

```html
$("p").css("background-color","yellow");
```
### 设置多个 CSS 属性

```html
$("p").css({"background-color":"yellow","font-size":"200%"});
```
# jQuery尺寸
jQuery 提供多个处理尺寸的重要方法：

 - width()
 - height()
 - innerWidth()
 - innerHeight()
 - outerWidth()
 - outerHeight()

![在这里插入图片描述](https://img-blog.csdnimg.cn/51e290b327914a40aaf982ce94f26788.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_20,color_FFFFFF,t_70,g_se,x_16)

