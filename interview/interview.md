# 张毅

## 知乎

1. 笔试题涉及到排序算法，js 模拟链表并且实现简单的添加，删除，树的深度优先和广度优先
2. this 指向
3. react 中渲染 list 为什么要加 key，不加会怎么样？
4. react native 中 native 和 webview 是怎么交互的，如何定义的监控和发布
5. react 中 shouldComponentUpdate pureComponent 的区别
6. css 的 flex 布局
7. webpack 如何解析 css，比如我们写`import index.css`，webpack 都做了什么
8. 跨域

## 滴滴

9. 有没有写过 npm 包，怎么写一个 npm 包
   雪球
10. 数组方法`map`，`forEach`，`filter`，`find`的区别
11. 使用 js 存 cookie 存的是对象还是 string，前端如何用代码清除 cookie，后端呢
12. localstroage 存入的是对象还是 string，如果让你写代码存，你一般怎么操作
13. js 比较两个对象
14. setState 是同步还是异步，为什么

## 阿里妈妈电面

15. xss 和 srcf 的各种细节，操作
16. 箭头函数 this 指向哪里，如何获取箭头函数的参数 (https://juejin.im/post/5c76972af265da2dc4538b64)
17. redux-thunk 有什么缺点，redux-saga 有什么好处，saga 解决了什么问题
18. react 中渲染 list 为什么要加 key，不加会怎么样？这个方法有什么缺点，你有没有更好的方法
19. react 虚拟 DOM
20. 说一件能证明你前端能力的事儿，你工作中遇到的难题，你是怎么解决的

## 贝壳找房

21. webpack 中 loader 和 plugin 的区别，能否用 loader 实现 plugin 的功能或者反过来

```
loader，它是一个转换器，将A文件进行编译成B文件，比如：将A.less转换为A.css，单纯的文件转换过程。
plugin是一个扩展器，它丰富了webpack本身，针对是loader结束后，webpack打包的整个过程，它并不直接操作文件，而是基于事件机制工作，会监听webpack打包过程中的某些节点，执行广泛的任务
```
22. webpack 打包速度优化
```
1. 减少文件搜索范围
2. 增加压缩代码插件
3. 设置缓存
4. 设置noParse
* https://www.jeffjade.com/2017/08/12/125-webpack-package-optimization-for-speed/
* https://juejin.im/post/6844904071736852487
```
23. js 原型和原型链的区别和联系
24. redux 的 connect，高阶组件，自己手动实现一个 connect
25. 常见的设计模式，自己动手实现一个发布订阅者模式
26. 讲一个印象最深刻的一个项目，从中学到的东西
27. 讲一件能证明你前端能力的事儿
28. 自己封装一个函数，要求这个函数绑定事件到父组件上，然后根据子组件不同的功能实现不同的操作
29. 代码发布流程，比如将代码打包完成后如何上线，上线后如何发布到服务器，如何发不到 cdn
30. react 一般写组件都是 class，是否可以直接写 function，然后 export 出来
31. fetch 和 ajax 的区别
32. http 是否了解，现在常用的 http 版本是多少，最新版本 http 有什么新的特性
33. http 缓存的一些属性

## 头条

    js 模拟二叉树，前端面试中，还是要会一些基本数据结构，我觉得会链表和二叉树基本就差不多了

react 中 setState 是同步的还是异步的，这个问题可以说是 必问，可以参考文章：https://juejin.im/post/5b45c57c51882519790c7441
文章设计 react 源码，感觉如果能答成这样，就很优秀了

## 头条

一面
写代码：

1. 写一个布局的 css（左右布局，右边宽固定 100px，左边自适应）
2. em 的计算，这里的 line-height 中的 em 是以当前元素的 font-size 为准吗
   .div{
   font-size: 1.2em;
   line-height: 1.5em;
   }
3. 在一个数组中找出和为 m 的两个数，拓展一下，一个数组中找出 n 个数，使其和为 m
4. even loop 的原理

## 其他：

1. redux 流程
2. redux 中间件的原理，例如 redux-thunk，为什么它能让 action 发送函数
3. react 中多次 setState 会怎么样？react 是一种什么行为
4. 实现一个类似于百度的输入框，输入后，有提示，需要考虑哪些

# 万里

## 滴滴

1. 说明：高度的三栏布局 变形
2. 未知大小的图片垂直居中
3. new new function()
4. function 的变量提升
5. 正则匹配 match 的东西 string welcome to didi! “?=”是什么意思
6. object 怎么定义常量不改变
7. object.defineproperty 用过吗
8. add(1)(2) //3 add(1,2) https://stackoverflow.com/questions/2272902/how-can-i-make-var-a-add23-5-work
9. cros 的具体实现
10. let const 的块级作用域 和 func 的有啥不一样
11. 状态码的具体含义 301 302 的区别 304 又是什么
12. h5 的一些新特性 为啥不用 iframe 要用 video
13. promise 的状态 还有 then 完之后返回的是什么 还有深层次的挖掘 这个感觉阿里系都在问

## 有赞

### 电话面：

1. 如何跨域
2. 前端路由的实现
3. 对闭包的理解
```
https://juejin.im/post/6844903602268405773
作用：1.外部作用域读取函数内部作用域的变量 2.让这些变量始终保存在内存中
```
4. 盒模型的构成
5. background 覆盖盒模型的哪几个部分
6. 垂直居中布局
7. new 都干了啥
8. 获取对象上的属性

### 正式面：

9. linux 文件目录表示组成员可读可写权限的数字组合是？
10. promise.then()函数的第二个参数传进去的回调和.catch()的区别？
11. setTimeout 的时间是严格准确的吗？为啥不准确
12. reject 的一个 promise 会进入.catch()吗
13. 冒泡排序的时间复杂度？说一下冒泡排序的过程（我特么当时蒙了竟然没说上来，面试一定要冷静）
14. 纸上手写一个函数比较两个参数是否相等。注意参数可能是各种类型，除了字符串、数字等基本类型，还要考虑数组和对象等。并且两个数组值全部相等的也返回 true。比如[1,2] 和 [1,2] ，不是同一个引用，但是值相等，对象也是一样。并且还要考虑如果数组或者对象中的属性值还是数组和对象的情况，比如[{a:2}]和[{a:2}]类似这种。
    这个题很考验边缘条件的判断，缜密
15. 闭包相关问了个执行过程中值的问题，原题没印象了，比较简单，需要注意的一个点就是如果值在整个执行过程中没有声明，那么直接输出值会报错，而不是 undefined(因为没有变量提升)
    比如：console.log(abc);//抛错
16. 什么情况下会启用硬件加速？为什么启用硬件加速会快？
17. 你简历上写的跳出型组件（就是 modal 之类）是怎么实现的？看没看过别的库如何实现的？
18. translate 和 用定位方式改变位置有何不同，有何优点
    大搜车
19. 一行代码实现打乱一个数组
20. 实现一个方法判断一个字符串是否完全包含另一个（不许使用 indexOf slice splice 这些现成的方法，只能用 for 循环）
21. 如果让你写一个 tree 组件你怎么写，不用写代码，把要暴露的接口、方法、回调设计出来
22. 未知参数个数的柯里化实现
23. modal 组件的打开/关闭方法怎么做的，如何调用
24. debouce throttle 手写
25. 简历里提到的复杂表单必填校验 如何校验的
26. 米家预约购买部分的时间倒数逻辑如何判断的，如何和服务器端更新时间的

## 百度

### 电面：

1. 原生 js 中事件监听的几种方式，用直接在标签上添加事件的 dom0 级的方式和 addeventListener 有优先级吗
2. react 中事件监听怎么写（这里需要提及为什么要 bind；如果不用 bind 还可以怎么写（箭头函数）；bind 在哪里添加，答 constructor，顺带提一下为什么不在组件属性那里直接写，因为生成一个新的函数在 diff 的时候会记录一个 props 的改变）
3. css 实现 header/main/sidebar 这种常用布局，给出几种方案
4. 哪些 css 属性是可以继承的
5. 写过哪些 react 组件，拿 modal 举例，你会开放哪些 api。modal 组件的弹出方法是如何暴露的
6. 为什么 modal 组件不能直接渲染到内层，而要放到 body 最外侧
7. react 声明周期
8. 做过的 react 项目里印象深刻的一次性能优化是怎么做的
9. redux 用过吗，怎么用；connect 做了什么，Provider 做了什么
10. react-router 用过吗，怎么用；怎么实现的（就是问前端路由的实现方式）
11. es6 了解过吗，用过哪些；let const var 的区别
12. promise 的 api 用过哪些
13. redux 的中间件用过吗，讲讲中间件怎么实现的
14. webpack 自己配置过吗，都有哪些常用配置
15. 让你自己从头新建一个 react 项目，能大概说一下文件目录吗（就按照 create-react-app 的说了一通。。）
16. git 用过哪些命令
17. 二维数组摊平，如果是多维呢（二维的可以提一下 flatmap）
18. 数组中找出最大值
19. 6 种基本数据结构
20. 判断一个数据是什么类型（typeof instanceof ，如果是自己写的类只能用后者，并且是原型链上的每一个都遍历到）
21. for..in for..of 的区别（一个遍历一个迭代）

## 头条

### 牛客网在线笔试：

22. setImmediate 、nextTick 、promise.then() 这几个的处理先后顺序的题
23. https 交换密钥的过程
24. http 中都有哪些方法；跟 response-body 相关的头部字段有哪些；跟缓存有关的头部字段有哪些
25. 一个块级作用域的题 就是 var 改成 let
26. css 题：header+footer+main 的布局，要求是当 main 部分高度超过视口高度的时候，footer 隐藏；当 main 不够视口高度的时候，footer 定位在视口末尾。
27. 123456.12 => 123,456.12 用正则和非正则两种解法

#### 一面：

28. 摊平数组
29. 完成一个 sleep 函数，完成以下效果：console.log(2);sleep(2000)2;console.log(3);中间可以间隔 2s 后再打印 3。
30. 写一个继承
31. 说一下 diff 算法
32. react 声明周期 性能优化在哪里做
33. 两栏布局
34. position 定位都有哪些值；sticky 是什么
35. vue 用过吗？（没有）双向绑定的原理；如果想绑定数组中的元素怎么绑；如果想绑定数组上的方法怎么绑；

#### 二面：

36. 二叉树给出所有路径中的值 如图 ​​ 再说出时间复杂度
37. webpack 写过 loader 或者 plugin 吗（没写过，但是大致说了一下区别和原理，作用的时机之类）
38. es6 的 import 和 commonjs 的 require 的区别
39. 用数组的 reduce 方法实现数组的 map 方法
40. 知不知道 webview 和 native 怎么通信的（jsbridge 这块通通没看，所以没答上来）
41. reflow repaint 的区别，从浏览器渲染的过程开始一通 bb
42. BFC IFC 区别 如何形成
43. 获取 top 值是否会引起重绘

## 支付宝

### 电话面试：

44. 上来就问 React 声明周期 diff 算法 性能优化
45. 然后基础题：刷新页面的方式； js、css 的兼容性解决，有没有遇到过的案例；垃圾回收的方式，引起内存泄漏的原因
46. 各种加密，对称非对称，然后问到 https 的整个过程，为什么不直接全程都非对称加密。说到 https 优化的时候，问说那 sessionid 这个在服务器端分布式集群上同步问题，有什么解决方案吗
47. 前端安全的问题，各种攻击，延伸到运营商劫持
48. 首屏优化

### 二面：

49. 网络相关：TCP 三次握手和断开连接的过程；UDP 一般应用场景是什么；HTTPS 完整过程；
50. http2.0 都做了哪些优化
51. 你刚才说浏览器和服务器之间只能并发 6 个左右的 TCP 请求，我们如何突破（域名分区）；可以滥用分区吗？（不能，因为会多出 DNS 解析查询的开销）
52. DNS 解析过程说一下（可以顺带说一下 cdn 配置时候 dns 的 cname）
53. react 集合：diff 过程，react-router 源码说说你了解的，redux 的 applymiddleware 源码看过吗咋写的；性能优化；
54. webpack 集合：写过插件/loader 吗，知道作用原理吗；顺带说下持久缓存
55. 深拷贝
56. 块级作用域的题（var ->let
57. 字符串模板替换 （正则
58. 解析 url 中的 query 部分（正则

# 康健

### 头条

#### 简答题：

59. 什么是函数节流，为什么要使用函数节流，如何实现？
60. 描述一下 JS 的 new 操作符具体做了什么？
61. 说明一下 cookie，sessionStorage，localStorage 的区别，以及在项目中的应用。

#### 编程题：

1. JS 编码实现模版引擎变量替换。
   cosnt year = '2017';
   const month = '09';
   const day='21';
   const str = `${year}-${month}-${day}`;
   console.log(str) 输出：2017-09-21
2. 求二叉树是否存在和值为 N 的路径。从二叉树的根，到叶子节点称为一条路径，路径上的每个节点的 value 之和为路径和值，本题要求所有的路径中是否存在一条和值为 N 的？
3. 封装一个 JS 的 HTTP 请求库。

## 百度

1. 类和函数的区别？
2. 使用 Promise 封装 ajax 请求 ？
3. 二叉树镜像复制？
4. 实现对象深克隆。

## 滴滴

5. 二分法查找一个值。

#### 简答：

```js
123 instantof Number //false
new Number(123) instantof Number // true
Number(123) instantof Number // false
```

7. 打印顺序：

```js
setTimeout(() => {
  console.log(100);
}, 0);
console.log(200);
Promise.resolve().then(() => {
  console.log(300);
});
// 200,300,100
```

# 海欣

## 瓜子二手车

1. this 指向
2. 改变作用域 call apply bind
3. vue 生命周期
4. react 纯函数组件
   知乎
5. async await 原理
6. 原型继承
7. http code
8. https 过程
9. 冒泡排序

## 头条

10. 函数节流
11. new 过程
12. js 实现 render 模版引擎
13. 二叉树是否存在和值为 N 的路径
14. 封装一个 ajax 请求

```js
(function test() {
  setTimeout(function() {
    console.log(4);
  }, 0);
  new Promise(function executor(resolve) {
    console.log(1);
    for (var i = 0; i < 10000; i++) {
      i == 9999 && resolve();
    }
    console.log(2);
  }).then(function() {
    console.log(5);
  });
  console.log(3);
})();
输出顺序;
```

## 去哪网

1. 头部底部固定，中间视图区高度弹性的布局
2. promise
3. for (var i = 0; i < 5; i++) {
   await fn(i)
   }
   i 使用的是哪个值
4. var urls = [url1, url2, url3]
   实现按顺序发送请求
5. 套餐组合：有一组数，找出值等于或小于 N 的的组合，个数不限


## 小红书

1. 装饰器模式的实现原理
https://github.com/zz1211/Doraemon/issues/1
