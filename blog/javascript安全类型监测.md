# javascript安全类型监测

### 数据类型检测
ECMAScript有五种简单的数据类型，分别为Undefined、Null、String、Number、Boolean，还有一个复杂的数据类型Object。ECMAScript的语言的动态性意味着我们可以使用以上6种数据类型表示任何数据。

因为数据类型是松散的，所以我们需要一些手段来准确的检测给定变量的数据类型。
#### typeof
tepeof是检测基本数据类型的好手，他有六种检测结果，分别是Undefined、Object、Function、String、Number、Boolean,所以它是判断一个变量是：未定义值、对象、函数、字符串、数值、布尔值的最佳工具。
```
typeof undefined  //"undefined"
typeof {}  //"object"
typeof function(){}  //"function"
typeof ''  //"string"
typeof 1  //"number"
typeof true  //"boolean"

typeof null  //"object"
typeof [] //"object"

```
从上面可以看出typeof虽然是检测基本数据类型的好手，但是在检测引用类型的数据时就力不从心了，下面会提到如何检测引用数据类型。另外还有个问题值得思考：

    为什么null的检测类型是Object？

看书中对null的描述：
> The value null represents the intentional absence of any object
value


首先，null是一个原始值。
关于 ` typeof null  //"object" ` 的结果，从一开始出现JavaScript就是这样的。

在 JavaScript 最初的实现中，JavaScript 中的值是由一个表示类型的标签和实际数据值表示的。对象的类型标签是0。由于 null 代表的是空指针(大多数平台下值为0x00)，因此，null的类型标签也成为了0，typeof null就错误的返回了"object".(referenc)

据说该问题在ECMAScript 6中提出` typeof null === 'null' `的讨论 (该提议已被否决)。


### 安全类型检测
javascript内置的类型检测机制并非完全可靠。比如typeof操作符，由于一些无法预知的行为，会得到不靠谱的结果。
instanceof存在于多个作用域的情况，通过下面的方式检测数组：

``var isArray = value instanceof Array``

以上代码若返回true，value必须是一个数组，而且必须与Array构造函数处于同一个作用域中。如果value是别的框架定义的数组，以上的代码又可能会返回false。

### 如何解决上述问题
上述解决的办法都一样，在任何值上调用Object原生的toString方法时，都会返回一个类似于［object NativeConstructorName］格式的字符串，比如：

``Object.prototype.toString.call([''])    //"[object Array]" ``

由于原生数组的构造函数名和全局作用域无关，因此使用toString就能返回一致的值。利用这点可以创建以下函数：

```
function isArray(value) {
  return Object.prototype.toString.call(value) == "[object Array]";
}

function isFunction(value) {
  return Object.prototype.toString.call(value) == "[object Function]";
}

function isRegExp(value) {
  return Object.prototype.toString.call(value) == "[object RegExp]";
}

function isNativeJSON(value) {
  return window.JSON&&Object.prototype.toString.call(value) == "[object JSON]";
}


```

⚠需要注意的一点是，Object.prototype.toString()本身也会被修改，本文讨论的仅仅是该方法未被修改的情况下。
