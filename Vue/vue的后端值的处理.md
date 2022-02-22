后端：

TzzbMapper:
```java
package org.jeecg.modules.tzzb.mapper;

//下面少了，找了好久
@Mapper
public interface TZzbMapper extends BaseMapper<TZzb> {
    //查询所以的锚段集合
    List<String> findbyMdid();
}

```
TzzbMapper.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<!--自动生成的代码，这里也要改以下绑定-->
<mapper namespace="org.jeecg.modules.tzzb.mapper.TZzbMapper">

    <!--通过锚段id来查询-->
    <!--没有参数，获取列表即可-->
    <select id="findbyMdid" resultType="org.jeecg.modules.tzzb.entity.TZzb">
        select distinct mdid from t_zzb order by mdid
    </select>
</mapper>

```
TZzbServiceImpl
```java
package org.jeecg.modules.tzzb.service.impl;

@Service
public class TZzbServiceImpl extends ServiceImpl<TZzbMapper, TZzb> implements ITZzbService {
    @Autowired
    TZzbMapper tzzbMapper;

    @Override
    //锚段id
    public List<String> getbyMdid() {

        List<String> tzzbs=tzzbMapper.findbyMdid();
        //System.out.println(tzzbs);
        return tzzbs;
    }
}

```
ITZzbService
```java
package org.jeecg.modules.tzzb.service;

public interface ITZzbService extends IService<TZzb> {

    //查询锚段集合
    List<String> getbyMdid();
}

```
TZzbController
```java
package org.jeecg.modules.tzzb.controller;

@Api(tags="t_zzb")
@RestController
@RequestMapping("/tzzb/tZzb")
@Slf4j
public class TZzbController extends JeecgController<TZzb, ITZzbService> {
	@Autowired
	private ITZzbService tZzbService;

	/**
	 * 分页列表查询
	 *
	 * @param tZzb
	 * @param pageNo
	 * @param pageSize
	 * @param req
	 * @return
	 */
	@AutoLog(value = "t_zzb-分页列表查询")
	@ApiOperation(value="t_zzb-分页列表查询", notes="t_zzb-分页列表查询")
	@GetMapping(value = "/list")
	public Result<?> queryPageList(TZzb tZzb,
								   @RequestParam(name="pageNo", defaultValue="1") Integer pageNo,
								   @RequestParam(name="pageSize", defaultValue="10") Integer pageSize,
								   HttpServletRequest req) {
		QueryWrapper<TZzb> queryWrapper = QueryGenerator.initQueryWrapper(tZzb, req.getParameterMap());
		Page<TZzb> page = new Page<TZzb>(pageNo, pageSize);
		IPage<TZzb> pageList = tZzbService.page(page, queryWrapper);
		return Result.OK(pageList);
	}

	/**
	 *   添加
	 *
	 * @param tZzb
	 * @return
	 */
	@AutoLog(value = "t_zzb-添加")
	@ApiOperation(value="t_zzb-添加", notes="t_zzb-添加")
	@PostMapping(value = "/add")
	public Result<?> add(@RequestBody TZzb tZzb) {
		tZzbService.save(tZzb);
		return Result.OK("添加成功！");
	}

	/**
	 *  编辑
	 *
	 * @param tZzb
	 * @return
	 */
	@AutoLog(value = "t_zzb-编辑")
	@ApiOperation(value="t_zzb-编辑", notes="t_zzb-编辑")
	@PutMapping(value = "/edit")
	public Result<?> edit(@RequestBody TZzb tZzb) {
		tZzbService.updateById(tZzb);
		return Result.OK("编辑成功!");
	}

	/**
	 *   通过id删除
	 *
	 * @param id
	 * @return
	 */
	@AutoLog(value = "t_zzb-通过id删除")
	@ApiOperation(value="t_zzb-通过id删除", notes="t_zzb-通过id删除")
	@DeleteMapping(value = "/delete")
	public Result<?> delete(@RequestParam(name="id",required=true) String id) {
		tZzbService.removeById(id);
		return Result.OK("删除成功!");
	}

	/**
	 *  批量删除
	 *
	 * @param ids
	 * @return
	 */
	@AutoLog(value = "t_zzb-批量删除")
	@ApiOperation(value="t_zzb-批量删除", notes="t_zzb-批量删除")
	@DeleteMapping(value = "/deleteBatch")
	public Result<?> deleteBatch(@RequestParam(name="ids",required=true) String ids) {
		this.tZzbService.removeByIds(Arrays.asList(ids.split(",")));
		return Result.OK("批量删除成功!");
	}

