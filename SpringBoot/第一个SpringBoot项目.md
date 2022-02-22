@[TOC](目录)

在官网搭建解压导入即可
![在这里插入图片描述](https://img-blog.csdnimg.cn/aa85a560a66b4570909fda71e18efa85.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_20,color_FFFFFF,t_70,g_se,x_16)
IDEA:
![在这里插入图片描述](https://img-blog.csdnimg.cn/832f9d7c36ae41c6adfa53f4e90796af.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_20,color_FFFFFF,t_70,g_se,x_16)
新建一个项目，注意这里如果导入数据库的支持，要配置url数据库，否则到不到以下效果

```java
@SpringBootApplication
public class Springboot01Application {

    public static void main(String[] args) {
        SpringApplication.run(Springboot01Application.class, args);
    }

}
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/2dc9a111341f4432b7e2f9384b7e02a8.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_20,color_FFFFFF,t_70,g_se,x_16)

在Controller下新建一个类：

```java
@Controller
@RequestMapping("/hello")
public class HelloControl {

    @GetMapping("/hello")
    @ResponseBody
    public String hello(){
        return "hello";
    }
}
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/b8b0abf9610342e7a5c1358b485544fe.png)
更改项目的端口号：`server.port=8080`

自定义banner:新建一个banner.txt

```txt
////////////////////////////////////////////////////////////////////
//                          _ooOoo_                               //
//                         o8888888o                              //
//                         88" . "88                              //
//                         (| ^_^ |)                              //
//                         O\  =  /O                              //
//                      ____/`---'\____                           //
//                    .'  \\|     |//  `.                         //
//                   /  \\|||  :  |||//  \                        //
//                  /  _||||| -:- |||||-  \                       //
//                  |   | \\\  -  /// |   |                       //
//                  | \_|  ''\---/''  |   |                       //
//                  \  .-\__  `-`  ___/-. /                       //
//                ___`. .'  /--.--\  `. . ___                     //
//              ."" '<  `.___\_<|>_/___.'  >'"".                  //
//            | | :  `- \`.;`\ _ /`;.`/ - ` : | |                 //
//            \  \ `-.   \_ __\ /__ _/   .-` /  /                 //
//      ========`-.____`-.___\_____/___.-`____.-'========         //
//                           `=---='                              //
//      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^        //
//            佛祖保佑       永不宕机      永无BUG                　　//
////////////////////////////////////////////////////////////////////
```

