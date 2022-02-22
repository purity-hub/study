项目结构：
![在这里插入图片描述](https://img-blog.csdnimg.cn/bc4467354eaa4896a062f114052cc2dd.png)
**这里我结合thymeleaf**

```html
<html  class="x-admin-sm" xmlns:th="http://www.thymeleaf.org">
```

```html
<link rel="stylesheet" th:href="@{/css/font.css}">
    <link rel="stylesheet" th:href="@{/css/login.css}">
	  <link rel="stylesheet" th:href="@{/css/xadmin.css}">
```

记住，这里的`@{/css/font.css}`不能写成`@{/static/css/font.css}`，否则没有用，因为这里的默认目录就是static,再加一个static就扫描不到了

这里搞得我怀疑人生了，。。。

这里得页面跳转的代码：

```java
@Controller
public class LoginController {

    @Autowired
    LoginService loginService;
    @RequestMapping("/user/login")
    public String result(HttpServletRequest req, HttpServletResponse resp){

        String username = req.getParameter("username");
        String password = req.getParameter("password");
//        System.out.println("hhhhhhhhhhhhh"+username);
        User user = new User();
        user.setName(username);
        user.setPassword(password);

        boolean flag = loginService.login(user);

        if(flag==true){
            return "redirect:/main.html";
        }else {
            return "/error/error";
        }
    }

}
```

```java
@Configuration
public class LoginMvcConfig implements WebMvcConfigurer {
    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/").setViewName("login");
        registry.addViewController("/login").setViewName("login");
        registry.addViewController("/main.html").setViewName("index");
    }
}
```



