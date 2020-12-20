// 1 实现 sum 函数使得以下表达式的值正确
// sum(1, 2, 3).sumOf(); //6
// sum(2, 3)(2).sumOf(); //7
// sum(1)(2)(3)(4).sumOf(); //10
// sum(2)(4, 1)(2).sumOf(); //9

// 函数里有一个 sumOf 方法 用于计算
// 函数里有一个将前面所有的数值进行存储的功能
// 存储数据值 + 计算

function sum(...args1) {
  let values = args1
  const _sum = (...args2) => {
    values = [...values, ...args2]
    return _sum
  }
  _sum.sumOf = () => {
    return values.reduce((pre, cur) => (pre + cur), 0)
  }
  return _sum
}

console.log(sum(1)(2)(3)(4).sumOf()); //10
console.log(sum(2)(4, 1)(2).sumOf()); //9

console.log('----------------------------')

// 2 给定一个节点，求此节点的子节点最大深度

function maxDepth(tree) {
  if (!tree) {
    return 0
  }
  let left = maxDepth(tree.left) + 1
  let right = maxDepth(tree.right) + 1
  return left > right ? left : right
}

console.log('----------------------------')

// 3 箭头函数
var func1 = x => x
var func2 = x => {
  x
}
var func3 = x => ({
  x
})
console.log(func1(1)) // 1
console.log(func2(1)) // undefined
console.log(func3(1)) // { x: 1 }

console.log('----------------------------')

// 4 JS 传参形式

const obj1 = {
  key: 'value1'
}
const obj2 = {
  key: 'value2'
}

function foo(obj1) {
  obj1.key = 'value11'
  return obj1
}

function bar(obj2) {
  obj2 = {
    key: 'value22'
  }
  return obj2
}
console.log(foo(obj1), bar(obj2))
console.log(obj1, obj2)

//{ key: 'value11' } { key: 'value22' }
//{ key: 'value11' } { key: 'value2' }

console.log('----------------------------')

// 5 实现一个函数，每次调用返回下一个质数，要求不使用全局变量，且函数本身不接受任何参数
// getPrime() // 2
// getPrime() // 3

function isPrimeNumber(n) {
  if (n === 1) {
    return false
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false
  }
  return true
}

function getPrimeFunc() {
  let n = 1
  return () => {
    while (n++) {
      if (isPrimeNumber(n)) return n
    }
  }
}
const getPrime = getPrimeFunc()
console.log(getPrime()) // 2
console.log(getPrime()) // 3
console.log(getPrime()) // 5
console.log(getPrime()) // 7

console.log('----------------------------')

// Generator 实现

function* getPrimeFunc2() {
  let n = 1
  while (n++) {
    if (isPrimeNumber(n)) yield n;
  }
}
const getPrime2 = getPrimeFunc2()
console.log(getPrime2.next().value);
console.log(getPrime2.next().value);
console.log(getPrime2.next().value);
console.log(getPrime2.next().value);

console.log('----------------------------')

// 6 闭包基本题目

// function func() {
//   let i = 0
//   return () => {
//     i++
//     return i
//   }
// }
// const foo1 = func()
// const foo2 = func()
// console.log(foo1()) // 1
// console.log(foo2()) // 1
// console.log(foo1()) // 2
// console.log(foo2()) // 2

console.log('----------------------------')

// 7 使用 reduce 方法实现 map 方法的 polyfill

// Array.prototype.mymap = function (f) {
//   return this.reduce((pre, cur, index) => {
//     return [...pre, f(cur, index)]
//   }, [])
// }

// let a = [1, 2, 3]
// console.log(a.mymap(item => item * 10))

console.log('------------------------------')

// 8 异步循环队列

// const first = () => new Promise((resovle, reject) => {

//   console.log(1)
//   const p = new Promise((resovle, reject) => {

//     console.log(2)

//     setTimeout(() => {
//       console.log(3)
//       resovle(4)
//     }, 0)
//     resovle(5)
//   })

//   resovle(6)

//   p.then(arg => {
//     console.log(arg)
//   })
// })

// first().then(arg => {
//   console.log(arg)
// })
// console.log(7)

// 1, 2, 7, 5, 6, 3

console.log('------------------------------')

// 9 闭包基本题目

// function func() {
//   var i = 0
//   return () => {
//     i++
//     return i
//   }
// }
// const f1 = func()
// const f2 = func()
// console.log(f1()) // 1
// console.log(f2()) // 1
// console.log(f1()) // 2
// console.log(f2()) // 2


// 10 循环引用

// module.exports.a = 1
// var b = require('./b')
// console.log(b)
// module.exports.a = 2

// // b.js
// module.exports.b = 11
// var a = require('./a')
// console.log(a)
// module.exports.b = 22

// //main.js
// var a = require('./a')
// console.log(a)

// 11 给定有序数组array和数字 n，找出 n 在 array 中起始位置的下标和终止位置的下标

// 如 array = [1, 1, 2, 2, 3], n = 2; 返回[2, 3]
// search(array: number[], n: number): [number, number]
// 基本的二分查找，有其他类似查找题目，如：给定一个ip，查找此ip所在的城市，思路整体类似，将ip转换为I 32 位的整型数，将起始地址，按照对应的整型值的大小关系，从小到大进行排序。


// function search(array, n) {
//   if (!Array.isArray(array) || typeof n !== 'number') {
//     return [-1, -1]
//   }
//   return [binarySearch(array, 0, array.length - 1, n, -1), binarySearch(array, 0, array.length - 1, n, 1)]
// }
// function binarySearch(array, leftIndex, rightIndex, n, direction) {
//   if (leftIndex > rightIndex) {
//     return -1
//   }

//   const middleIndex = Math.floor((leftIndex + rightIndex) / 2)

//   const left = array[leftIndex]
//   const right = array[rightIndex]
//   const middle = array[middleIndex]

//   if (middle > n) {
//     return binarySearch(array, leftIndex, middleIndex - 1, n, direction)
//   }
//   if (middle < n) {
//     return binarySearch(array, middleIndex + 1, rightIndex, n, direction)
//   }
//   // 向后查找，需要判断下一个值是否跟当前值相等，用别的语言需要判断数组是否越界
//   if (direction > 0 && middle === array[middleIndex + 1]) {
//     return binarySearch(array, middleIndex + 1, rightIndex, n, direction)
//   }
//   // 向前查找，需要判断上一个值是否跟当前值相等，用别的语言需要判断数组是否越界
//   if (direction < 0 && middle === array[middleIndex - 1]) {
//     return binarySearch(array, leftIndex, middleIndex - 1, n, direction)
//   }
//   return middleIndex
// }


// this, 变量提升

var a = 'dd'
var o = {
  a: 1,
  aa: () => {
    console.log('a:', this)

  },
  bb: function() {
    console.log('b:', this)
  }
}

o.aa()
o.bb()


// ---------------------------------------------
var a = {
  k1: 1
}

var b = a
a.k3 = a = {k2: 2}
