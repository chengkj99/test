# Interview

面试前需要准备的内容

## CSS

#### 布局

* 水平垂直居中 ok
* 三栏式布局 ok
* flex ok
* CSS3 animation 和 transition 区别 ok

#### 定位

* flex 定位 ok
* position 定位 ok
* float 定位 ok
* float 和 position 的相互影响
* 单位：px、em/rem、%、vw/vh、vmax/vmin
* z-index 优缺点
* ...


## JS

#### 编程题

* 实现一个对象的深Copy ok
```
  function deepClone(obj) {
    let temp = obj.constructor === Array ? [] : {}
    for (let key in obj) {
      temp[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key]
    }
    return temp
  }
```
* 二叉树的前序遍历, 中序遍历, 后序遍历, 层序遍历 ok

```
<!-- 前序 -->
  function preorderTraversal(root) {
    if (!root) {
      return []
    }
    let result = []
    result.push(root.val)
    result.concat(preorderTraversal(root.left))
    result.concat(preorderTraversal(root.right))
    return result
  }
<!-- 中序 -->
  function inorderTraversal(root) {
    if (!root) {
      return []
    }
    let result = []
    result.concat(inorderTraversal(root.left))
    result.push(root.val)
    result.concat(inorderTraversal(root.right))
    return result
  }

<!-- 后序 -->
  function postorderTraversal(root) {
    if (!root) {
      return []
    }
    let result = []
    result.concat(postorderTraversal(root.left))
    result.concat(postorderTraversal(root.right))
    result.push(root.val)
    return result
  }
<!-- 层序 -->
<!-- 利用队列的方式 -->
  function levelOrder(root) {
    if (!root) return []
    let queue = [root]
    let result = []
    while (queue.length > 0) {
      let newQueue = []
      queue.forEach(node => {
        result.push(node.val)
        node.left && newQueue.push(node.left)
        node.right && newQueue.push(node.right)
      })
      queue = newQueue
    }
    return result
  }
```

* 二叉树的镜像复制


* 二分查找一个值
```
<!--
  预处理（排序），二分查找，后续处理
  初始条件: left = 0, right = nums.length - 1
  终止条件: left > right
  向左查找: right = mid - 1
  向右查找: left = mid + 1
 -->
function binarySearch(arr, target) {
  if (!arr || arr.length === 0) {
    return -1
  }
  let left = 0
  let right = arr.length - 1
  while (left <= right) {
    let mid = Math.ceil((left + right) / 2)
    if (target < arr[mid]) {
      right = mid - 1
    } else if (target > arr[mid]) {
      left = mid + 1
    } else {
      return mid
    }
  }
  return -1
}

```
* 反向字符串的实现
```
<!-- 考查的是字符串 replace 的用法 -->
function render(str) {
  <!-- match 是匹配到的子串：${} -->
  <!-- key 是匹配到的（）里的字符串 -->
  const ns = str.replace(/\$\{(.*?)\}/g, (match, key) => {
    return this[key]
  })
  return ns
}

直接使用：

const name = 'chengkangjian'
const age = 25
let str = '我是 ${name}, 年龄 ${age}'
render(str)

也可以：
let o = {
  name: 'kangjian',
  age: 22
}
render.call(o, s)
```
* 数组去重有哪些方式，理解各种方式的区别
```
let arr = [1,2,3,4,5,6,7,1,2,3, '1']

<!-- 方法1: -->
Array.from(new Set(arr))
[...new Set(arr)]

<!-- 方法2: -->
arr.filter((el, i, arr) => i === arr.indexOf(el))

<!-- 方法3: -->
function distinct(arr) {
  let hash = {}
  let newArr = []
  for(let val of arr) {
    if (hash[val] === val) {
      continue
    }
    hash[val] = val
    newArr.push(val)
  }
  return newArr
}

<!-- 方法4: -->
function distinct(arr) {
  let newArr = []
  for(let val of arr) {
    if (newArr.indexOf(val) === -1) {
      newArr.push(val)
    }
  }
  return newArr
}
```
* Promsie.all 的实现
```
function promiseAll2(promises) {
  return new Promise(function(resolve, reject) {
    if (promises.constructor !== Array) return reject(new Error('Arguments must be an Array'))
    if (promises.length === 0) return resolve([])

    let result = []
    let count = 0
    let nums = promises.length

    for (let i = 0; i < nums; i++) {
      (function(i){
        Promise.resolve(promises[i]).then(
          res => {
            count++
            result[i] = res
            if (count === nums) return resolve(result)
          },
          err => reject(err)
        )
      })(i)
    }
  })
}

* promise 的实现

```
* JS 并发控制
* 遍历对象的所有的keys，有哪些方式，每种方式的优缺点
```

for in:  主要用于遍历对象的可枚举属性，包括自有属性、继承自原型的属性

Object.keys: 返回一个数组，元素均为对象自有的可枚举属性

Object.getOwnPropertyNames: 用于返回对象的自有属性，包括可枚举和不可枚举的
```
* 发布订阅模式的实现

```
const event= {
  clientList: {},
  publisher: function() {
    let key = Array.prototype.shift.call(arguments)
    let fns = this.clientList[key]
    if (!fns || fns.length ===0) return false
    for (let i = 0, fn; fn = fns[i++];) {
      fn.apply(this, arguments)
    }
  },
  listener: function(key, fn) {
    if (!this.clientList[key]) {
      this.clientList[key] = []
    }
    this.clientList[key].push(fn)
  },
  remove: function(key, fn) {
    let fns = this.clientList[key]
    if (!fns || fns.length === 0) {
      return false
    }
    for (let i = 0, _fn; _fn = fns[i++];) {
      if (fn === _fn) {
        fns.splice(i, 1)
        return
      }
    }
  }
}

```
* 实现一个bind

```
<!-- 使用 apply 或者 call 实现一个 bind -->

Function.prototype.bind = context => {
  let self = this
  return function() {
    return self.apply(context, arguments)
  }
}

```

* 封装 ajax 请求
```
function fetch(method, url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = () => resolve(xhr.responseText);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });
};


```
* class 的实现原理

* 事件委托
```
document.getElementById('wrapper').addEventListener('click', function(e) {
  if (e.target.nodeName.toLocalLowerCase === 'li') {
    console.log('target.innerHtml', target.innerHTML)
  }
})
```
* ...

#### JS 基础

* this 相关
* 闭包相关
* defineProperty
* new 一个对象的过程
* 实现 JS 继承，有哪些继承方式
* 设计模式
* 路由原理
* 构造函数的this
* ...

#### HTTP 相关

> header 头里的内容详细了解，会引申出很多内容

* 缓存控制的字段, cache-control： max-age, no-cache, no-store, public
* 安全相关的字段, refer 代表请求源
* 各种状态码的含义, 200 404 304 500 502 504
* Content-Type
* Content-Encoding
* 缓存: 通过 e-tag 或者 last-modify 来判断
```
  e-tag 是请求内容的标识，e-tag 改变，说明内容改变。它能够解决 last-Modify 缓存的问题，如 1. 短时间多次更新；2. 仅仅是修改时间内容并没有更新等问题；
```
* ...

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

#### 语言框架 vue.js & react.js

* vue.js 原理
* webpack 懒加载
* 单页应用和多页应用
* 服务端渲染
* 路由原理
* webpack 单页应用和多页应用
* 服务端渲染
* 单页应用的问题：首屏加载慢。如何解决？多页应用 或 服务端渲染
* ...
