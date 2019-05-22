// const o = {
//   get a() {
//     return this._a
//   },
//   set a(val) {
//     this._a = val * 2
//   }
// }
// o.a = 10
// console.log(o.a)
// console.log(o.b)

// 判断一个对象的属性是否存在

// in 将会判断某个对象原型链上的属性值是否存在

// myObject.hasOwnProperty() 只会检查 myObject 对象上的属性，不会检查原型链上的对象

// const o1 = {
//   a: 'a'
// }

// console.log('a' in o1)
// console.log(o1.hasOwnProperty('b'))

// 可枚举性

// const o = {}

// Object.defineProperty(o, 'a', {
//   enumerable: true,
//   value: '10'
// })
// Object.defineProperty(o, 'b', {
//   enumerable: false,
//   value: '20'
// })

// console.log(o) // { a: '10' }

// console.log(Object.keys(o)) // 只会打印出对象的可枚举的属性

// console.log(Object.getOwnPropertyNames(o)) // 会打印出对象的全部属性

// o.propertyIsEnumerable('a')  // true 通过 propertyIsEnumerable 获取属性的可枚举性

// 遍历

// for in 遍历 key
// for of 遍历 value

// symbol.iterator

// var arr = [1,2,3,4,5]
// it = arr[Symbol.iterator]()
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())

// const randoms = {
//   [Symbol.iterator]() {
//     return {
//       next() {
//         return { value: Math.random() }
//       }
//     }
//   }
// }

// var randomPools = []
// for (var val of randoms) {
//   console.log(val)
//   randomPools.push(val)
//   if (randomPools.length == 100) break
// }

// for in 可以遍历出所有可枚举性的属性

var arr = [1, 2, 3];

Object.defineProperty(arr, "c", {
  enumerable: true,
  value: "ckj"
});
console.log(arr); // [ 1, 2, 3, c: 'ckj' ]
for (let i in arr) {
  console.log(i); // 0 1 2 c
}

console.log(arr.propertyIsEnumerable("c"));

// 存在性 in、hasOwnProperty
// in 操作符会检查属性是否在对象及其 [[Prototype]] 原型链中
// hasOwnProperty(..) 只会检查属性是否在 myObject 对象中，不会检查 [[Prototype]] 链
// var myObject = { a: 2 };
// "a" in myObject; // true
// "b" in myObject; // false
// myObject.hasOwnProperty("a"); // true
// myObject.hasOwnProperty("b"); // false

// 枚举
// defineProperty 定义属性是否可枚举
// 在数组上应用 for..in 循环有时会产生出人意料的结果，因为这种枚举不 仅会包含所有数值索引，还会包含所有可枚举属性。最好只在对象上应用 for..in 循环，如果要遍历数组就使用传统的 for 循环来遍历数值索引
// propertyIsEnumerable(..) 会检查给定的属性名是否直接存在于对象中(而不是在原型链 上)并且满足 enumerable:true。
// Object.keys(..) 会返回一个数组，包含所有可枚举属性，都只会查找对象直接包含的属性，不会检查 [[Prototype]] 链。
// Object.getOwnPropertyNames(..) 会返回一个数组，包含所有属性，无论它们是否可枚举，都只会查找对象直接包含的属性，不会检查 [[Prototype]] 链。


// 遍历
// for..in 循环可以用来遍历对象的可枚举属性列表(包括 [[Prototype]] 链)，使用 for..in 遍历对象是无法直接获取属性值的，因为它实际上遍历的是对象中的所有可 枚举属性，你需要手动获取属性值。
// for 循环: for(let i = 0; i < m; i++) { ... }，这实际上并不是在遍历值，而是遍历下标来指向值，如 myArray[i]。
// forEach(..)、every(..)、some(..)，每种辅 助迭代器都可以接受一个回调函数并把它应用到数组的每个元素，唯一的区别就是它们 对于回调函数返回值的处理方式不同。

// for..of: for..of 循环首先会向被访问对象请求一个迭代器对象，然后通过调用迭代器对象的 next() 方法来遍历所有返回值。
// Symbol.iterator 可以为对象定义迭代器
// 注意：遍历数组下标时采用的是数字顺序(for 循环或者其他迭代器)，但是遍历对象属性时的顺序是不确定的，在不同的 JavaScript 引擎中可能不一样。因此， 在不同的环境中需要保证一致性时，一定不要相信任何观察到的顺序，它们是不可靠的。
//
