@[TOC](目录)

# 代码引入：

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
        今天天气很{{info}}
        <!-- 下面按钮是改变天气值为['炎热','凉爽'] -->
        <button @click="changeWeather">切换天气</button>
    </div>
    <script>
        const vm=new Vue({
            el:'#root',
            data:{
                isHot:true
            },
            computed:{
                //下面为简写形式get
                info(){
                    return this.isHot?'炎热':'凉爽';
                }
            },
            methods:{
                changeWeather(){
                    this.isHot=!this.isHot;
                }
            },
            //监视属性
            watch:{
                info:{
                    handler(newValue,oldValue){
                    	//immediate:true,//初始化时让hander调用一下
                        console.log('isHot的值被改变了'+newValue+oldValue);
                    }
                }
            }
        })
    </script>
</body>
</html>
```
运行结果：
![在这里插入图片描述](https://img-blog.csdnimg.cn/4993815b6dc14a029dcc8124b0ea0a13.png)
点击按钮后控制台结果：
![在这里插入图片描述](https://img-blog.csdnimg.cn/cd25afef33b24c68841a4eeeb12ba4b9.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_17,color_FFFFFF,t_70,g_se,x_16)
或者后续监视：

```javascript
vm.$watch('isHot',{
	//immediate:true,//初始化时让hander调用一下
	hander(newValue,oldValue){
		console.log('isHot被修改了',newValue,oldValue);
	}
})
```
# 总结1

 1. 当被监视属性变化时，回调函数自动调用，进行相关操作
 2. 监视属性必须存在，才能进行监视
 3. 监视的两种写法：
(1)`new Vue`时传入`watch`配置
(2)通过`vm.$watch`监视


拓展：

**监视多级数据变化**：

```javascript
data:{
	number:{
		a:1,
		b:1
	}
},
watch:{
	//下面是最原始的写法
	'number.a':{
		handler(){
			comsole.log('a被监视了');
		}
	}
}
```
**深度监视**：

```javascript
numbers:{
	deep:true,
	handler(){
		console.log('number改变了');
	}
}
```
# 总结2

 1. Vue中watch默认不监测对象内部值得改变(一层)
 2. 配置deep:true可以监测兑现内部值改变(多层)

注：
 1. Vue自身可以监测对象内部值得改变，但Vue提供的watch默认不可以
 2. 使用watch时根据数据的具体结构，决定是否采用深度监视


watch可以进行异步操作，computed不行

