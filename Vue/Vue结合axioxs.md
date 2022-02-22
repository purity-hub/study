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
    <div id="app">
        <input type="button" value="获取笑话" @Click="getJoke">
        <p>{{ joke }}</p>
    </div>
    <script src="http://unpkg.com/axios/dist/axios.min.js"></script>
    <script src="http://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script>
        // 随机获取一条笑话
        //请求地址是：https://autumnfish.cn/api/joke
        var vue=new Vue({
            el:"#app",
            data:{
                joke:"好笑的笑话"
            },
            methods:{
                getJoke:function(){
                    //this会变化，用that来存储this
                    var that=this
                    axios.get("https://autumnfish.cn/api/joke").then
                    (function(response){
                        //console.log(this.joke)会变化
                        console.log(response.data)
                        that.joke=response.data
                    },function(err){})
                }
            }
        })
    </script>
</body>
</html>
```
运行结果：
![在这里插入图片描述](https://img-blog.csdnimg.cn/d41de9501ca54d54a95c48b97f3af470.png)

