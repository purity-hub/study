```html
<script>
        const result=document.getElementById('result');
        result.addEventListener("mouseover",function(){
            console.log("test");
            const xhr=new XMLHttpRequest();
            xhr.open('POS','http://127.0.0.1:3000/server')
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

```javascript
app.post('/server',(req,res)=>{
    //设置响应头，设置允许跨域
    res.setHeader('Access-Control-Allow-Origin','*');
    //设置响应体
    res.send('Hello ajax!POST');
});
```
## 设置请求体

```html
xhr.send('a=100&b=200&c=300')
xhr.send('a:100&b:200&c:300')
xhr.send('1233211234567')
```
## 设置请求头信息

```html
xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
```

