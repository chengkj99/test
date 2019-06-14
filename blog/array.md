---
title: javascript高级编程-Array引用类型用法总结
date: 2016-09-17 00:56:47
tags:
- javascript
- 数组
thumbnail: http://ckj-bucket.oss-cn-beijing.aliyuncs.com/chengkj-blog/javascript.png
---
# 引用类型-Array类型

引用类型是一种数据结构，用于将数据和功能联系起来。

创建对象的方式：

1.new操作符

    var array = new Array()

2.字面量表示法创建

    var array = []

## Array


1.检测数组:检测数组是基本类型还是引用类型

2.转换方法:将数组转换成字符串或数组对象

3.栈方法:后进先出的操作数组的方法

4.队列方法:先进先出的操作数组的方法

5.操作方法:数组的拼接、截取、插入、删除、替换

6.位置方法:查找数组项、返回索引值

7.迭代方法:对每个数组项进行操作的方法

8.缩小方法:操作数组的每一项，构建最终的返回值


### 1 检测数组

> 检测数组的方法；instanceof操作符的问题是当开发环境引入多个框架存在多个全局环境的时候，会出现不同的Array构造函数，进而出现不同的结果。
Array.isArray()这个方法很好的解决了这个问题。

- arrName instanceof Array

```
var array = [1,2,3]
console.log(array instanceof Array)  // true

```

- Array.isArray(arrName)

```
console.log(Array.isArray(array)) // true
```

### 2 转换方法

- toString()：返回以逗号分隔拼接而成的字符串
- valueOf()：返回对象
- toLocaleString()：区别很小，如果是数组调用这个方法，那么数组的每一项都会调用这个方法
- alert(value) == alert(value.toString())

```
var array = [1,2,3]

var arrayToString = array.toString()
var arrayValueOf = array.valueOf()
var arrayToLocalString = array.toLocaleString()

console.log(arrayToString)  // 1,2,3
console.log(arrayValueOf)  // [1, 2, 3]
console.log(arrayToLocalString)  // 1,2,3
```

### 3 栈方法 (LIFO:last in first out)

> ES数组类似于数据结构的方法
> 栈是一种限制插入和删除项的数据结构

- push()：接收任意数量的参数添加至数组尾部，**返回数组长度值**
- pop():从数组末尾移除最后一项，减少数组的length值，**返回该数组被删除的最后一项**

### 4 队列方法 (FIFO:first in first out)

> 结合push()和shift()方法可以实现像队列一样使用数组
> 使用unshift()和pop()可以从相反的方向模拟队列

- shift()移除并返回该数组的第一项；
- unshift()从数组前端添加任意个参数，并返回新数组的长度

### 5 操作方法

- concat()复制原数组连接新数组形成新副本；

```
var arr1 = ['q','w','e']
var arr2 = ['h','u','o']
document.write(arr1.concat(arr2)) //q,w,e,h,u,o
```
- slice() 有一个参数时，复制参数为起始位置到末尾的副本；有两个参数时，复制两个数字中间部分的数组项；如果参数是负数，复制用数组的长度加上负数值得到的两个参数之间的数组项；

```
var arr3 = ['h','e','l','l','o']
console.log(arr3.slice(1)) // e,l,l,o
console.log(arr3.slice(-4)) // e,l,l,o
arr3.slice(-4) === arr3.slice(1) // true
```

- splice() 三个参数:分别对应起始位置，删除项的个数，替换项;通过对这三个参数的合理运用可以实现删除、插入、替换等操作。

```
// 从第一项开始删除两项
var splice_arr1 = ['h','e','l','l','o']
console.log(splice_arr1.splice(1,2)) // 返回的是被删除的项组成的数组["e", "l"]

// 从第二项后插入三项old
var splice_arr2 = ['h','e','l','l','o']
var removed = splice_arr2.splice(2,0,"K","K")
console.log(splice_arr2)//["h", "e", "K", "K", "l", "l", "o"]
console.log(removed) // 返回的是一个空数组

// 替换
var removed = splice_arr3.splice(2,2,"P","P")
console.log(splice_arr3)//["h", "e", "P", "P", "o"]
console.log(removed) // 返回的是被替换的值["l", "l"]
```

