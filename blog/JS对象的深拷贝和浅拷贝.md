---
title: JS对象的深拷贝和浅拷贝
date: 2017-03-15 18:35:42
tags:
- 学习
- 成长
- javascript
- 对象
thumbnail: http://ckj-bucket.oss-cn-beijing.aliyuncs.com/chengkj-blog/deep-copy.png
---

 我们在对数据进行备份的时候，如果这个数据是基本的数据类型，那么很好办，通过赋值实现复制即可。

 如果在使用JavaScript对数组或对象进行操作的时候，我们经常需要将数组或对象进行备份，事实证明如果只是简单的将它赋予其他变量，那么我们只要更改其中的任何一个，然后其他的也会跟着改变，这就导致了问题的发生。

 这个问题就是深拷贝和浅拷贝的问题。

### 浅拷贝

但是当遇到引用数据类型时，就需要三思而复制，操作而三思。
```
let obj1 = {
  a: 1,
  b: 2
}

let obj2 = obj1

obj2.b = 3

console.log(obj1)  // { a: 1, b: 3 }
console.log(obj1 === obj2) //true

```


在这里我只是想obj2复制obj1,当我对obj2进行操作时，obj1的值也发生了变化。
换句话说就是因为如果只是简单的赋值，它只是进行了地址的引用，所以改变一个对象另一个对象也会跟着变。上面这种直接赋值方式的复制称之为**浅拷贝**。

### 深拷贝

我在想如何让obj2复制obj1的对象内容，在我对obj2进行修改时，不影响obj1，下面总结两个方法，可以在不同情况下使用。


#### 1. JSON.parse(JSON.stringify(obj))

利用JSON的方式进行浅层次序列化对象进行深拷贝是一个很好的方法。

```
let obj1 = {
  a: 1,
  b: 2
}

let obj3 = JSON.parse(JSON.stringify(obj1))
obj3.b = 5

console.log(obj1)  //{ a: 1, b: 2 }
console.log(obj1 === obj3)  //false

```

但是JSON的方式有局限性，就是对象必须遵从JSON的格式，当遇到层级较深，且序列化对象不完全符合JSON格式时，使用JSON的方式进行深拷贝就会出现问题。

```
let obj1 = {
  a: '1',
  b: '2',
  c: function func() {}
}

let obj4 = JSON.parse(JSON.stringify(obj1))

console.log(obj4) //{ a: '1', b: '2' } 好像漏了些什么😄
```
#### 2. Object.assign(target, ...sources)

 > Object.assign() 方法用于将所有可枚举的属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。

它接收一个目标对象（target）和 一个或多个源对象（sources）。

我们可以使用它进行对象的复制、合并：
```
// 复制
let c = Object.assign({}, { a: 'apple' });
console.log(c); // { a: 'apple' }

//合并
let o = {}
let c = Object.assign(o, { a: 'apple' }, { b: 'banana' }, { c: 'cake' } )
console.log(c) // { a: 'apple', b: 'banana', c: 'cake' }
```

虽然它可以复制对象，但是 Object.assign() 拷贝的是属性值。假如源对象的属性值是一个指向对象的引用，它也只拷贝那个引用值。
```
let a = { b: {c:4} , d: { e: {f:1}} }
let g = Object.assign({},a)
let h = JSON.parse(JSON.stringify(a));
console.log(g.d) // { e: { f: 1 } }
g.d.e = 32
console.log('g.d.e set to 32.') // g.d.e set to 32.
console.log(g) // { b: { c: 4 }, d: { e: 32 } }
console.log(a) // { b: { c: 4 }, d: { e: 32 } }
console.log(h) // { b: { c: 4 }, d: { e: { f: 1 } } }
h.d.e = 54
console.log('h.d.e set to 54.') // h.d.e set to 54.
console.log(g) // { b: { c: 4 }, d: { e: 32 } }
console.log(a) // { b: { c: 4 }, d: { e: 32 } }
console.log(h) // { b: { c: 4 }, d: { e: 54 } }

```

而且，原始类型会被包装，null 和 undefined 会被忽略。
```
var obj = Object.assign({},  "abc", null, true, undefined, 10, Symbol("foo"));
// 注意，只有字符串的包装对象才可能有自身可枚举属性。
console.log(obj); // { "0": "a", "1": "b", "2": "c" }
```

所以，Object.assign并没有解决我们深度拷贝的需求。


#### 3. 一段深拷贝的代码

其实实现对象的深拷贝，只需要把父对象的属性，全部拷贝给子对象，就可以实现复拷贝。
```
function extendCopy(p) {
　　var c = {};
　　for (var i in p) {
　　　　c[i] = p[i];
　　}
　　return c;
}
```
但是，这样的拷贝有一个问题。那就是，如果父对象的属性等于数组或另一个对象，那么实际上，子对象获得的只是一个内存地址，而不是真正拷贝，因此存在父对象被篡改的可能。

当对象层级较深，且序列化对象不完全符合JSON格式时，这个时候就需要通过递归调用"浅拷贝"来解决。

```
let obj1 = {
  a: '1',
  b: '2',
  c: {
    d: '3'
  },
  d: function aa () {}
}

function deepCopy(obj) {
   if(typeof obj === "object") {
       if(obj.constructor === Array) {
           var newArr = []
           for(var i = 0; i < obj.length; i++) newArr.push(obj[i])
           return newArr
       } else {
           var newObj = {}
           for(var key in obj) {
               newObj[key] = this.deepCopy(obj[key])
           }
           return newObj
       }
   } else {
       return obj
   }
}

console.log(deepCopy(obj1)) //{ a: '1', b: '2', c: { d: '3' }, d: [Function: aa] }
```

继续简化一下...

```
let obj1 = {
  a: '1',
  b: '2',
  c: {
    d: '3'
  },
  d: function aa () {}
}

function deepCopy (obj) {
  let temp = obj.constructor === Array ? [] : {}
  for (let val in obj) {
    temp[val] = typeof obj[val] == 'object' ? deepCopy(obj[val]) : obj[val]
  }
  return temp
}

console.log(deepCopy(obj1)) //{ a: '1', b: '2', c: { d: '3' }, d: [Function: aa] }

```

### 总结

在实际开发中，关于对象复制的问题是经常遇到的。最常见的是对对象的复制，重新定义，扩展等。掌握浅拷贝和深拷贝的区别以及如何进行深拷贝，以及选择哪个方式进行深拷贝，会节省许多debug时间，避免很多不必要的麻烦。
