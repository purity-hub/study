[Github:axios](https://github.com/axios/axios)

```html
<script>
	const btns=document.querySelectorAll('button');
	//配置 baseURL
	//axios.defaults.baseURL='http://127.0.0.0:8000';
	btn[0].onclick=function(){
		axiox.get('http://127.0.0.1:8000/axios-server',{
			params:{
				id:100,
				vip:7
			},
			headers:{
			name:'atguigu',
			age:20
			}
		}).then(value=>{
			console.log(value);
		});
		
	}
	btn[2].onclick=function(){
		axios({
			//请求方法
			method:'POST',
			url:'/axios-server',
			params:{
				vip:10,
				level:30
			},
			header:{
				a:100,
				b:200
			},
			data:{
				username:'admin',
				password:'admin'
			}
		}).then(response=>{
			console.log(response);
			console.log(response.status);
			console.log(response.statusText);
			console.log(response.data);
		})
	}
</script>
```

