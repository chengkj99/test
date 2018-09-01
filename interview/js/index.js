
// // this 相关

// (function(){
//   var a = 100
//   function f1() {
//     var a = 200
//     return function () {
//       console.log('f1', a)
//     }
//   }
//   var fn = f1()
//   fn() // 200
//   // 因为这是闭包，当 return function 时，内部的变量会一直引用 f1 内的 a ，直到内部的函数执行结束。
// })()

// (function() {
//   var a = 100
//   function f2(fn) {
//     var a = 200
//     fn()
//   }
//   function fn() {
//     console.log('f2', a)
//   }
//   f2(fn) // 100
//   // 不是闭包
// })()


// // instantceof 相关
// (function(){
//   console.log(123 instanceof Number) // false
//   console.log(new Number(123) instanceof Number) // true
//   console.log(Number(123) instanceof Number) // false
// })()


// 深 copy

// function deepClone(obj) {
//   let temp = obj.constructor === Array ? [] : {}
//   for (let key in obj) {
//     if (!obj.hasOwnProperty(key)) continue
//     temp[key] = typeof obj[key] == 'object' ? deepClone(obj[key]) : obj[key]
//   }
//   return temp
// }


// 数组去重
// Set, hash, indexOf

// let arr = [1,2,3,4,5,6,7,1,2,3, '1']
// // console.log('去重：', Array.from(new Set(arr)))
// // console.log('去重：', [...new Set(arr)])
// function distinct(arr) {
//   let hash = {}
//   let newArr = []
//   for(let val of arr) {
//     if (hash[val] === val) {
//       continue
//     }
//     hash[val] = val
//     newArr.push(val)
//   }
//   return newArr
// }

// function distinct(arr) {
//   let newArr = []
//   for(let val of arr) {
//     if (newArr.indexOf(val) === -1) {
//       newArr.push(val)
//     }
//   }
//   return newArr
// }

// console.log(distinct(arr))


// 二叉树遍历

// let root = {
//   val: 0,
//   left: {
//     val: 1
//   },
//   right: {
//     val: 2
//   }
// }

// function preorderTraversal(root) {
//   if (!root) {
//     return []
//   }
//   let result = []
//   result.push(root.val)
//   result.concat(preOrderTraversal(root.left))
//   result.concat(preOrderTraversal(root.right))
//   return result
// }
// function inorderTraversal(root) {
//   if (!root) {
//     return []
//   }
//   let result = []
//   result.concat(preOrderTraversal(root.left))
//   result.push(root.val)
//   result.concat(preOrderTraversal(root.right))
//   return result
// }
// function postorderTraversal(root) {
//   if (!root) {
//     return []
//   }
//   let result = []
//   result.concat(preOrderTraversal(root.left))
//   result.concat(preOrderTraversal(root.right))
//   result.push(root.val)
//   return result
// }
// function levelOrder(root) {
//   if (!root) {
//       return []
//   }

//   let result  = []
//   let queue = [root]
//   while (queue.length > 0) {
//       let newQueue = []
//       let nodeArr = []
//       queue.forEach(node => {
//         nodeArr.push(node.val)
//         node.left && newQueue.push(node.left)
//         node.right && newQueue.push(node.right)
//       })
//       result.push(nodeArr)
//       queue = newQueue
//   }
//   return result
// }

// // 实现一个bind

// Function.prototype.bind = context => {
//   let self = this
//   return function() {
//     return self.apply(context, arguments)
//   }
// }

// // 函数节流

// function throttle(method, context) {
//   clearTimeout(method.id)
//   method.id = setTimeout(() => {
//     method.call(context)
//   }, 1000)
// }


// // 冒泡排序

function bubble(arr) {
  if (!arr || arr.length <= 2) { return arr }
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j+1]) {
        let temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
      }
    }
  }
  return arr
}
// console.log(bubble([1,2,3,4,5,4,2,2,432,5,7,88,8,9,4534,33]))


// 判断是否为原型的属性
// !p.hasOwnProperty('age') && 'age' in p

// 判断是否为实例的属性
// hasOwnProperty
function Person() {}
Person.prototype.say = function() {
  console.log('hello world')
}
Person.prototype.age = 18

let p = new Person()
p.say()
// p.age = 20
console.log(p.hasOwnProperty('age'), 'age' in p) // false, true
