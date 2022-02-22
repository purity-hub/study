Express基于Node.js平台，快速、开放、极简的Web开发框架

```
npm init --yes
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/c18645a33a1f450ab4edabd2b06f328a.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_14,color_FFFFFF,t_70,g_se,x_16)

```
npm i express
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/1db27f92a3214c81bd05b0b061966382.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_16,color_FFFFFF,t_70,g_se,x_16)

```javascript
const express=require('express')
const path=require('path')
const app=express();
app.get('/',(req,res)=>{
    res.send('Hello Ajax!');
});
app.listen(3000)
console.log('服务器启动成功')
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/b0e0197e9b5848a9a849325cdeabda93.png)
响应头
![在这里插入图片描述](https://img-blog.csdnimg.cn/5a567e96cafc47208e71e0c4e83f66a6.png)
请求标头
![在这里插入图片描述](https://img-blog.csdnimg.cn/a16b7004be3d49b6bd08911116776de7.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_14,color_FFFFFF,t_70,g_se,x_16)


