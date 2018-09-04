# Interview

面试前需要准备的内容

## CSS

#### 布局

* 水平垂直居中 ok
* 三栏式布局 ok
* flex ok

#### 定位

* flex 定位 ok
* position 定位 ok
* float 定位 ok
* float 和 position 的相互影响
* 单位：px、em/rem、%、vw/vh、vmax/vmin
* ...


## JS

#### 编程题

* 实现一个对象的深Copy ok
* 二叉树的前序遍历, 中序遍历, 后序遍历, 中序遍历 ok
* 二叉树的镜像复制
* 二分查找一个值
* 反向字符串的实现
* 数组去重有哪些方式，详细理解各种方式的区别 ok
* Promsie.all 的实现
* JS 并发控制
* 遍历对象的所有的keys，有哪些方式，每种方式的优缺点
* 发布订阅模式的实现
* 实现一个bind
* 封装 ajax 请求
* class 的实现原理
* 发布订阅模式 ok
* 事件委托
* ...

#### JS 基础

* this 相关
* 闭包相关

* new 一个对象的过程
* 实现 JS 继承，有哪些继承方式
* 设计模式
* ...

#### HTTP 相关

> header 头里的内容详细了解，会引申出很多内容

* 缓存控制的字段, cache-control： max-age, no-cache, no-store, public
* 安全相关的字段, refer 代表请求源
* 各种状态码的含义, 200 404 304 500 502 504
* Content-Type
*

#### Web 安全

1. XSS (跨站脚本攻击)

  * 含义：注入有害的javascript 脚本
  * 解决：用户输入和接口查询输出校验

2. CSRF (Cross-site request forgery, 跨站请求伪造)

  * 含义：攻击者诱导用户访问曾经认证过的网站(cookie 有效)，发起有害请求
  * 解决：1. referer 代表着请求源进行校验; 2. token 校验; 3. 在 HTTP 头中自定义属性并验证；

#### Web 性能优化

1. 减少 HTTP 请求：合并图片，合并CSS/JS资源文件
2. 减少资源体积
  * webpack 代码压缩优化： 代码压缩 UglifyJS，提取公共代码 CommonsChunkPlugin，缓存处理过的模块 cacheDirectory，排除不需要处理的模块 exclude
  * 服务端开启 gzip 压缩： Content-Encoding: gzip
3. 使用缓存
  * cache-control： 缓存静态资源 Cache-Control:public, max-age=31536000，禁用缓存 Cache-Control: no-cache, no-store, must-revalidate
4. 代码优化
  避免使用 CSS 表达式

#### 语言框架 vue.js
