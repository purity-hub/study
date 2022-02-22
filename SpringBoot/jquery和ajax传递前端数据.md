前端部分代码：
```html
<tr th:each="item,eee: ${user}">
              <td>
                <input type="checkbox" name="id" th:value="${item.worknumber}"   lay-skin="primary">
              </td>
              <td th:text="${item.name}"></td>
              <td th:text="${item.username}"></td>
              <td id="worknumber" th:text="${item.worknumber}"></td>
              <td th:text="${item.sex}"></td>
              <td th:text="${item.officephone}"></td>
              <td th:text="${item.residentialphone}"></td>
              <td th:text="${item.attribute}"></td>
              <td class="td-manage">
                <a title="删除" onclick="member_del(this,'要删除的id')" href="javascript:;">
                  <i class="layui-icon">&#xe640;</i>
                </a>
              </td>
            </tr>
<script>
/*用户-删除*/
  function member_del(obj,id){
    layer.confirm('确认要删除吗？',function(index){
      //发异步删除数据
      //$(obj).parents("tr").remove();
      layer.msg('已删除!',{icon:1,time:1000});
      //通过post来向后台发送数据
      //post中的第二个参数就是传递的数据
      $.post("personinfodel",{worknumber:$(obj).parent().parent().find("#worknumber").text()},function(result){
        //移除对应的表行
        //alert($(obj).parent().parent().find("#worknumber").html())
        $(obj).parents("tr").remove();
      })
      //通过jquery来实现跳转，这里才知道可以这样，记住！！！
      //或者采取另一种方式
      //window.location.replace("personinfodel");
      //window.location.href = "personinfodel";
    });
  }
</script>
```
后台代码：

```java
//删除一位用户得数据
    @RequestMapping("personinfodel")
    public String delData(HttpServletRequest req,HttpServletResponse resp){
        //System.out.println("跳转成功");
        int worknumber =Integer.parseInt(req.getParameter("worknumber"));
        //哈哈，jquery结合ajax获取成功啦
        //System.out.println("获取的值是"+worknumber);
        personalInfoMapper.deleteInfo(worknumber);
        resp.setHeader("refresh","1;url=personalInfo");//刷新页面
        return "personalInfo";
    }
```
Mapper代码：

```java
//删除用户信息,传入参数：worknumber
    @Delete("delete from users where worknumber=#{worknumber}")
    int deleteInfo(@Param("worknumber") int worknumber);
```

