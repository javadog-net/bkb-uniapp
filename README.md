<div align="center">
    <p align="center">
        <img src="https://img-blog.csdnimg.cn/c523a74a9cbe4f0593462a253c90dea5.png" height="150" alt="logo"/>
    </p>
    <h1 align="center" style="margin: 30px 0 30px; font-weight: bold;">避坑宝 v1.0.0</h1>
	<h4 align="center">基于SpringBoot+uniapp企业黑红名单吐槽小程序</h4>
</div>

## 📚项目介绍
### 避坑宝
【避坑宝】**企业黑红名单吐槽小程序**是一个具有**吐槽发布企业信息的一个平台**，言论自由，评判自定，便于我们打工人分辨企业好坏。技术栈基于**SpringBoot+MybatisPlus+uniapp+uview2**等更多优秀组件及前沿技术开发，注释丰富，代码简洁，开箱即用。及其适合**项目分层实战**及业务流转对接，是个**练手学习简单项目的好机会**。
<p align="center">     
    <p align="center">
       <a href='https://gitee.com/javadog-net/bkb-boot'>
       <img src='https://gitee.com/javadog-net/bkb-boot/badge/star.svg?theme=dark' alt='star'></img>
       </a>
        <a href="https://www.uviewui.com/">
            <img src="https://img.shields.io/badge/uView-2.x-blue.svg" alt="uView">
        </a> 
        <a href="https://shiro.apache.org/">
            <img src="https://img.shields.io/badge/shiro-1.3.2-pink.svg" alt="shiro">
        </a> 
        <a href="http://spring.io/projects/spring-boot">
            <img src="https://img.shields.io/badge/spring--boot-2.4.0-green.svg" alt="spring-boot">
        </a>
        <a href="http://mp.baomidou.com">
            <img src="https://img.shields.io/badge/mybatis--plus-3.4.1-blue.svg" alt="mybatis-plus">
        </a>  
         <a href="http://hutool.cn/">
            <img src="https://img.shields.io/badge/hutool-5.7.20-dark.svg" alt="mybatis-plus">
        </a> 
        <a href="./LICENSE">
            <img src="https://img.shields.io/badge/license-Apache%202-red" alt="license Apache 2.0">
        </a>
    </p>
</p>

******

## 🎁快速链接
### 公众号：**JavaDog程序狗**
**关注公众号，发送 【bkb】或【避坑宝】，无任何套路即可获得**

