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
        姓:<input type="text" v-model="firstname"><br>
        名:<input type="text" v-model="lastname"><br>
        姓名:<span>{{firstname}}-{{lastname}}</span>
        <!--fullname:<span>{{fullname()}}</span>-->
    </div>
    <script>
        const vm=new Vue({
            el:'#root',
            data:{
                firstname:'',
                lastname:''
            },
            methods:{
                fullname(){
                    return this.firstname+' '+this.lastname;
                }
            }
        })
    </script>
</body>
</html>
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/4955aaf745b847299b4cae82495c61f1.png)

