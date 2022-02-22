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
    <div class="wrap" id="app">
        <div class="search_form">
            <div class="form_group">
                <input v-model="city" type="text" @keyup.enter="search" class="input_text" placeholder="请输入要查询的地址">
                <button class="input_sub">
                    搜索
                </button>
            </div>
            <div class="hotkey">
                <a href="javascript:;">北京</a>
                <a href="javascript:;">上海</a>
                <a href="javascript:;">广州</a>
                <a href="javascript:;">深圳</a>
            </div>
        </div>
        <ul class="weather_list">
            <li v-for="item in weatherList">
                <div><span>{{item.type}}</span></div>
                <div>
                    <b>{{item.low}}</b>
                    ~
                    <b>{{item.high}}</b>
                </div>
                <div><span>{{item.data}}</span></div>
            </li>
        </ul>
    </div>
    <script src="http://unpkg.com/axios/dist/axios.min.js"></script>
    <script src="http://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script>
        var vue=new Vue({
            el:"#app",
            data:{
                city:"",
                weatherList:[]
            },
            methods:{
                search:function(){
                    //调用接口
                    //保存this
                    var that=this;
                    axios.get("http://wthrcdn.etouch.cn/weather_mini?city="+this.city)
                    .then(function(response){
                        console.log(response.data.data.forecast)
                        that.weatherList=response.data.data.forecast
                    }).catch(function(err){})
                }
            }
        })
    </script>
</body>
</html>
```
运行结果：
![在这里插入图片描述](https://img-blog.csdnimg.cn/ba559ca02c434cea8ed3aec717d981d6.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_8,color_FFFFFF,t_70,g_se,x_16)
控制台：
![在这里插入图片描述](https://img-blog.csdnimg.cn/b055bc2a50734c0baacd35ad402e3ca2.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_16,color_FFFFFF,t_70,g_se,x_16)