![](https://img-blog.csdnimg.cn/7e3e25a70b4345e398b559ebe9a42be9.png)
******
## 🌱体验地址
### 小程序搜索【避坑宝】
![](https://img-blog.csdnimg.cn/8480670c9cd34e11bb5ce1570477908e.png)
******

##  🍯猜你喜欢
### ChatGPT
> 最近写了两篇关于**ChatGPT**相关文章，但因为审核原因未过审，跟大家抱歉

[【ChatGPT】手摸手，带你玩转ChatGPT](https://mp.weixin.qq.com/s/9wEelbTN6kaChkCQHmgJMQ)
[【ChatGPT】SpringBoot+uniapp+uview2对接OpenAI，带你开发玩转ChatGPT](https://mp.weixin.qq.com/s/b19J36Eo3-ba7bHbWzoZYQ)
******

## 🍵主要功能模块
### 模块思维导图

![](https://img-blog.csdnimg.cn/2699d4db03874903bdc5ecfe4526d1c7.png)
******
#### 🛳️授权
##### 小程序授权
 用户通过**小程序搜索**【避坑宝】，进入界面进行授权，点击授权登录，**获取用户openid**

![](https://img-blog.csdnimg.cn/732f8ed03e514a028cd10455bfd76d74.png)
******

#### 🍭首页
##### 1. 企业红榜Top
>展示综合评分前三的**优秀企业**，通过浏览量/点击量/评论量等综合得分

##### 2. **企业黑榜榜Top**
>展示综合评分前三的**低分企业**，通过浏览量/点击量/评论量等综合得分

##### 3. **最新发布**
>展示吐槽发布时间最新的三个企业

##### 4.  **最新发布**
> 展示问答回复最多的三个问题

![](https://img-blog.csdnimg.cn/4afa72aec2214e5cb682be87660ee2bf.png)
******
#### ⛄红黑榜
##### 1.企业黑榜
> 分页展示低评分分企业，综合评分越高排名越靠前

##### 2.企业红榜
> 分页展示优秀高评分企业，综合评分越高排名越靠前

##### 3.企业详情
> 展示吐槽企业信息，浏览/回复/点赞/热度等分数及发布时间，跟帖信息等

![请添加图片描述](https://img-blog.csdnimg.cn/df5c2f9ce8a7418ea492175044d7fb6d.jpeg)
******
#### 🎃发布
##### 1. 吐槽
> 可对企业进行**吐槽**或者**赞扬**，对应发布的**红榜和黑榜**

##### 2. 提问
> 可针对企业或者工作问题进行**任何提问**

![](https://img-blog.csdnimg.cn/848ed2088a6d4fcf93ed0de97737196b.jpeg)
******
#### 👻发布
##### 1. 问题列表
> 针对所有**提问**的一个**分页列表**，可进行搜索

##### 2. 问题详情
> 问题的详细描述，包含**点赞**和回**复数**以及**回复内容列表**

![](https://img-blog.csdnimg.cn/52d610a646534c9dbd238bbd7f87c882.jpeg)
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

![请添加图片描述](https://img-blog.csdnimg.cn/7166763ea1d74b36be2d328af1032cc5.jpeg)
![请添加图片描述](https://img-blog.csdnimg.cn/33f7035557374ce380a34638711f5b5e.jpeg)

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

![](https://img-blog.csdnimg.cn/b27b607458fe48009c1afc060e9782a4.png)

	![](https://img-blog.csdnimg.cn/5a57eb2518714668b1bd7bcf968d4dbf.png)

	
 3. 在HBuilderX工具下运行，选择需要运行到小程序
![](https://img-blog.csdnimg.cn/6fc68a87d42d4a07bd0ddfc244085401.png)

 4. 如需调整环境，请在/common/config/env.js修改环境变量

![](https://img-blog.csdnimg.cn/e3ea448a236541969160da4b3fe88f39.png)
******

### 👦启动后端
 1. 开发工具内配置好，并将**maven**配置好，建议使用**阿里云镜像**
 2. **application.yml配置文件**中配置微信小程序参数**appId**，**appSecret**
 
![](https://img-blog.csdnimg.cn/f0a12f7f91da4f07af1f3ef1a44a5169.png)

 3. 将chat-provider包下的/doc/SQL/db_chat.sql进行本地执行，并在application配置文件中修改数据库配置

![](https://img-blog.csdnimg.cn/1e30efa55d4d462eb3e33307fbe793b2.png)
![](https://img-blog.csdnimg.cn/994faa07183c4c65983d010f66f3f9c8.png)
 	
 4. 运行启动SpringBoot项目，如见到以下日志即为启动成功。

![](https://img-blog.csdnimg.cn/6192b9e21aad4ce8a9236c2cba78cfcf.png)
******
## 🤑体验
![](https://img-blog.csdnimg.cn/011d09f7eac849e59ed489e12d7d91d2.png)
## 😊总结
本篇文章以**实战项目**形式进行展开，适合咱们初学者进行实际开发体验，熟练**SpringBoot**同时，也加深分层的思路，并且融会贯通前端**uniapp/vue**等知识，是一个**知识全面**的概括，内容简单通俗易懂，希望对大家有所帮助。

![里面有我喜欢的人你能找到吗？](https://img-blog.csdnimg.cn/e74f3636c05a430eab8819333fa004eb.jpeg)
