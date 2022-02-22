@[TOC](目录)
# Node.js
## Node.js介绍
### 为什么要学习Node.js
企业需求：
 - 具有服务端开发经验最好
 - front-end
 - back-end
 - 全栈开发工程师
基本的网站开发能力:
 - 服务端
 - 前端
 - 运维部署
最终目标:多人社区
![在这里插入图片描述](https://img-blog.csdnimg.cn/e9a8d5fd72c84d93a7739e81339e8565.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcHVyaXR5LWdvb2Q=,size_20,color_FFFFFF,t_70,g_se,x_16)

### Node.js是什么
打开服务器这个黑盒子

 1. java
 2. php
 3. Python
 4. Ruby(github网站)
 5. .Net
 6. ......
 7. Node.js(先选择这个来打开服务器)
(语法不同)
Node.js采用javascript来进行

**凡是能用JavaScript来实现的，都采用其来实现**
Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.

 - Node.js不是一门语言
 - Node.js不是库，不是框架
 - Node.js是一个JavaScript运行时环境
 - Node.js可以解析和执行JavaScript代码
 - 以前只有浏览器可以解析JavaScript代码，
 - 也就是说现在的JavaScript可以完全脱离浏览器来运行，一切都归功于Node.js

浏览器中的JavaScript
1.EcmaScript

 - 基本的语法
 - if
 - var
 - function
 - Object
 - Array

2.BOM
3.DOM

Node.js中的JavaScript没有BOM、DOM，在Node.js这个执行环境中提供了API，例如：

 - 文件读写
 - 网络服务的构建
 - 网络通信
 - http服务器
 - 等处理。。。

Node.js

 - 事件驱动
 - 非阻塞IO模型(异步)
 - 轻量高效

Node.js

 - 生态系统，npm基于Node.js开发的世界上最大的一个开源库生态系统
 - npm绝大多数JavaScript相关的包都存放在了npm上，这样做是为了开发者更方便的下载我
 - `npm install jquery`

构建与Chorme引擎之上

 - 代码只是具有特定格式的字符串而已
 - 引擎可以认识它，引擎可以帮你取解析和执行
 - Google Chrome的V8引擎是目前公认的解析执行JavaScript代码最快的
 - Node.js的作者把Google Chrome中的V8引擎一直出来，开发了一个独立运行JavaScript
## Node.js能做什么
 - Web服务器后台
 - 命令行工具:
 - 1.npm(node)
 - 2.git(C语言开发)
 - 3.hexo(node)
 - ......
 - 游戏服务器
 - 接口服务器
 - 。。。。。。

对于前端开发工程师来讲，接触node最多的是它的命令行工具

 - 自己写的很少，主要是使用别人第三方的
 - webpack
 - gulp
 - npm

## 预备知识
HTML
CSS
JavaScript
简单的命令行操作

 - cd
 - dir
 - ls
 - mkdir
 - rm

具有服务端开发经验更佳

**学习是一个过程，一遍不会就两遍。。。**

## 能学会什么
B/S编程模型

 - Browser-Server
 - back-end
 - 任何服务端技术这种BS编程都是一样的，与语言无关
 - Node知识作为我们学习BS编程模型的工具

模块化编程

 - RequireJS
 - SeaJS
 - `@import('文件路径')`
 - 以前认知的JavaScript只能通过标签来运行
 - 在Node中可以向`@import`一样引用加载javascript文件

Node常用API
异步编程

 - 回调函数
 - Promise
 - async
 - generator

Express Web开发框架
Ecmascript6

 - 它只是新的一个语法而已
。。。
