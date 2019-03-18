// WeakSet 结构与 Set 类似，也是不重复的值的集合。

// 但是，它与 Set 有两个区别。
// 首先，WeakSet 的成员只能是对象，而不能是其他类型的值。
// WeakSet 中的对象都是弱引用(即垃圾回收机制不考虑 WeakSet 对该对象的引用)，因为js的垃圾回收机制是引用计数，WeakSet的引用都不计入垃圾回收机制。

// WeakSet 的成员是不适合引用的，因为它会随时消失。另外，由于 WeakSet 内部有多少个成员，取决于垃圾回收机制有没有运行，
// 运行前后很可能成员个数是不一样的，而垃圾回收机制何时运行是不可预测的，因此 ES6 规定 WeakSet 不可遍历。

function func1() {
  // WeakSet 可以接受一个数组或类似数组的对象作为参数。
  // 参数成员只能是对象。
  let ws = new WeakSet([
    [1, 2],
    [3, 4]
  ])
  console.log(ws)
}

function func2() {
  // WeakSet.prototype.add(value)：向 WeakSet 实例添加一个新成员。
  // WeakSet.prototype.delete(value)：清除 WeakSet 实例的指定成员。
  // WeakSet.prototype.has(value)：返回一个布尔值，表示某个值是否在
  let ws = new WeakSet()
  let obj1 = {}
  let obj2 = {}
  ws.add(obj1)
  ws.add(obj2)
  console.log('add:', ws) //{} 不可遍历

  let has1 = ws.has(obj1)
  let has2 = ws.has(obj2)
  console.log('ws.has(obj1):', has1) //true
  console.log('ws.has(obj2):', has2) //true

  let del1 = ws.delete(obj1)
  let del2 = ws.delete(obj2)
  console.log('ws.delete(obj1):', del1) //true
  console.log('ws.delete(obj2):', del1) //true

  let has3 = ws.has(obj1)
  let has4 = ws.has(obj2)
  console.log('ws.has(obj1):', has3) //false
  console.log('ws.has(obj2):', has4) //false
  console.log('has:', ws)  //{} 不可遍历
}

func3 () {
  // WeakSet没有size、forEach属性
  // weakSet一般用来储存DOM节点，这样移除DOM时就可以不用担心内存泄漏了。
}

{
  func2()
}
