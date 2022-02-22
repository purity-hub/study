@[TOC](目录)
# 下载go
[go安装包地址](https://golang.google.cn/dl/)
![在这里插入图片描述](https://img-blog.csdnimg.cn/239f265315a544858d13a934b6007945.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_20,color_FFFFFF,t_70,g_se,x_16)
这里我选择的是windows环境下的msi

一路安装go next 选择自定义go路径

# 环境变量
![在这里插入图片描述](https://img-blog.csdnimg.cn/21288a96f9504faca5ee686f37e0d4e9.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_20,color_FFFFFF,t_70,g_se,x_16)
![在这里插入图片描述](https://img-blog.csdnimg.cn/c1f667cb1204494ab7b4d59649764304.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_20,color_FFFFFF,t_70,g_se,x_16)
在gproject目录下的结构如下：
![在这里插入图片描述](https://img-blog.csdnimg.cn/5cc56e1b5722492a8ba54847afb80517.png)
# 检验go
![在这里插入图片描述](https://img-blog.csdnimg.cn/13622fb2b3f140fe95e754bbfc6d4834.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_13,color_FFFFFF,t_70,g_se,x_16)

# 新建test.go文件

```go
package main

import "fmt"

func main(){
    fmt.Println("Hello,World!")
}
```
# cmd下运行
![在这里插入图片描述](https://img-blog.csdnimg.cn/bdcc592192b344229ef2d21bac683dce.png)

