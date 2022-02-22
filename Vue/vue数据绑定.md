@[TOC](目录)
# 单向数据绑定
v-bind
# 双向数据绑定
v-model
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script type="text/javascript" src="./vue.js"></script>
</head>
<body>
    <div id="root">
        单向数据绑定:<input type="text" v-bind:value="name">
        双向数据绑定:<input type="text" v-model:value="name">
    </div>
    <script>
        const vm=new Vue({
            el:'#root',
            data:{
                name:'lhy'
            }
        })
    </script>
</body>
</html>
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/889e251c5d814ed88f5f5fdbc9e5c737.png)
**但是v-model只能用于表单类元素中**
输入元素绑定，捕获用户的输入，实现数据绑定
# 总结

 1. 单向绑定：数据只能从data流向页面
 2. 双向绑定：还可以从页面流向数据



