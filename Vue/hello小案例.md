```html
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>hello案例</title>
    <script type="text/javascript" src="./vue.js"></script>
</head>
<body>
    <div id="root">
        <h1>Hello. {{name}}</h1>
    </div>
    <script>
        const vm=new Vue({
            el:'#root',//用于指定当前vue示例为哪个容器服务
            //el:document.getElementById('root')
            data:{
                name:'lhy'
            }
        })
    </script>
</body>
</html>
```
运行结果：
![在这里插入图片描述](https://img-blog.csdnimg.cn/41e24e7cdc3d4f69913b54a7e3351b4c.png)
控制台：
![在这里插入图片描述](https://img-blog.csdnimg.cn/40dea194e78c492a8a5447d371ad1bcb.png)
加载资源404：默认图标不存在

**小结**：

 1. 想让Vue工作，就必须创建一个Vue示例，且要传入一个配置对象{}
 2. root容器里的代码依然符合html规范，只不过混入了一些特殊的Vue语法
 3. root容器里的代码被称为Vue模板
 4. Vue实例和容器一一对应
 5. 真实开发中只有一个Vue实例，并且会配合组件一起使用
 6. {{xxx}}中的xxx要写js表达式，且xxx可以自动读取到data中的所有属性
 7. 一旦data中的数据发生改变，那么模板中用到该数据的地方会自动更新

浏览器开发者调试工具：

*下载拓展:vue devtools*
