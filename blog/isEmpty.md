# 一段代码-检测JS对象值是否为空

前端在开发过程中，经常会遇到后端传过来的数据为空的情况，如果我知道确定的数据类型还比较容易判断，但有时候类型是不确定的，比如数组类型，在数组为空的时候，不知道返回的是`[]` 还是 `null`，这个时候如果冒然的使用`Array.length()`进行判断，当返回的空数组的值不是`[]`而是`null`时就会出现问题。

于是我就想写段代码，去检测数据是否为空，以后直接调用它便是。

我将如下的数据值定义为空值，其他值便为非空值。

  - []
  - {}
  - ''
  - ' '
  - null
  - undefined


由于在JavaScript中的所有事物都是对象，所以需要先进行对象类型的判断，然后再根据不同的类型进行处理。typeof主要进行基本数据类型的检测，在这里不适用。考虑到[javascript安全的类型监测](http://www.chengkangjian.com/2017/02/13/javascript%E5%AE%89%E5%85%A8%E7%B1%BB%E5%9E%8B%E7%9B%91%E6%B5%8B/)，所以在这里如果使用instanceof在多个JS框架环境中使用并不保险。
所以安全起见，还是使用`Object.prototype.toString.call()`比较靠谱。

下面就根据以上的想法产出了下面这段代码：

```
function isEmptyVal (val) {
  let type;
  let isEmptyObj = function (obj) {
    for (let name in val) {
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

console.log(isEmptyVal1) //true
console.log(isEmptyVal2) //true
console.log(isEmptyVal3) //true
console.log(isEmptyVal4) //true
console.log(isEmptyVal5) //true
console.log(isEmptyVal6) //true

```
