// 混入对象的类

// 类理论

// 面向对象编程强调的是数据和操作数据的行为本质上是互相关联的(当然，不同的数据有 不同的行为)，因此好的设计就是把数据以及和它相关的行为打包(或者说封装)起来。 这在正式的计算机科学中有时被称为数据结构。
// 类是一种设计模式。许多语言提供了对于面向类软件设计的原生语法。JavaScript 也有类似的语法，但是和其他语言中的类完全不同。
// 类意味着复制。传统的类被实例化时，它的行为会被复制到实例中。类被继承时，行为也会被复制到子类中。
// 多态(在继承链的不同层次名称相同但是功能不同的函数)看起来似乎是从子类引用父 类，但是本质上引用的其实是复制的结果。

// 混入模式(无论显式还是隐式)可以用来模拟类的复制行为，但是通常会产生丑陋并且脆弱的语法，比如显式伪多态(OtherObj.methodName.call(this, ...))，这会让代码更加难 懂并且难以维护。
// 此外，显式混入实际上无法完全模拟类的复制行为，因为对象(和函数!别忘了函数也是对象)只能复制引用，无法复制被引用的对象或者函数本身。忽视这一点会导致许多问题。
// 总地来说，在 JavaScript 中模拟类是得不偿失的，虽然能解决当前的问题，但是可能会埋 下更多的隐患。

// 显示混入
function mixins(sourceObj, targetObj) {
  for (let key in sourceObj) {
    if (!(key in targetObj)) {
      targetObj[key] = sourceObj[key];
    }
  }
}

// 寄生继承
function Vehicle() {
  this.engines = 1;
}
Vehicle.prototype.ignition = function() {
  console.log("Turning on my engine");
};
Vehicle.prototype.drive = function() {
  console.log("Steering and moveing forward");
};

function Car() {
  var car = new Vehicle();
  car.wheels = 4;
  var vehDrive = car.drive;
  car.drive = function() {
    vehDrive.call(this);
    console.log("Rolling on all " + this.wheels + "wheels");
  };
  return car;
}
var car = new Car()
car.drive()

// 隐式混入

// 把 Something 的行为“混入”到了 Another 中
// 通过在 Another 中调用 Something 的方法，并硬绑定 this 到 Another 中
var Something = {
  cool: function() {
    this.greeting = "hello world";
    this.count = this.count ? this.count + 1 : 1;
  }
};
Something.cool();
console.log(Something.greeting, Something.count);

var Another = {
  cool: function() {
    Something.cool.call(this);
  }
};

Another.cool();
console.log(Another.greeting, Another.count);
