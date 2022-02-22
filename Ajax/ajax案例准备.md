```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #result{
            width:200px;
            height: 100px;
            border: solid 1px;
        }
    </style>
</head>
<body>
    <button>点击</button>
    <div id="result"></div>
</body>
</html>
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/9a537f7a7e264c47bd371a1a5fa73a91.png)

```javascript
const { response } = require('express');
const express=require('express')

const app=express();
app.get('/server',(req,res)=>{
    //设置响应头，设置允许跨域
    res.setHeader('Access-Control-Allow-Orgin','*');
    //设置响应体
    res.send('Hello ajax!')
});
app.listen(3000)
console.log('服务器启动成功')
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/027085f66d454ae4b4dbc9423e2514ce.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_11,color_FFFFFF,t_70,g_se,x_16)

```html
<script>
        //获取button元素
        const btn=document.getElementsByTagName('button')[0];
        const result=document.getElementById('result');
        //绑定事件
        btn.onclick=function(){
            //console.log('text')
            //创建对象
            const xhr=new XMLHttpRequest();
            //初始化
            xhr.open('GET','http://127.0.0.1:3000/server');
            //发送
            xhr.send();
            //事件绑定 处理服务端返回的结果
            //on  when 当...时候
            //readystate是xhr对象中的属性，表示结果
            xhr.onreadystatechange=function(){
                //判断服务端返回了全部的结果
                if(xhr.readyState===4){
                    if(xhr.status>=200&&xhr.status<300){
                        //处理结果
                        console.log(xhr.status);//状态码
                        console.log(xhr.statusText);//状态字符串
                        console.log(xhr.getAllResponseHeaders);//所以响应头
                        console.log(xhr.response)
                        result.innerHTML=xhr.response;
                    }else{

                    }
                }
            }
        }
    </script>
```
**这里自己有个错误找了好久，就是express模块没有导入**
![在这里插入图片描述](https://img-blog.csdnimg.cn/c84fafdfc8af4178b2304d7f821557bc.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_11,color_FFFFFF,t_70,g_se,x_16)
![在这里插入图片描述](https://img-blog.csdnimg.cn/b86e4cb2e8e140a4ac480a78a10bc20c.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_15,color_FFFFFF,t_70,g_se,x_16)
## ajax设置请求参数

```html
xhr.open('GET','http://127.0.0.1:3000/server?a=100&a==200&a==300')
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/fc38f1dc9b7a48369a2df36f99f5e4cd.png)

