## 📚项目介绍
### 避坑宝
【避坑宝】**企业黑红名单吐槽小程序**是一个具有**吐槽发布企业信息的一个平台**，言论自由，评判自定，便于我们打工人分辨企业好坏。技术栈基于**SpringBoot+MybatisPlus+uniapp+uview2**等更多优秀组件及前沿技术开发，注释丰富，代码简洁，开箱即用。极其适合**项目分层实战**及业务流转对接，是个**练手学习简单项目的好机会**。
******

## 🎁快速链接
### 公众号：**JavaDog程序狗**
**关注公众号，发送 【bkb】或【避坑宝】，无任何套路即可获得**

![](https://img.javadog.net/blog/bkb/80ec682f7bec493bafa8d4bd43624ffa_tplv-k3u1fbpfcp-zoom-1.png)
******
## 🌱体验地址
### 小程序搜索【避坑宝】
![](https://img.javadog.net/blog/bkb/7573b59228a14daba9264b892ef2145b_tplv-k3u1fbpfcp-zoom-1.png)
******

##  🍯猜你喜欢
### ChatGPT
> 最近写了两篇关于**ChatGPT**相关文章，但因为审核原因未过审，跟大家抱歉

[【ChatGPT】手摸手，带你玩转ChatGPT](https://mp.weixin.qq.com/s/9wEelbTN6kaChkCQHmgJMQ)
[【ChatGPT】SpringBoot+uniapp+uview2对接OpenAI，带你开发玩转ChatGPT](https://mp.weixin.qq.com/s/b19J36Eo3-ba7bHbWzoZYQ)
******

## 🍵主要功能模块
### 模块思维导图

![](https://img.javadog.net/blog/bkb/7ed61462fa6b4f629860ebd242f0e5ac_tplv-k3u1fbpfcp-zoom-1.png)
******
#### 🛳️授权
##### 小程序授权
 用户通过**小程序搜索**【避坑宝】，进入界面进行授权，点击授权登录，**获取用户openid**

![](https://img.javadog.net/blog/bkb/ef9b606cb56a46208890cc0e3f61e84f_tplv-k3u1fbpfcp-zoom-1.png)
******

#### 🍭首页
##### 1. 企业红榜Top
>展示综合评分前三的**优秀企业**，通过浏览量/点击量/评论量等综合得分

##### 2. **企业黑榜榜Top**
>展示综合评分前三的**低分企业**，通过浏览量/点击量/评论量等综合得分

##### 3. **最新发布**
>展示吐槽发布时间最新的三个企业

##### 4.  **最新问题**
> 展示问答回复最多的三个问题

![](https://img.javadog.net/blog/bkb/eaa944e40639444ba398a49033bb1347_tplv-k3u1fbpfcp-zoom-1.png)
******
#### ⛄红黑榜
##### 1.企业黑榜
> 分页展示低评分分企业，综合评分越高排名越靠前

##### 2.企业红榜
> 分页展示优秀高评分企业，综合评分越高排名越靠前

##### 3.企业详情
> 展示吐槽企业信息，浏览/回复/点赞/热度等分数及发布时间，跟帖信息等

![](https://img.javadog.net/blog/bkb/eaa944e40639444ba398a49033bb1347_tplv-k3u1fbpfcp-zoom-1.png)
******
#### 🎃发布
##### 1. 吐槽
> 可对企业进行**吐槽**或者**赞扬**，对应发布的**红榜和黑榜**

##### 2. 提问
> 可针对企业或者工作问题进行**任何提问**

![](https://img.javadog.net/blog/bkb/43b7156c5c2d4b478e712becbf3ec49b_tplv-k3u1fbpfcp-zoom-1.jpg)
******
#### 👻发布
##### 1. 问题列表
> 针对所有**提问**的一个**分页列表**，可进行搜索

##### 2. 问题详情
> 问题的详细描述，包含**点赞**和回**复数**以及**回复内容列表**

![](https://img.javadog.net/blog/bkb/9d5406b489ef47b7a3417ba3ff2015ee_tplv-k3u1fbpfcp-zoom-1.jpg)
******
#### 🌞我的
##### 1. 我的资料
> 可对自己**个人信息**进行维护，如昵称，性别，生日，简介

##### 2. 我的吐槽
> 本人发布过的吐槽信息，包含**红榜和黑榜**信息

##### 3. 我的提问
> 本人**发布过的提问信息**

##### 4. 关于
> webview嵌入的**本狗个人博客**

##### 5. 退出
> **授权信息清理**，跳转授权页面

![](https://img.javadog.net/blog/bkb/d52d531689814bfeaa9c75b81ee4f300_tplv-k3u1fbpfcp-zoom-1.jpg)
![](https://img.javadog.net/blog/bkb/4eb80e4b687242b6a89310818e8807c4_tplv-k3u1fbpfcp-zoom-1.jpg)

## 🦁组件
### 后端组件
| 插件 | 版本 | 用途 |
| --- | ----- |  ----- |
| jdk |  1.8 |java环境 |
| lombok | 1.18.16 |代码简化插件 |
| maven | 3.6.3 |包管理工具 |
| druid| 1.1.24 | JDBC组件 |
| hutool| 5.7.20 | Java工具类库|
| mybatis-plus| 3.4.1 | 基于 MyBatis 增强工具|
| pinyin4j| 2.5.1 | 拼音组件库|
| mysql | 8.0 / 5.7 | 数据库 |
| weixin-java-miniapp| 4.4.5.B | 数据库 |

### 前端组件
| 插件 | 版本 | 用途 |
| --- | ----- |  ----- |
| uview-ui|  ^2.0.31 |多平台快速开发的UI框架 |
| uni-simple-router | ^2.0.7 |专为uniapp打造的路由器 |
| moment | ^2.29.4 |js工具库 |
| mescroll-uni| ^1.3.7 | 上拉加载下拉刷新插件 |
| @uni-ui/code-ui| ^1.4.8 | 二维码生成工具|

******
## 🛠️快速启动
### 👸启动前端
 1. 使用HBuilderX在bkb-uniapp项目目录下执行 
	```
	npm install
	```
 2. 记得将小程序对应的appid，写入manifest.json里面的对应位置

![](https://img.javadog.net/blog/bkb/fc8e7e27afe14530ab985660daa83f92_tplv-k3u1fbpfcp-zoom-1.png)

![](https://img.javadog.net/blog/bkb/5a57eb2518714668b1bd7bcf968d4dbf.png)	

 3. 在HBuilderX工具下运行，选择需要运行到小程序
![](https://img.javadog.net/blog/bkb/3ff44a9592004336a3ba2aa214689042_tplv-k3u1fbpfcp-zoom-1.png)


 4. 如需调整环境，请在/common/config/env.js修改环境变量
![](https://img.javadog.net/blog/bkb/ca69a3ff5f5345eeb7234770b927656f_tplv-k3u1fbpfcp-zoom-1.png)
******

### 👦启动后端
 1. 开发工具内配置好，并将**maven**配置好，建议使用**阿里云镜像**


 2. application.yml配置文件中配置微信小程序参数**appId**，**appSecret**
 
![](https://img.javadog.net/blog/bkb/506cb037f08a4a25aed406b3eceddbb5_tplv-k3u1fbpfcp-zoom-1.png)

 3. 将chat-provider包下的/doc/SQL/db_chat.sql进行本地执行，并在application配置文件中修改数据库配置

![](https://img.javadog.net/blog/bkb/4fc0b90d3c52490596bde972cde3de0e_tplv-k3u1fbpfcp-zoom-1.png)

![](https://img.javadog.net/blog/bkb/4fc0b90d3c52490596bde972cde3de0e_tplv-k3u1fbpfcp-zoom-1.png)
 	
 4. 运行启动SpringBoot项目，如见到以下日志即为启动成功。

![](https://img.javadog.net/blog/bkb/55e831ee6de348f8aaa57753cf9c7857_tplv-k3u1fbpfcp-zoom-1.png)
******
## 🤑体验
![](https://img.javadog.net/blog/bkb/50b68f3b0905408985a73a0160e2809c_tplv-k3u1fbpfcp-zoom-1.png)

## 😊总结
本篇文章以**实战项目**形式进行展开，适合咱们初学者进行实际开发体验，熟练**SpringBoot**同时，也加深分层的思路，并且融会贯通前端**uniapp/vue**等知识，是一个**知识全面**的概括，内容简单通俗易懂，希望对大家有所帮助。

![里面有我喜欢的人你能找到吗？](https://img.javadog.net/blog/bkb/dc0d63b469d141018ace1214790d27cd_tplv-k3u1fbpfcp-zoom-1.jpg)


| JavaDog| 狗屋地址 |
| :----:| :----: | 
| 个人博客 | [https://blog.javadog.net](https://blog.javadog.net) | 
| 公众号 | [https://mp.weixin.qq.com/s/_vgnXoQ8FSobD3OfRAf5gw](https://mp.weixin.qq.com/s/_vgnXoQ8FSobD3OfRAf5gw) | 
| CSDN  | [https://blog.csdn.net/baidu_25986059](https://blog.csdn.net/baidu_25986059) | 
| 掘金 | [https://juejin.cn/user/2172290706716775](https://juejin.cn/user/2172290706716775)| 
| 知乎 | [https://www.zhihu.com/people/JavaDog](https://www.zhihu.com/people/JavaDog) | 
| 简书| [https://www.jianshu.com/u/1ff9c6bdb916](https://www.jianshu.com/u/1ff9c6bdb916) | 
| gitee|[https://gitee.com/javadog-net](https://gitee.com/javadog-net)  | 
| GitHub|[https://github.com/javadog-net](https://github.com/javadog-net)| 
