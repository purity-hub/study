Callback 函数在当前动画 100% 完成之后执行。

以下实例在隐藏效果完全实现后回调函数:

```html
$("button").click(function(){
  $("p").hide("slow",function(){
    alert("段落现在被隐藏了");
  });
});
```
以下实例没有回调函数，警告框会在隐藏效果完成前弹出：

```html
$("button").click(function(){
  $("p").hide(1000);
  alert("段落现在被隐藏了");
});
```

