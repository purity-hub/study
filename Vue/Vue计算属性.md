配置对象`computed`

```javascript
computed:{
	fullname:{
		get(){
			//当有人读取fullname时，get就会起作用
			//get什么时候调用:1、初次读取，2、所依赖的数据改变时
			return this.firstname+'-'+this.lastname;	
		},
		set(value){
			//set当值被修改时调用
			const arr=value.split('-')
			this.first=arr[0];
			this.lastname=arr[1];
		}
	}
}
```
天气功能计算属性：

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
            }
        })
    </script>
</body>
</html>
```

# 总结

 1. 要用的属性不存在，要通过已在属性计算得来
 2. 原理：底层借助Object.defineproperty方法提供的getter和setter
 3. 优势：与method方法相比。内部有缓存机制(复用)，效率更高，调试方便
 4. 备注：计算属性最终会出现在vm上，直接读取使用即可；如果计算属性要被修改，那必须写set函数去响应修改，且set中要引起计算时依赖的数据发生

