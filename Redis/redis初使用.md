# Redis
Redis是互联网技术领域使用最为广泛的存储中间件。
(Remote Dictionary Service)(远程字典服务)

# 技术
使用某项技术再简单不过了，但是随着业务发展，系统的用户量，并发量涨上来之后，现有的系统的问题就会曝出来，如果不能深入理解系统、技术和框架背后的深层原理，就无法理解很多问题的本质，更谈不上解决了，临时抱佛脚也于事无补。

# Redis的安装
这里我选用的是docker安装

```powershell
# 拉取 Redis 镜像
docker pull redis
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/ef0fcd3731b94fecb5820a97737feebf.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_20,color_FFFFFF,t_70,g_se,x_16)

```powershell
# 运行 Redis 容器
docker run --name myredis -d -p6379:6379 redis
```

 ![在这里插入图片描述](https://img-blog.csdnimg.cn/a2e535268a4544a7b1a015723444f415.png)

```powershell
# 执行容器中的 redis-cli ,可以直接使用命令行操作
docker exec -it myredis redis-cli
```
# 5种基础的数据结构
string(字符串)，list(列表)，hash(字典)，set(集合)，zset(有序集合)

Redis的所有的数据结构都是以唯一的key字符串作为名称，然后通过这个唯一的key值来获取相应的value数据。不同类型的数据结构差异就在于value的结构不一样
## string

 - 小于1MB时，扩容加倍现有空间
 - 大于1MB时，扩容多1MB空间

```powershell
set key value
get key
exists key
del key
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/bea0933abc154fb2b4ea0371079ffd79.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_10,color_FFFFFF,t_70,g_se,x_16)

```powershell
mset key value [key value...]
mget key [key...]
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/77e969ef89894319a522eebae1ef925f.png)

```powershell
expire key seconds     # seconds s 后过期
setex key seconds value
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/43efed17f0a6497ebbf01cec1188b87c.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/8e398f05f40a48f288a17d86c908212f.png)

```powershell
setnx key value
# 如果 name 不存在则执行 set 创建
# 如果 name 存在则创建不成功
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/5b54b7ed732946f6b803b974fb1ea8f0.png)

```powershell
incr key # 增加
incrby key value
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/d2f1104db16948bf96624c59281bf41c.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_14,color_FFFFFF,t_70,g_se,x_16)
## list

```powershell
rpush key value [value...]
llen key
lpop key # 右边进，左边出:队列
rpop key # 右边进，右边出:栈
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/c29aaab68f264188a04bcb6f18efeb58.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_13,color_FFFFFF,t_70,g_se,x_16)

```powershell
lindex key index
lrange key start end
ltrim key start end
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/8db5dc0639e4441d828c85764edd1109.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_13,color_FFFFFF,t_70,g_se,x_16)
## hash

```powershell
hset key field value
hgetall key
hget key field
hlen key
hmset key field value [field value...]
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/6fafb34a91384e43b0b49445dc893a66.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_15,color_FFFFFF,t_70,g_se,x_16)

```powershell
hincrby key field increment
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/d5962966cea048ffa4e735bcaf35f360.png)
## set

```powershell
sadd key value[value...]
smembers key
sismember key value
scard key # 获取长度
spop key # 弹出一个
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/1136242409c14f9ebc82c00c6a7099b9.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_11,color_FFFFFF,t_70,g_se,x_16)
## zset
zset value score（按score排序）

```powershell
zadd key score member
zrange key start end # 区间为排名的范围
zrevrange key start end # 逆序
zcard key
zscore key member # 获取score
zrank key member #获取排名
zrangebyscore key start end withscores # 根据分值区间遍历zset,并返回分值
zrem key member # 删除
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/0bbc44cb37d844efb8515eb576bc8a2d.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_12,color_FFFFFF,t_70,g_se,x_16)

