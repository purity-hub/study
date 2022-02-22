标识变量

```html
//标识变量
let isSending=false;
btns[0].onclick=function(){
	if(isSending) x.abort();
	x=new XMLHttpRequest();
	isSending=true;
	x.open('GET','http://127.0.0.1:8000/delay');
	x.send();
	x.onreadystatechange=function(){
	if(x=readyState===4){
		isSending=false;
	}
}
```
		
