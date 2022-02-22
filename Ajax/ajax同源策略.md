@[TOC](目录)
# 跨域
## 同源策略
同源策略（Same origin policy）是一种约定，它是浏览器最核心也最基本的安全功能，如果缺少了同源策略，则浏览器的正常功能可能都会受到影响。 可以说Web 是构建在同源策略基础之上的，浏览器只是针对同源策略的一种实现。

同源：协议，域名，端口号必须完全相同
违背同源策略就是跨域

## 如何解决跨域
### JSONP
Jsonp(JSON with Padding) 是 json 的一种"使用模式"，可以让网页从别的域名（网站）那获取资料，即跨域读取数据。

为什么我们从不同的域（网站）访问数据需要一个特殊的技术( JSONP )呢？这是因为同源策略。

同源策略，它是由 Netscape 提出的一个著名的安全策略，现在所有支持 JavaScript 的浏览器都会使用这个策略。

### 原生jsonp实践

```html
用户名：<imput type="text" id="username">
<p></p>
<script>
	const input=document.querySelector('input');
	const p=document.querySelector('p');
	//声明handle函数
	function handle(data){
		input.style.border="solid 1px #f00";
		p.innerHTML=data.msg;
	}
	input.onblur=function(){
		let username=this.value;
		//向服务器端发送请求 检测用户名是否存在
		//1.创建 script属性
		const script =document.createElement('script');
		script.src='http://127.0.0.1:3000/check-username';
		//3.将script插入到文档中
		document.body.appendChild(script);
	}
</script>
```

```javascript
//用户名检查是否存在
app.all('/check-username',(req,res)=>{
	const data={
		exist:1,
		msg:'用户名已经存在'
	};
	let str =JSON.stringify(data);
	response.end('handle(${str})');
})
```
### CORS
CORS （Cross-Origin Resource Sharing，跨域资源共享）是一个系统，它由一系列传输的HTTP头组成，这些HTTP头决定浏览器是否阻止前端 JavaScript 代码获取跨域请求的响应。

![在这里插入图片描述](https://img-blog.csdnimg.cn/bb16208a24684cc68e8c9943fe2093e5.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_20,color_FFFFFF,t_70,g_se,x_16)


![在这里插入图片描述](https://img-blog.csdnimg.cn/4dc0bbcf22e44997a562f7c67153beaa.png)

![在这里插入图片描述](https://img-blog.csdnimg.cn/5b4ebc3c24c04de9a8322627a9f7158d.png)
[CORS](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS)