### 6 位置方法
> 返回索引值

- indexOf()  从前往后找
- lastIndexOf()  从后往前找

```
// indexOf()  从前往后找
// lastIndexOf()  从后往前找
var index_arr = ['h','e','l','l','o']
var indexOf_arr = index_arr.indexOf('l')
console.log('原数组:',index_arr) // 原数组不变
console.log('返回值:',indexOf_arr) // 返回值是第一个查到位置的索引值2

var index_arr2 = ['h','e','l','l','o']
var indexOf_arr2 = index_arr2.lastIndexOf('l')
console.log('原数组:',index_arr2) // 原数组不变
console.log('返回值:',indexOf_arr2) // 返回值是第一个查到位置的索引值3
```

### 7 迭代方法
> 	接收两个参数，一个是函数，另一个是运行该函数的作用域对象。
> 	第一个参数函数接收三个参数 数组项的值 item，值的位置 idnex ，数组本身 array

- every() // 都是返回true则返回true

```
var numbers = [1,2,3,4,5,6,7,8,9,0,9,8,7,65,5,4,33,21,1,1,23,3,4]
var everyArr = numbers.every(function(it, index ,arr){
  if(it>9){
    return true
  }
})
console.log(everyArr) // false

```

- some() // 有一个返回true，则返回true

```
var someArr = numbers.some(function(it, index ,arr){
    return (it > 9)
})
console.log(someArr) // true
```

- forEach() // 没有返回值

```

var numbers  = [1,2,3,4,5,6,7,8,9,0,9,8,7,65,5,4,33,21,1,1,23,3,4]
var forEachArr = numbers.forEach(function(it, index ,arr){
  var it = it*100
  console.log(it)
})  // 无返回值

```

- filter() // 返回该函数会返回true的项组成的数组，用于过滤

```
var numbers = [1,2,3,4,5,6,7,8,9,0,9,8,7,65,5,4,33,21,1,1,23,3,4]
var filterArr = numbers.filter(function(it, index ,arr){
  if(it>10){
    return it
  }
})
console.log(filterArr) // [65, 33, 21, 23],返回返回值组成的新数组
```
- map()//返回每个函数的返回值

```
var numbers = [1,2,3,4,5,6,7,8,9,0,9,8,7,65,5,4,33,21,1,1,23,3,4]
var mapArray = numbers.map(function(it, index ,arr){
  var it = it*100
  return it
})
console.log(mapArray)
 // [100, 200, 300, 400, 500, 600, 700, 800, 900, 0, 900, 800, 700, 6500, 500, 400, 3300, 2100, 100, 100, 2300, 300, 400]
,返回返回值组成的新数组
```

### 8 缩小方法

- reduce()

```
var numbers = [1,2,3,4,5,6,7,8,9,0,9,8,7,65,5,4,33,21,1,1,23,3,4]
var allArray = numbers.reduce(function(prev,cur,index,arr){
	return (prev+cur)
})
console.log(allArray) // 229
```

- reduceRight()

```
var numbers = [1,2,3,4,5,6,7,8,9,0,9,8,7,65,5,4,33,21,1,1,23,3,4]
var allArrayRight = numbers.reduceRight(function(prev,cur,index,arr){
  return (prev+cur)
})
console.log(allArrayRight) // 229

```


> 总结：经过这次总结和练习，觉得自己在以后再次遇到操作数组应该不会再感到害怕了；
> 自己的工作中用的最多的是split()这个字符串截取的操作方法，这个方法虽然是字符串的方法但是很好用。
> 这种总结方式，效果挺好，就是效率稍微低一点，这点咋解决啊，是个问题。。。
