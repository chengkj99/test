// js的对象（Object）本质上是键值对的集合，但是js对象的键只能是字符串类型，Object结构是“字符串—值”的对应。
// map数据结构也是“键值对”的数据结构，但是其键类型不受限制，Map结构是“值—值”的对应。是一种更完善的 Hash 结构实现

function func1 () {
  const m = new Map()
  // 对象o当作m的一个键，然后又使用get方法读取这个键，接着使用delete方法删除了这个键。
  const o = { p : 'p2'}
  m.set(o, 'p1')
  m.get(o)
  console.log(m) // Map { { p: 'p2' } => 'p1' }
  console.log(m.get(o)) // p1

  debugger
  let has1 = m.has(o)
  let has2 = m.delete(o)
  let has3 = m.has(o)
  console.log('has1:', has1)
  console.log('has2:', has2)
  console.log('has3:', has3)
}

function func2 () {
  // 向Map添加成员
  // 支持数组作为参数
  debugger
  const arr = [
    ['name', '张三'],
    ['age', '22']
  ]
  let m = new Map(arr)
  console.log(m.has('name')) // true
  console.log(m.get('name')) // 张三
  console.log(m.get('age')) // 22
}

function func2_1 () {
  // map接受数组作为参数，实际上是使用了下面这个算法
  const items = [
    ['name', '张三'],
    ['title', 'Author']
  ]

  const map = new Map()

  items.forEach(
    ([key, value]) => map.set(key, value)
  )
}

function func3 () {
  // 任何具有 Iterator 接口的数据结构（详见《Iterator》一章）都可以当作Map构造函数的参数。
  // 这就是说，Set和Map都可以用来生成新的 Map。

  let s = new Set([
    ['name', '张三'],
    ['title', 'Author']
  ])
  let m = new Map(s)
  console.log(m.has('name')) // true
  console.log(m.get('name')) // 张三
  console.log(m.get('title')) // Author
}


function func4 () {
  // 如果对同一个键多次赋值，后面的值将覆盖前面的值。
  // 如果读取一个未知的键，则返回undefined。
  let m = new Map()
  m.set('a', 'apple')
  m.set('a', 'a bananer')
  console.log(m.get('a')) // a bananer
  console.log(m.get('iiii')) // undefined

}

function func5 () {
  // 只有对同一个对象的引用，Map 结构才将其视为同一个键。这一点要非常小心。
  m.set(['a'], 'apple')
  console.log(m.get(['a'])) // undefined

  let arr = ['a']
  m.set(arr, 'apple')
  console.log(m.get(arr)) // apple

  /*
  由上可知，Map 的键实际上是跟内存地址绑定的，只要内存地址不一样，就视为两个键。
  这就解决了同名属性碰撞（clash）的问题，我们扩展别人的库的时候，如果使用对象作为键名，就不用担心自己的属性与原作者的属性同名。

  如果 Map 的键是一个简单类型的值（数字、字符串、布尔值），则只要两个值严格相等，Map 将其视为一个键。
  包括0和-0，布尔值true和字符串true则是两个不同的键。
  另外，undefined和null也是两个不同的键。
  虽然NaN不严格相等于自身，但 Map 将其视为同一个键。
*/
}

function func6 () {
  // 实例的属性和操作方法
  // size属性
  // set(key, value) 返回整个map，因此可以使用链式写法
  // get(key)
  // has(key)
  // delete(key)
  // clear()

  let m = new Map()
  m.set('a', 'apple')
  .set('b', 'bananer')
  .set('c', 'cccccc')
  console.log('m.size:', m.size)
  console.log('m.get(a):', m.get('a'))
  console.log('m.has(a):', m.has('a'))
  console.log('m.delete(a):', m.delete('a'))
  console.log('m.get(a):', m.get('a'))
  console.log('m.has(a):', m.has('a'))
  m.clear()
  console.log('m.clear after m.size:', m.size)
}

function func7 () {
  // 遍历方法
  // keys()：返回键名的遍历器。
  // values()：返回键值的遍历器。
  // entries()：返回所有成员的遍历器。
  // forEach()：遍历 Map 的所有成员。
  let m = new Map()
  .set('a', 'apple')
  .set('b', 'bananer')
  .set('c', 'cccccc')
  // keys()
  for (let i of m.keys()) {
    console.log('key:', i)
  }
  // values()
  for (let v of m.values()) {
    console.log('value:', v)
  }
  // entries()
  for (let en of m.entries()) {
    console.log('entries:', en[0], en[1])
  }
  for (let [key, value] of m.entries()) {
    console.log('entries:', key, value)
  }
  for (let [key, value] of m) {
    console.log('entries:', key, value)
  }
  // 最后三个例子说明，Map默认遍历器就是entries
  console.log(m[Symbol.iterator] === m.entries) // true

  // forEach()
  m.forEach( (val, key, map ) => {
    console.log(val)
    console.log(key)
    console.log(map)
  })
}

function func8 () {
  // map转数组，快速的方式还是扩展运算符
  let m = new Map()
  .set('a', 'apple')
  .set('b', 'bananer')
  .set('c', 'cccccc')

  console.log([...m.keys()])
  console.log([...m.values()])
  console.log([...m.entries()])
  console.log([...m])
}

function func9 () {
  // 与其他数据结构相互转换
  let m = new Map()
  .set('a', 'apple')
  .set('b', 'bananer')
  .set('c', 'cccccc')

  // Map转数组 - ...扩展运算符
  let arr = [...m]
  console.log('Map转数组:', arr)
  // 数组转Map - 将数组传入Map构造函数
  let m1 = new Map(arr)
  console.log('数组转Map:', m1)

  // Map转对象 前提是， Map 的键都是字符串，才可以转为对象。
  let obj = {}
  for (let [key, value] of m) {
    obj[key] = value
  }
  console.log('Map转对象:', obj)
  // 对象转Map
  let m2 = new Map()
  for (let k of Object.keys(obj)) {
    m2.set(k, obj[k])
  }
  console.log('对象转Map:', m2)


  //Map 转为 JSON : 1.Map的键名都是字符串可转为对象JSON。2.Map的键名含有非字符串可转为数组JSON。
  let j = JSON.stringify(obj)
  console.log('Map 转为 对象JSON:', j)

  let j2 = JSON.stringify([...m])
  console.log('Map 转为 数组JSON:', j2)

  // JSON 转 Map - 所有键名都是字符串情况下：和对象转Map如出一辙
  let m3 = new Map()
  for (let k of Object.keys(JSON.parse(j))) {
    m3.set(k, obj[k])
  }
  console.log('对象 JSON 转 Map:', m3)

  // 整个JSON 就是一个数组
  let m4 = new Map(JSON.parse(j2))
  console.log('数组 JSON 转 Map:',m4)

}

/*
  for...in 和 for... of 区别：
  for...in 一般用于遍历对象，不推荐使用其遍历数组，因为其可以遍历出原生属性，遍历的值为key。
  for...of 一般功能强大，可以遍历对象、数组、类数组、字符串等等，遍历的值是value。
*/

// WeakMap : 和 WeakSet 如出一辙，为了解决内存泄漏而设计
{
  // func9()
}

//practice

function test () {
  let m = new Map([
    ['edge', '子层缓存组'],['midsrc', '中间源缓存组'],['cluster', '父层缓存组']
  ])
  console.log(m.delete('midsrc'))
  console.log(m)
  console.log(m.set('midsrc', '中间源缓存组'))
}

{
  test()
}
