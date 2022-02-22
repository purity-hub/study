@[TOC](目录)
# 起步
## 安装Node环境
官网安装
<a>https://nodejs.org/en/</a>
~~傻瓜式安装==>next~~ 
检查是否安装:
cmd-->`node --version`
![在这里插入图片描述](https://img-blog.csdnimg.cn/618b7a1310764c1eb25270e97495cdfa.png)
**环境变量**
## Hello World
![在这里插入图片描述](https://img-blog.csdnimg.cn/ca5b6e29a24c4ec4b8e3117f3ed270d8.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/ebb592625b7a436eba84a137e68ae9e0.png)

 1. 创建编写JavaScript脚本文件
 2. 打开终端，定位到脚本文件所属目录
 3. 输入`node 文件名`执行对应的文件

注意文件名不要使用node.js命名，也就是说除了node不能起，最好不要用中文命名

```javascript
console.log(window)
console.log(document)
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/5b385e0d45274adeb5cffcdc5f286b2f.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_20,color_FFFFFF,t_70,g_se,x_16)
即在node没有采用EcmaScript进行编码
没有BOM,DOM

浏览器中的JavaScript是没有**文件操作**的能力的
但node 中有:如下
### 读文件
```javascript
//fs是file-system的简写，就是文件系统的意思
//在node中如果想要进行文件读写操作，就必须引入fs这个核心模块
//在fs这个核心模块中，就提供了所有的文件操作相关的API
//例如:fs.readFile就是用来读取文件的

//1.加载使用require方法加载fs核心模块
var fs=require('fs')
//2.读取文件
//第二个参数是一个回调函数
//  error:
//     如果读取失败，error就是错误对象
//     如果读取成功，error就是null
//   data:
//     如果读取成功，data就是读取到的数据
//     如果读取成功，data就是错误对象
fs.readFile('hello.txt',function(error,data){
    console.log(data)
})
```
输出结果
```cmd
PS D:\NodejsStudy> node readfile.js
<Buffer 68 65 6c 6c 6f>
```
改为`data.toString()`即可打印数据

```cmd
PS D:\NodejsStudy> node readfile.js
hello
```
### 写文件

```javascript
var fs=require('fs')

//$.ajax({
//    ...
//    success:function(data){
//
//    }
//})

//第一个参数就是要写入的问价路径，第二个参数就是要输入的内容
//第三个参数，回调函数
//   error
//   成功：
//     文件写入成功
//     error是null
//   失败：
//     文件写入失败
//     error就是错误对象
fs.writeFile('./nodejsstudy/你好.md','hello!!!',function(error){
    console.log('文件写入成功')
})
```
运行结果

```cmd
PS D:\NodejsStudy> node writefile.js
文件写入成功
```
### 文件的任何操作
...

### http

```javascript
//成就感来了
//使用node构建一个web服务器
//1.在node中专门提供了一个核心模块
//http这个模块的职责就是编写服务器的

//1.加载http模块
var http = require('http')
//2.使用http.createServer()方法创建一个web服务器
var serve=http.createServer()
//3.服务器要干嘛？
//提供对数据的服务
//   发请求
//   接收请求
//   给个反馈(发送响应)
//   注册request请求事件
//   当客户端请求过来，就会自动触发服务器的request请求事件，然后执行回调函数
serve.on('request',function(){
    console.log('收到客户端的请求了')
})
//4.绑定端口号，启动
//不被占用即可
serve.listen(3000,function(){
    console.log('服务器启动成功了，可以通过localhost:3000访问')
})
```
cmd一直占用
![在这里插入图片描述](https://img-blog.csdnimg.cn/7cbbf293a1cc41ae98205833e035de8a.png)

![在这里插入图片描述](https://img-blog.csdnimg.cn/6493f24034ce4fbf97fc4e95b3a0b909.png)
按住Crtl+C关闭服务

升级：

```javascript
var http = require('http')
var serve=http.createServer()

//request请求事件处理函数，需要接受两个参数
//   Request请求对象
//   Response响应对象
serve.on('request',function(request,response){
    console.log('收到客户端的请求了'+'请求路径是'+request.url)
    response.write('hello')
    response.end()
})
serve.listen(3000,function(){
    console.log('服务器启动成功了，可以通过localhost:3000访问')
})
```
<a>localhost:3000/tete</a>
后面输入什么，都是返回加入的hello
![在这里插入图片描述](https://img-blog.csdnimg.cn/f12926ec93e44c5888fca67a830a922a.png)
现在的服务器的能力还很弱
思考：
希望当请求不同的路径时响应不同的结果
例如默认为/（一切请求路径都从/开头）
例如当/index,/login,/register,...
根据不同的响应路径返回不同的页面
具体实现代码如下：

```javascript
//解决乱码
res.setHeader("Contenttype","application/json";charset=utf-8)
if(request.url==='/login'){
    response.end('登录页面')
}
else if(request.url==='/register'){
    response.end('注册页面')
}
else{
	response.end('404 Not Found')
}
```

## Node中的JavaScript

 - EcmaScript

  没有DOM\BOM

 - 核心模块
 - 第三方模块
 - 用户自定义模块

### 核心模块
Node为JavaScript提供很多服务器级别的API

例如：文件操作的fs核心模块，http服务构建的http模块，path路径操作模块，os操作系统信息模块。。。

如果是核心模块(格式举例)：```var fs=require('fs')```

调用自定义模块
![在这里插入图片描述](https://img-blog.csdnimg.cn/d81a8ec37d36434a93d5b3271a67fca9.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_20,color_FFFFFF,t_70,g_se,x_16)

运行结果
![在这里插入图片描述](https://img-blog.csdnimg.cn/b143f199b72b4ff19d441594be285e68.png)
**在Node中没有全局作用域，只有模块作用域**
那么如何让模块之间相互通信呢？
*目的：并不是简单的执行其代码，是为了使用其定义的方法成员*

===>为每个文件模块提供了一个对象：exports
a.js
```javascript
var foo='bbb'
exports.foo='hello'
exports.add=function(x,y){
	return x+y
}
function add(a,b){
	return a-b
}
```
b.js
```javascript
var ret=require('./b')
console.log(ret.foo)
console.log(ret.add(10,30))
```

