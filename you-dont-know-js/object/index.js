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


const randoms = {
  [Symbol.iterator]() {
    return {
      next() {
        return { value: Math.random() }
      }
    }
  }
}


var randomPools = []
for (var val of randoms) {
  console.log(val)
  randomPools.push(val)
  if (randomPools.length == 100) break
}
