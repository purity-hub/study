# 中文乱码
在服务器默认发送的数据实际上是utf-8编码的内容

```javascript
var http=require('http')
var server=http.createServer()
server.on('request',function(req,res){
	//为解决乱码问题，就是正确的告诉浏览器发送的内容的编码方式
	res.setHeader('Content-type','text/plain;charset=utf-8')
	res.end('hello,世界')
})
server,listen(3000,function(){
	console.log('Server is running!')
})
```
**text/plain:普通文本**
**text/html:html文本**
