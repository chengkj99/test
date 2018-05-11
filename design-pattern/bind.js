
// 实现一个 bind
// context 绑定的目标对象
// this 原函数/原对象
Function.prototype.bind = context => {
  let self = this
  return () => {
    return self.apply(context, arguments)
  }
}
// bind example
let o = {
  name: 'kangjian'
}
let foo = function() {
  console.log(this.name)
}.bind(o)
foo() // kangjian



// 绑定对象的this
o.foo = (func => {
  return () => {
    func.apply(o, arguments)
  }
})(o.foo)
// example
let o = {
  name: 'kangjian',
  foo:() => {
    console.log(this.name)
  }
}
let name = 'Max.Cheng'
let f = o.foo
f() // Max.Cheng
