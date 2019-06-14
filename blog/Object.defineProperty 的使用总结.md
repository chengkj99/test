
### Object.definedProperty

> The Object.defineProperty() method defines a new property directly on an object, or modifies an existing property on an object, and returns the object.
Object.defineProperty可以在一个对象上定义一个新的属性，或修改一个已经存在的属性。并返回该对象。

简而言之，Object.defineProperty 是定义对象属性的方法。

平时我们通过以下的方式定义属性

```
  let o = {}
  o.a = 'apple'
  o['b'] = 'banana'
```
Object.defineProperty 算是第三种，这种方式比以上两种方式更加强大。


### 语法

Object.defineProperty(obj, prop, descriptor)

### 参数
- Object obj 目标对象
- String prop 需要定义的属性
- Object descriptor 该属性拥有的特性，可设置的值有：
    - value 属性的值，默认为 undefined。
    - writable 该属性是否可写，如果设置成 false，则任何对该属性改写的操作都无效（但不会报错），默认为 false。
    - get 一旦目标对象访问该属性，就会调用这个方法，并返回结果。默认为 undefined。
    - set 一旦目标对象设置该属性，就会调用这个方法。默认为 undeinfed。
    - configurable 如果为false，则任何尝试删除目标属性或修改属性以下特性（writable, configurable, enumerable）的行为将被无效化，默认为 false。
    - enumerable 是否能在for...in循环中遍历出来或在Object.keys中列举出来。默认为 false。


##### 其中 Object descriptor 是需要重点关注的属性：

writable只有设置为true可写，默认为false，false为不可写。
```
// writable: false
var o = {}
Object.defineProperty(o , 'msg', {
  value: 'hello',
  writable: false
})
console.log(o.msg)  // hello
o1.msg = 'world'
console.log(o.msg)  // hello

// writable: true
var o = {}
Object.defineProperty(o , 'msg', {
  value: 'hello',
  writable: true
})
console.log(o.msg)  // hello
o1.msg = 'world'
console.log(o.msg)  // world
```

configurable: 如果为false，则任何尝试删除目标属性或修改属性以下特性（writable, configurable, enumerable）的行为将被无效化，默认为 false。

```
// configurable: false
var o = {}
Object.defineProperty(o , 'msg', {
  value: 'hello',
  configurable: false
})
delete o.msg
console.log(o.msg)  //hello

// configurable: true
var o = {}
Object.defineProperty(o , 'msg', {
  value: 'hello',
  configurable: true
})
delete o.msg
console.log(o.msg)  //undefined
```
enumerable: true可枚举，false不可枚举，默认为false。

```

var o = {};
Object.defineProperty(o, 'a', {
  value: 1,
  enumerable: true
})
Object.defineProperty(o, 'b', {
 value: 2,
 enumerable: false
})
Object.defineProperty(o, 'c', {
  value: 3
}) // enumerable defaults to false
o.d = 4 // enumerable defaults to true when creating a property by setting it

for (var i in o) {
  console.log(i);
}

// a
// d
```
get 一旦目标对象访问该属性，就会调用这个方法，并返回结果。默认为 undefined。
set 一旦目标对象设置该属性，就会调用这个方法。默认为 undeinfed。
下面是摘抄数据收集的案例：
```
function archiver() {
	var temperature = null
    var archive = []

	Object.defineProperty(this, 'temperature', {
    get () {
      console.log('get')
 		  return temperature
	  },
    set (value) {
      temperature = value
      archive.push({val: temperature})
    }
  })
	this.getArchive = function () { return archive }
}

var a = new archiver()
a.temperature // get
a.temperature = 100 // 100
a.temperature = 200 // 200
a.getArchive() // [0:{val: 100}, 1:{val: 200}]

```


### 注意

在 descriptor 中不能同时设置访问器 (get 和 set) 和 wriable 或 value，否则会报以下错误：
```
Uncaught TypeError: Invalid property descriptor. Cannot both specify accessors and a value or writable attribute, #<Object>

```
