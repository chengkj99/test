// Set是es6提供新的数据结构，成员值唯一，类似于数组。
function func1 () {
  let s = new Set()
  let arr = [2, 3, 5, 4, 5, 2, 2]
  arr.forEach(e => s.add(e))
  for (let v of s) {
    console.log(v)
  }
}
// add, of


// 去除数组的重复元素
// Array.from方法可以将 Set 结构转为数组。

// Set内部通过精确相等运算符（===）进行相等运算比较，不发生类型转换
// 主要的区别是NaN等于自身，而精确相等运算符认为NaN不等于自身。
function func2 () {
  let arr1 = [1,1,1,2,2,2,3,3,3,4,4,5,5,6,6,7,7,8]
  console.log(Array.from(new Set(arr1)))
  // console.log([...new Set(arr1)])

  let s1 = new Set()
  s1.add(NaN)
  s1.add(NaN)
  console.log([...s1])
}

// Set 实例的属性和方法

// 属性：
// Set.prototype.constructor：构造函数，默认就是Set函数。
// Set.prototype.size：返回Set实例的成员总数。

// 方法：
// add(value)：添加某个值，返回Set结构本身。
// delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
// has(value)：返回一个布尔值，表示该值是否为Set的成员。
// clear()：清除所有成员，没有返回值。
function func3 () {
  let s2 = new Set()
  s2.add('a').add('b').add('c')
  console.log(s2)
  console.log(s2.has('b'))
  console.log(s2.delete('b'))
  console.log(s2.has('b'))
  console.log(s2)
  s2.clear()
  console.log(s2)
}

// 遍历操作

// keys()：返回键名的遍历器
// values()：返回键值的遍历器
// entries()：返回键值对的遍历器
// forEach()：使用回调函数遍历每个成员

// Set的遍历顺序就是插入顺序
// 也可直接用for...of循环遍历 Set。

function func4 () {
  let s = new Set([1,2,3,4])
  console.log(s.keys())
  console.log(s.values())
  console.log(s.entries())
  s.forEach(e => {console.log(e)})
}





// 应用

// 1 扩展运算符（...）内部使用for...of循环，所以也可以用于 Set 结构。
function func5 () {
  let set = new Set(['red', 'green', 'blue']);
  let arr = [...set]
  console.log(arr)
  console.log(arr.constructor.toString() == Array)
}
//  ??为什么解出来是数组结构

// 2 扩展运算符和 Set 结构相结合，就可以去除数组的重复成员。

function func6 () {
  let arr = [1,2,3,4,4,4,5,5,5,5,6,6,6,7]
  let s = [...new Set(arr)]
  console.log(s)
}

// 3 数组的map和filter方法也可以用于 Set

function func7 () {
  let s = new Set([1,2,3,4,5])
  let s1 = new Set([...s].map((it, index, arr) => {return it*100}))
  let s2 = new Set([...s].filter((it, index, arr) => {return it>3}))
  console.log(s1)
  console.log(s2)
}


// 4 使用 Set 可以很容易地实现并集（Union）、交集（Intersect）和差集

function func8 () {
  let s1 = new Set([1,2,3,4,5])
  let s2 = new Set([3,4,5,6,7])

  // 并集
  let s3 = new Set([...s1, ...s2])
  console.log('并集：', s3)

  // 交集
  let s4 = new Set([...s1].filter((it) => {return s2.has(it)}))
  console.log('交集：', s4)

  // 差集
  let s5 = new Set([...s1].filter((it) => {return !s2.has(it)}))
  console.log('交集：', s5)
}

// 同步改变 Set 结构的两种方法
//一种是利用原 Set 结构映射出一个新的结构;另一种是利用Array.from方法。然后赋值给原来的 Set 结构；

function func9 () {
  let s = new Set([1,2,3,4])
  let s1 = new Set([...s].map(it => it * 100))
  let s2 = new Set(Array.from(s, val => val * 100))
  console.log(s1)
  console.log(s2)
}

{
  func9()
}
