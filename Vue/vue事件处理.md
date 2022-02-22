@[TOC](目录)

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
        <h2>欢迎来到{{name}}</h2>
        <button v-on:click="showInfo1">点击显示弹窗1</button>
        <button @click="showInfo2(66,$event)">点击显示弹窗2</button>
    </div>
    <script>
        const vm =new Vue({
            el:'#root',
            data:{
                name:'lhy'
            },
            methods:{
                showInfo1(event){
                    alert("你好!")
                    //event.target拿到的是传入事件的对象，可以进行修改
                    //console.log(event.target.innerText)//点击显示弹窗
                    //console.log(this===vm)//true//箭头函数则this=windows
                },
                showInfo2(a,event){
                    alert(a+event.target.innerText)
                    
                }
            }
        })
    </script>
</body>
</html>
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/32a09f3799e449e8af7e0a1831e1e55c.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_16,color_FFFFFF,t_70,g_se,x_16)
![在这里插入图片描述](https://img-blog.csdnimg.cn/b0656b08c6b1452491fbf5bc7c5f4160.png)

