@[TOC](目录)
# 效果

 - 插值语法
 - 指令语法

# 理解

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
        <h1>插值语法</h1>
        <h3>你好，{{name}}</h3>
        <hr>
        <h1>指令语法</h1>
        <a v-bind:href="url">百度</a>
    </div>
    <script>
        const vm=new Vue({
            el:'#root',
            data:{
                name:"lhy",
                url:"http://www.baidu.com"
            }
        })
    </script>
</body>
</html>
```
运行结果：
![在这里插入图片描述](https://img-blog.csdnimg.cn/ecbf0ab4762a44beb555bb246febd348.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_13,color_FFFFFF,t_70,g_se,x_16)
检查元素：
![在这里插入图片描述](https://img-blog.csdnimg.cn/5a625566125842d69e473bd2bf6ba156.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_12,color_FFFFFF,t_70,g_se,x_16)
# 总结

 1. 插值语法：
功能：用于解析标签体内容
写法`{{xxx}}`

  2. 指令语法：
功能：用于解析标签
例如：`v-bind:href="xxx"`，简写为`:href:"xxx"`，`xxx`为js表达式，且可以直接读取到`data`中的所有属性
