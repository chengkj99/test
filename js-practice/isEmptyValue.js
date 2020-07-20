// 在前后端分离，后端微服务架构的开发模式中，接口的类型不一致问题如何在前端统一成微了一个问题，restfulAPI虽然能一定

// 平时在开发过程中总是会遇到数据为空的情况，如何对不同的类型进行判断和检测在这里总结

// 数据为空的类型有：''/' '、[]、{}、null、undefined

// 其中'' 、 ' ' 、null 、 undefined 比较容易判断


// 前端在开发过程中， 经常会遇到后端传过来的数据为空的情况， 如果我知道特定的类型还比较容易判断， 但是有时候类型是不确定的，
// 比如数组类型， 在数组为空的时候， 不知道返回的是 `[]`
// 还是 `null`，
// 这个时候如果贸然的使用 `Array.length()`
// 进行判断可能就会出现问题。
// 于是写了一段代码， 将特定的数据或类型进行统一判断是不是空。

// 在这里我将如下的数据值定义为空值， 对于其他值定义为非空值。'

``
`
- []
- {}
- ''
- ' '
- null
- undefined

`
``

// 由于在JavaScript中的所有事物都是对象, 所以可以先进行对象类型判断， 然后再根据不同的数据类型进行判断，

// 下面是这段代码：

function isEmptyVal(val) {
  let type;
  let isEmptyObj = function (obj) {
    for (name in val) {
      return false;
    }
    return true
  }
  type = Object.prototype.toString.call(val).slice(8, -1)
  switch (type) {
    case 'Array':
      return !val.length
    case 'String':
      return !val.trim()
    case 'Object':
      return isEmptyObj(val)
    case 'Null':
      return true
    case 'Undefined':
      return true
    default:
      return false
  }
}

let isEmptyVal1 = isEmptyVal('')
let isEmptyVal2 = isEmptyVal({})
let isEmptyVal3 = isEmptyVal([])
let isEmptyVal4 = isEmptyVal(null)
let isEmptyVal5 = isEmptyVal(undefined)
let isEmptyVal6 = isEmptyVal(' ')


console.log(isEmptyVal1); //true
console.log(isEmptyVal2); //true
console.log(isEmptyVal3); //true
console.log(isEmptyVal4); //true
console.log(isEmptyVal5); //true
console.log(isEmptyVal6); //true
