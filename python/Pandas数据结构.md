@[TOC](目录)
# Series
```python
pandas.Series( data, index, dtype, name, copy)
```

 - data：一组数据(ndarray 类型)。
 - index：数据索引标签，如果不指定，默认从 0 开始。
 - dtype：数据类型，默认会自己判断。
 - name：设置名称。
 - copy：拷贝数据，默认为 False。
# DataFrame

```python
pandas.DataFrame( data, index, columns, dtype, copy)
```

 - data：一组数据(ndarray、series, map, lists, dict 等类型)。
 - index：索引值，或者可以称为行标签。
 - columns：列标签，默认为 RangeIndex (0, 1, 2, …, n) 。
 - dtype：数据类型。
 - copy：拷贝数据，默认为 False。
![在这里插入图片描述](https://img-blog.csdnimg.cn/2771f83220bb40c992c062e3dbb4f0fd.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_20,color_FFFFFF,t_70,g_se,x_16)

