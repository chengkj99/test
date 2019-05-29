// 行为委托模式和面向对象模式的区别

// 面向对象
function Foo(who) {
  this.me = who
}
Foo.prototype.identify = function() {
  return `I am ${this.me}`
}

function Bar(who) {
  Foo.call(this, who)
}
Bar.prototype = Object.create(Foo.prototype)
Bar.prototype.speak = function() {
  console.log(`Hello`, this.identify(), '.')
}

var b1 = new Bar('b1')
var b2 = new Bar('b2')
b1.speak()
b2.speak()

// 行为委托
var Foo = {
  init: function(who) {
    this.me = who
  },
  identify: function() {
    return `I am ${this.me}`
  }
}

var Bar = Object.create(Foo)
Bar.speak = function() {
  console.log(`Hello`, this.identify(), '.')
}

var b1 = Object.create(Bar)
b1.init('b1')
var b2 = Object.create(Bar)
b2.init('b2')

b1.speak()
b2.speak()


