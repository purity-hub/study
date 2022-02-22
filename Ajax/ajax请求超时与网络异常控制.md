```javascript
app.post('/delay',(req,res)=>{
    //设置响应头，设置允许跨域
    res.setHeader('Access-Control-Allow-Origin','*');
    setTimeout(()=>{
    //设置响应体
    	res.send('延时响应');
    },3000)
});
```

```html
<script>
		const btn = document.getElementsByTagName('button')[0]
        const result=document.getElementById('result');
        result.addEventListener("click",function(){
            //console.log("test");
            const xhr=new XMLHttpRequest();
            //设置超时2s
            xhr.timeout=2000;
            xhr.ontimeout=function(){
            	alert("网络异常，请稍后")
            }
            //网络异常回调
            xhr.onerror=function(){
            	alert("你的网络似乎出来问题");
            }
            xhr.open('GET','http://127.0.0.1:3000/delay')
            xhr.send();
            xhr.onreadystatechange=function(){
                //判断服务端返回了全部的结果
                if(xhr.readyState===4){
                    if(xhr.status>=200&&xhr.status<300){
                        //处理结果
                        
                        result.innerHTML=xhr.response;
                    }else{

                    }
                }
            }
        })
    </script>
```
手动取消：`abort()`
