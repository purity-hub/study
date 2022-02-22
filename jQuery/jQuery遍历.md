@[TOC](目录)

![在这里插入图片描述](https://img-blog.csdnimg.cn/8e48e7e98c8140d3977f4ed570e69922.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_19,color_FFFFFF,t_70,g_se,x_16)

# 祖先
向上遍历 DOM 树，以查找元素的祖先

## 向上遍历 DOM 树

 - parent()
 - parents()
 - parentsUntil()

## parent() 方法

parent() 方法返回被选元素的直接父元素。

## parents() 方法
parents() 方法返回被选元素的所有祖先元素，它一路向上直到文档的根元素 (<html>)。

## parentsUntil() 方法
parentsUntil() 方法返回介于两个给定元素之间的所有祖先元素。

```html
$(document).ready(function(){
  $("span").parentsUntil("div");
});
```
# 后代
## 向下遍历 DOM 树

 - children()
 - find()


##  children() 方法
children() 方法返回被选元素的所有直接子元素。

## find() 方法
find() 方法返回被选元素的后代元素，一路向下直到最后一个后代。

# 同胞
在 DOM 树中水平遍历

 - siblings()
 - next()
 - nextAll()
 - nextUntil()
 - prev()
 - prevAll()
 - prevUntil()


## siblings() 方法
siblings() 方法返回被选元素的所有同胞元素。

## next() 方法
next() 方法返回被选元素的下一个同胞元素。

## nextAll() 方法
nextAll() 方法返回被选元素的所有跟随的同胞元素。

## nextUntil() 方法
nextUntil() 方法返回介于两个给定参数之间的所有跟随的同胞元素。

## prev(), prevAll() & prevUntil() 方法
prev(), prevAll() 以及 prevUntil() 方法的工作方式与上面的方法类似，只不过方向相反而已：它们返回的是前面的同胞元素（在 DOM 树中沿着同胞之前元素遍历，而不是之后元素遍历）。

# 过滤
## first() 方法
first() 方法返回被选元素的首个元素。

## last() 方法
last() 方法返回被选元素的最后一个元素。

## eq() 方法
eq() 方法返回被选元素中带有指定索引号的元素。

## filter() 方法
filter() 方法允许您规定一个标准。不匹配这个标准的元素会被从集合中删除，匹配的元素会被返回。

##  not() 方法
not() 方法返回不匹配标准的所有元素。

提示：not() 方法与 filter() 相反。
