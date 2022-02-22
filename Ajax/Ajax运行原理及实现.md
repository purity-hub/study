@[TOC](目录)
# Ajax运行原理及实现
## Ajax运行原理
Ajax相当于浏览器发送请求与接收响应的代理人，以实现在不影响用户浏览页面的情况下，局部更新页面数据，从而提高用户体验

开发人员不可控：
![在这里插入图片描述](https://img-blog.csdnimg.cn/b6c0443d496642f58cf6a11e7f329f44.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_15,color_FFFFFF,t_70,g_se,x_16)
开发人员可控：
![在这里插入图片描述](https://img-blog.csdnimg.cn/47320d836d1442798d28713897ee4f59.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_20,color_FFFFFF,t_70,g_se,x_16)
## Ajax的实现步骤

 1. 创建Ajax对象

```javascript
var xhr=new XMLHttpRequest();
```

 2. 告诉Ajax请求地址以及请求方式

```javascript
xhr.open('get','http://www.example.com');
```

 3. 发送请求

```javascript
xhr.send();
```

 4. 获取服务器端给客户端的响应数据

```javascript
xhr.onload=function(){
	console.log(xhr.responseText);
}
```
使用node：`npm install -g nodemon`

![在这里插入图片描述](https://img-blog.csdnimg.cn/d80ec298dc574bb7a6afbcda5cf8c6db.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_13,color_FFFFFF,t_70,g_se,x_16)
在public文件夹下新建helloworld.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script type="text/javascript">
        var xhr=new XMLHttpRequest();
        xhr.open('get','http://localhost:3000/first')
        xhr.send()
        xhr.onload=function(){
            console.log(responseText)
        }
    </script>
</body>
</html>
```
再在app.js中新建路由：

```javascript
const express=require('express')
const path=require('path')
const app=express();
app.use(express.static(path.join(__dirname,'public')));

app.get('/first',(req,res)=>{
    res.send('Hello Ajax!');
})

app.listen(3000)
console.log('服务器启动成功')
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/257901519d414accb406e6c1bd5477c1.png)
## 服务器端响应的数据格式
在真实的项目中，服务器大多数情况下会以JSON对象作为响应数据的格式。当客户端拿到响应数据时，要将JSON数据和HTML字符串进行拼接，然后将拼接结果展示在页面中。

在http请求与响应的过程中，无论是请求参数还是响应内容，如果是对象类型，最后都会被转化为对象字符串进行传输（规定）:`JSON.parse()`

public下新建jsonchuli.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script type="text/javascript">
        var xhr=new XMLHttpRequest();
        xhr.open('get','http://localhost:3000/responseData')
        xhr.send()
        xhr.onload=function(){
            //console.log(responseText)
            var responsetext=JSON.parse(xhr.responseText)
            console.log(responsetext)
        }
    </script>
</body>
</html>
```
app.js新建路由:

```javascript
app.get('/responseData',(req,res)=>{
    res.send({"name":"张三"})
});
```
运行结果：
![在这里插入图片描述](https://img-blog.csdnimg.cn/e0ccdb0b2d7144db80d8c7d20e826563.png)

