@[TOC](目录)
# AJAX基础
它是浏览器提供的一套方法，可以实现页面无刷新更新数据，提高用户浏览网站的体验
## Ajax应用场景

 1. 页面上拉加载更多数据
 2. 列表数据无刷新分页
 3. 表单项离开焦点数据验证
 4. 搜索框提示文字下拉列表
## Ajax的运行环境
Ajax技术需要运行在网页环境中才能生效

node.js搭建环境

新建文件夹ajaxstudy
在此目录下`npm init -y`
再`npm install express`
再新建文件app.js

```javascript
const express=require('express')
const path=require('path')
const app=express();
app.use(express.static(path.join(__dirname,'public')));
app.listen(3000)
console.log('服务器启动成功')
```
在public文件夹下有index.html文件
<!DOCTYPE html>

```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2>欢迎，这是public文件夹下的index.html文件</h2>
</body>
</html>
```
命令行下输入`node app.js`
运行截图：
![在这里插入图片描述](https://img-blog.csdnimg.cn/57cca836e1ad4aa4b7a0f259d2a014a0.png)

