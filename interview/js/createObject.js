// 创建对象
var obj = {}; // var obj = new Object();
obj.__proto__ = Person.prototype; // 此时便建立了obj对象的原型链：
// obj->Person.prototype->Object.prototype->null
var result = Person.call(obj, "John"); // 相当于obj.Person("John")
return typeof result === "object" ? result : obj; // 如果无返回值或者返回一个非对象值，则将obj返回作为新对象

// 工厂模式

// 构造函数模式

// 原型模式