	/**
	 * 通过id查询
	 *
	 * @param id
	 * @return
	 */
	//这里查询通过id，所以数据库中一定要有字段id
	@AutoLog(value = "t_zzb-通过id查询")
	@ApiOperation(value="t_zzb-通过id查询", notes="t_zzb-通过id查询")
	@RequestMapping(value = "/queryById")
	public Result<?> queryById(@RequestParam(name="id",required=true) String id) {
		//这里查询通过id传递参数给前端
		TZzb tZzb = tZzbService.getById(id);
		if(tZzb==null) {
			return Result.error("未找到对应数据");
		}
		return Result.OK(tZzb);
	}

    /**
    * 导出excel
    *
    * @param request
    * @param tZzb
    */
    @RequestMapping(value = "/exportXls")
    public ModelAndView exportXls(HttpServletRequest request, TZzb tZzb) {
        return super.exportXls(request, tZzb, TZzb.class, "t_zzb");
    }

    /**
      * 通过excel导入数据
    *
    * @param request
    * @param response
    * @return
    */
    @RequestMapping(value = "/importExcel", method = RequestMethod.POST)
    public Result<?> importExcel(HttpServletRequest request, HttpServletResponse response) {
        return super.importExcel(request, response, TZzb.class);
    }

	 @AutoLog(value = "t_zzb-下拉框通过锚段id查询")
	 @ApiOperation(value="t_zzb-下拉框通过锚段id查询", notes="t_zzb-下拉框通过锚段id查询")
	 @GetMapping(value = "/queryByMdId")
	 public Result<List> queryByMdId(HttpServletRequest req) {
		//要先将拦截器配置一下
		 //Tzzb就是获取到的数据
         //String mdid=req.getParameter("mdidList");
		 //System.out.println(mdid);
		 //调试下面有错误
		 TZzbMapper tZzbMapper=null;
		 List<String> tZzb = tZzbService.getbyMdid();
		 //System.out.println(tZzb);
		 //通过http://localhost:8080/jeecg-boot//tzzb/tZzb/queryByMdId访问
		 //model增加参数
		 //m.addAttribute(tZzb);
		 return Result.OK(tZzb);
	 }
}

```
前端：

```html
<!--下拉查询分锚段-->
      <!--下面只能用百分比-->
      <!--option是不能绑定事件的，若要绑定事件，在select上绑定change事件-->
        <a-select name="mdidList" v-model="mdid" placeholder="请选择项目名称" style="width: 25%;" @change="gotoMdid($event)">
          <!--默认的字段-->
          <a-select-option value="0">请选择</a-select-option>
          <!--锚段id-->
          <!--items在后面配置-->
          <!--mdidList 是源数据数组，而 item 则是被迭代的数组元素的别名-->
          <!--v-for指令循环取值-->
          <!--一定要有v-value，否则每个选择得值都是一样的-->
          <a-select-option v-for="item in mdidList" :value="item"> {{item}}</a-select-option>
        </a-select>
```

```javascript
data () {
  return {
    //下拉选择锚段的列表
    //mdid的作用是用于获取选择了的哪个选项
    mdid:'',
    mdidList:[]
}
created() {
      this.getSuperFieldList();
      this.getmdidList();
    },
    computed: {
      importExcelUrl: function(){
        return `${window._CONFIG['domianURL']}/${this.url.importExcelUrl}`;
      },
    },
    methods: {
      initDictConfig(){
      },
      gotoMdid:function (){
        //alert(event)//输出[Object,Object]
        //获取到值之后进行表单的更新

        alert(this.mdid);
      },
      getmdidList(){
        //后端传递得数据
        var url = "/tzzb/tZzb/queryByMdId"
        getAction(url).then((res)=>{
          if(res.success){
            //alert(res.result[1].mdid);//输出某个数组中得mdid得值
            //alert(res.result.length);//输出8
            for (let i = 0; i < res.result.length; i++) {
              this.mdidList.push(res.result[i].mdid);
            }
          }
        })
      }
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/62015e33934747eca47252f5bc5de3bc.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_20,color_FFFFFF,t_70,g_se,x_16)
![在这里插入图片描述](https://img-blog.csdnimg.cn/e8b15cd2280f4b51b37ec796aced9d10.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_17,color_FFFFFF,t_70,g_se,x_16)

