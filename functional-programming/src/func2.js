let _ = require('underscore')


function StrangeIdentity (n) {
  for (var i = 0; i < n; i++);
  return i;
}
// console.log(StrangeIdentity(99)) //99


function StrangeIdentity2 (n) {
  for ( this['i'] = 0; this['i'] < n; this['i']++);
  return this['i'];
}
// console.log(StrangeIdentity2(138)) //138


// 动态作用域
function  func3 () {
  var globals = {}
  // 这里的设计理念有点意思,接收一个函数作为参数，返回一个接收参数的函数，由使用调用该函数的函数给予。
  function makeBindFun (resolver) {
    return function (k, v) {
      var stack = globals[k] || [];
      globals[k] = resolver(stack, v)
      return globals
    }
  }

  // 有了globals和makeBindFun， 考虑如何增加绑定到globals的变量
  var stackBinder = makeBindFun (function (stack, v) {
    stack.push(v)
    return stack
  })
  var stackUnBinder = makeBindFun (function (stack, v) {
    stack.pop()
    return stack
  })

  // 查询绑定
  var dynamicLookUp = function (k) {
    var slot = globals[k] || []
    return _.last(slot)
  }

  let s1 = stackBinder('a', 1)
  let s11 = stackBinder('a', '*')
  let s2 = stackBinder('b', 100)
  console.log(s1)
  console.log(s11)
  console.log(s2)
  console.log(dynamicLookUp('a'))
  console.log('将 “ * ” 弹出堆栈后：', stackUnBinder('a'))
  console.log(dynamicLookUp('a'))
}

// 动态作用域的缺点，任何给定的绑定的值，在确定调用其函数之前，都是不可知的。


function globalThis () {
  return this
}

let t1 = globalThis()
let t2 = globalThis.call('hahahaha')
let t3 = globalThis.apply('hahahaha', [])

console.log(t1)
console.log(t2)
console.log(t3)

// 以上表明了this的值通过call和apply操作。


// this的引用是动态作用域，绑定有时候是必要的。
let tb = _.bind(globalThis, 'heihei')
console.log('tb:', tb.call('tb:')) //heihei
