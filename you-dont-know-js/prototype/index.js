// (原型)继承：建立原型之间的关联

// 关联两个对象最常用的方法是使用 new 关键词进行函数调用。使用 new 调用函数时会把新对象的 .prototype 属性关联到“其他对象”。
// 带 new 的函数调用 通常被称为“构造函数调用”，尽管它们实际上和传统面向类语言中的类构造函数不一样。


var Foo = function (name) {
  this.name = name
}
Foo.prototype.getName = function() {
  return this.name
}

var Bar = function (name, label) {
  Foo.call(this, name)
  this.label = label
}
// 错误方法：和你想要的机制不一样! Bar.prototype = Foo.prototype; 相当于获得了 Foo.prototype 的引用，修改 Foo.prototype 时，Bar 也会改变，是错误的连接原型的方式

// 建立关联0：这种方式，基本上满足你的需求，但是可能会产生一些副作用。会执行构造函数，引起一些副作用，原型的连接不够纯粹。
// Bar.prototype = new Foo();

// 建立关联1: Object.create()
// Bar.prototype = Object.create(Foo.prototype)

// 建立关联2: Object.setPrototype(basicPrototype, targetPrototype)
Bar.prototype = Object.setPrototypeOf(Bar.prototype, Foo.prototype)

// 如果忽略掉 Object.create(..) 方法带来的轻微性能损失(抛弃的对象需要进行垃圾回 收)，它实际上比 ES6 及其之后的方法更短而且可读性更高。不过无论如何，这是两种完全不同的语法。

var b = new Bar('ckj', 'i am ckj')

console.log(Object.getPrototypeOf(Bar.prototype) === Foo.prototype)
console.log(Object.getPrototypeOf(b) === Bar.prototype)
console.log(Object.getPrototypeOf(Object.getPrototypeOf(b)) === Foo.prototype)
console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(b))) === Object.prototype)
console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(b)))))


console.log('----------------------------------')
// 检查原型关系

// instanceof，局限于检查 实例对象和函数类之间的关系，如果是两个实例对象则无法应用
console.log(b instanceof Bar)

// isPrototypeOf
console.log(Foo.prototype.isPrototypeOf(b))

// Object.getPrototypeOf
console.log(Object.getPrototypeOf(b) === Bar.prototype)

// .__proto__ 不是标准
console.log(b._proto_)


// 内部委托

var anotherObject = {
  cool: function() {
    console.log( "cool!" );
  }
};
var myObject = Object.create(anotherObject);
myObject.doCool = function() {
  this.cool(); // 内部委托!
};
myObject.doCool(); // "cool!"
