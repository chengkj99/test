# 你不知道的 JS 上(二) - this 和原型对象

## 关于 this

### 为什么要用 this

```js
function identify() {
  return this.name.toUpperCase();
}
function speak() {
  var greeting = "Hello, I'm " + identify.call(this);
  console.log(greeting);
}
var me = {
  name: "Kyle"
};
var you = {
  name: "Reader"
};
identify.call(me); // KYLE
identify.call(you); // READER
speak.call(me); // Hello, 我是 KYLE
speak.call(you); // Hello, 我是 READER
```

上面这段代码如果不使用 this，那就需要给 identify() 和 speak() 显式传入一个上下文对象。

**this 提供了一种更优雅的方式来隐式“传递”一个对象引用，因此可以将 API 设计得更加简洁并且易于复用。**

### this 的误解

##### 误解 1: this 理解成指向函数自身

现在我们先来分析一下这个模式，让大家看到 this 并不像我们所想的那样指向函数本身。

```js
function foo(num) {
  console.log("foo: " + num);
  // 记录 foo 被调用的次数
  this.count++;
}
foo.count = 0;
var i;
for (i = 0; i < 10; i++) {
  if (i > 5) {
    foo(i);
  }
}
// foo: 6
// foo: 7
// foo: 8
// foo: 9
// foo 被调用了多少次?
console.log(foo.count); // 0 -- WTF?
```

console.log 语句产生了 4 条输出，证明 foo(..) 确实被调用了 4 次，但是 foo.count 仍然 是 0。显然从字面意思来理解 this 是错误的。

执行 foo.count = 0 时，的确向函数对象 foo 添加了一个属性 count。但是函数内部代码 this.count 中的 this 并不是指向那个函数对象，所以虽然属性名相同，根对象却并不相同。

##### 误解 2: this 指向函数的作用域

这个问题有点复杂，因为在某种情况下它是正确的，但是在其他情况下它却是错误的。

this 在任何情况下都不指向函数的词法作用域。在 JavaScript 内部，作用域确实和对象类似，可见的标识符都是它的属性。但是作用域「对象」无法通过 JavaScript 代码访问，它存在于 JavaScript 引擎内部。

```js
function foo() {
  var a = 2;
  this.bar();
}
function bar() {
  console.log(this.a);
}
foo(); // ReferenceError: a is not defined
```

这段代码试图通过 this.bar() 来引用 bar() 函数。这有可能是不成功的。调用 bar() 最自然的方法是省略前面的 this，直接使用词法引用标识符。

编写这段代码的开发者还试图使用 this 联通 foo() 和 bar() 的词法作用域，从而让 bar() 可以访问 foo() 作用域里的变量 a。这是不可能实现的，你不能使用 this 来引用一 个词法作用域内部的东西。（每当你想要把 this 和词法作用域的查找混合使用时，一定要提醒自己，这是无法实现的。）

### this 到底是什么

> this 实际上是在函数被调用时发生的绑定，它指向什么完全取决于函数在哪里被调用。

this 是在运行时进行绑定的，并不是在编写时绑定，它的上下文取决于函数调 用时的各种条件，this 的绑定和函数声明的位置没有任何关系，只取决于函数的调用方式。

当一个函数被调用时，会创建一个活动记录(有时候也称为执行上下文)。这个记录会包含函数在哪里被调用(调用栈)、函数的调用方法、传入的参数等信息。this 就是记录的其中一个属性，会在函数执行的过程中用到。

**总之：学习 this 的第一步是明白 this 既不指向函数自身也不指向函数的词法作用域，你也许被这样的解释误导过，但其实它们都是错误的。this 实际上是在函数被调用时发生的绑定，它指向什么完全取决于函数在哪里被调用。**

## this 全面解析

### 调用位置

**调用位置就是函数在代码中被调用的位置(而不是声明的位置)。**有仔细分析调用位置才能回答这个问题: 这个 this 到底引用的是什么?

最重要的是要**分析调用栈**(就是为了到达当前执行位置所调用的所有函数)。我们关心的调用位置就在当前正在执行的函数的前一个调用中。

下面我们来看看到底什么是调用栈和调用位置:

```js
function baz() {
  // 当前调用栈是: baz
  // 因此，当前调用位置是全局作用域
  console.log("baz");
  bar(); // <-- bar 的调用位置
}
function bar() {
  // 当前调用栈是 baz -> bar
  // 因此，当前调用位置在 baz 中
  console.log("bar");
  foo(); // <-- foo 的调用位置
}
function foo() {
  // 当前调用栈是 baz -> bar -> foo // 因此，当前调用位置在 bar 中
  console.log("foo");
}
baz(); // <-- baz 的调用位置
```

你可以把调用栈想象成一个函数调用链，就像我们在前面代码段的注释中所写的一样。但是这种方法非常麻烦并且容易出错。
另一个查看调用栈的方法 是使用浏览器的调试工具。调试器会在那个位置暂停，同时会展示当前位置的函数调用列表，这就是你的调用栈。因此，如果你想要分析 this 的绑定，使用开发者工具得到调用栈，然后找到栈中第二个元素，这就是真正的调用位置。

### 绑定规则

我们来看看在函数的执行过程中调用位置如何决定 this 的绑定对象。

你必须找到调用位置，然后判断需要应用下面四条规则中的哪一条。我们首先会分别解释这四条规则，然后解释多条规则都可用时它们的优先级如何排列。

#### 1. 默认绑定

> 函数调用时应用了 this 的默认绑定，this 指向全局对象。<br/>
> 严格模式(strict mode)，那么全局对象将无法使用默认绑定， this 会绑定到 undefined。
> 首先要介绍的是最常用的函数调用类型: 独立函数调用。可以把这条规则看作是无法应用其他规则时的默认规则。

```js
function foo() {
  console.log(this.a);
  var a = 2;
  foo(); // 2
}
```

当调用 foo() 时，this.a 被解析成了全局变量 a。为什么?因为在本例中，**函数调用时应用了 this 的默认绑定，因此 this 指向全局对象**。

那么我们怎么知道这里应用了默认绑定呢?

可以通过分析调用位置来看看 foo() 是如何调用的。在代码中，foo() 是直接使用不带任何修饰的函数引用进行调用的，因此只能使用默认绑定，无法应用其他规则。

如果使用严格模式(strict mode)，那么全局对象将无法使用默认绑定，因此 this 会绑定 到 undefined:

```js
function foo() {
  "use strict";
  console.log(this.a);
}
var a = 2;
foo(); // TypeError: this is undefined
```

在严格模式下：

```js
function foo() {
  "use strict"; // 这意味着 foo() 运行在 strict mode 下时，无法使用默认绑定
  console.log(this.a);
}
var a = 2;
(function() {
  foo(); // 2
})();
```

注意，foo() 运行在非 strict mode 下时，默认绑定才能绑定到全局对象; 和严格模式下 foo() 的调用位置无关:

```js
function foo() {
  console.log(this.a);
}
var a = 2;
(function() {
  "use strict"; // 调用位置是 strict mode，但是不会影响默认绑定到全局对象。
  foo(); // 2
})();
```

#### 2. 隐式绑定

> 隐式绑定规则会把函数调用中的 this 绑定到上下文对象（指向对象的最后一层）。

另一条需要考虑的规则是调用位置是否有上下文对象，或者说是否被某个对象拥有或者包含。

```js
function foo() {
  console.log(this.a);
}
var obj = { a: 2, foo: foo };
obj.foo(); // 2
```

首先需要注意的是 foo() 的声明方式，及其之后是如何被当作引用属性添加到 obj 中的。 但是无论是直接在 obj 中定义还是先定义再添加为引用属性，这个函数严格来说都不属于 obj 对象。

当 foo() 被调用时，它的落脚点确实指向 obj 对象。当函数引用有上下文对象时，隐式绑定规则会把函数调用中的 this 绑定到这个上下文对象。因为调用 foo() 时 this 被绑定到 obj，因此 this.a 和 obj.a 是一样的。

对象属性引用链中只有最顶层或者说最后一层会影响调用位置。举例来说:

```js
function foo() {
  console.log(this.a);
}
var obj2 = { a: 42, foo: foo };
var obj1 = { a: 2, obj2: obj2 };
obj1.obj2.foo(); // 42
```

##### 隐形丢失

> 隐式绑定规则会把函数调用中的 this 绑定到上下文对象 <br/>
> 隐式丢失就是，被隐式绑定的函数会丢失绑定对象，会应用默认绑定。 <br/>
> 常常发生在 setTimeout 调用 `setTimeout(fn, 1000)` 或函数传递中如： `doFoo(obj.foo)` <br/>
> 可以通过固定绑定 this 来解决这个问题。

一个最常见的 this 绑定问题就是被隐式绑定的函数会丢失绑定对象，也就是说它会应用默认绑定，从而把 this 绑定到全局对象或者 undefined 上，取决于是否是严格模式。

```js
function foo() {
  console.log(this.a);
}
var obj = { a: 2, foo: foo };
var bar = obj.foo; // 函数别名!
var a = "oops, global"; // a 是全局对象的属性
bar(); // "oops, global"
```

虽然 bar 是 obj.foo 的一个引用，但是实际上，它引用的是 foo 函数本身，因此此时的 bar() 其实是一个不带任何修饰的函数调用，因此应用了默认绑定。

#### 3. 显示绑定

> 使用函数的 call(..) 和 apply(..) 方法，第一个参数是一个对象，它们会把这个对象绑定到 this 上。

隐式绑定时，我们必须在一个对象内部包含一个指向函数的属性，并通过这个属性间接引用函数，从而把 this 间接(隐式)绑定到这个对象上。

那么如果我们不想在对象内部包含函数引用，而想在某个对象上强制调用函数，该怎么做呢?

可以使用函数的 call(..) 和 apply(..) 方法。这两个方法是如何工作的呢？它们的第一个参数是一个对象，它们会把这个对象绑定到 this，接着在调用函数时指定这个 this。因为你可以直接指定 this 的绑定对象，因此我们称之为显式绑定。

```js
function foo() {
  console.log(this.a);
}
var obj = { a: 2 };
foo.call(obj); // 2
```

显式绑定仍然无法解决我们之前提出的丢失绑定问题。

##### 1. 硬绑定

但是显式绑定的一个变种可以解决这个问题。

> 硬绑定，就是一个函数包裹了一个显示绑定的调用。
> 使用 Function.prototype.bind() 或者自己实现。

```js
var a = "global oops";
function foo() {
  console.log(this.a);
}
var obj = {
  a: 2
};
var bar = function() {
  foo.call(obj);
};

bar(); // 2

setTimeout(bar, 500); // 2

bar.call(window); // 2 函数 bar 不可能再修改它的 this 了
```

工作原理：创建了函数 bar()，并在它的内部手动调用 了 foo.call(obj)，因此强制把 foo 的 this 绑定到了 obj。无论之后如何调用函数 bar，它总会手动在 obj 上调用 foo。这种绑定是一种显式的强制绑定，因此我们称之为硬绑定。

硬绑定的典型应用场景就是创建一个包裹函数，传入所有的参数并返回接收到的所有值：

```js
function foo(something) {
  console.log(this.a, something);
  return this.a + something;
}
var obj = { a: 2 };
var bar = function() {
  return foo.apply(obj, arguments);
};
var b = bar(3); // 2 3
console.log(b); // 5
```

另一种使用方法是创建一个可以重复使用的绑定辅助函数:

```js
var a = "a";
var b = "b";
function bar(c) {
  console.log(this.a, this.b, c);
}
var obj = {
  a: "1",
  b: "2"
};
function myBind(fn, context) {
  return function() {
    return fn.apply(context, arguments);
  };
}
var baz = myBind(bar, obj);
bar("ckj"); // a, b, ckj;
baz("ckj"); // 1, 2, ckj; instead: a, b, ckj
```

由于硬绑定是一种非常常用的模式，所以在 ES5 中提供了内置的方法 Function.prototype.bind()，用法如下：

```js
var a = "a";
var b = "b";
function bar(c) {
  console.log(this.a, this.b, c);
}
var obj = {
  a: "1",
  b: "2"
};
function myBind(fn, context) {
  return function() {
    return fn.apply(context, arguments);
  };
}
var baz = bar.bind(obj); // 更改此处
bar("ckj"); // a, b, ckj;
baz("ckj"); // 1, 2, ckj; instead: a, b, ckj
```

bind(..) 会返回一个硬编码的新函数，它会把参数设置为 this 的上下文并调用原始函数。

##### 2. API 调用的上下文

第三方库的许多函数，以及 JavaScript 语言和宿主环境中许多新的内置函数，都提供了一 个可选的参数，通常被称为“上下文”(context)，其作用和 bind(..) 一样，确保你的回调 函数使用指定的 this。

举例来说:

```js
function foo(el) {
  console.log(el, this.id);
}
var obj = {
  id: "awesome"
};
// 调用 foo(..) 时把 this 绑定到 obj
[1, 2, 3].forEach(foo, obj); // 1 awesome 2 awesome 3 awesome
```

这些函数实际上就是通过 call(..) 或者 apply(..) 实现了显式绑定，这样你可以少些一些代码。

#### 4. new 绑定

> 如例：`var bar = new foo(2);`。通过 new 构造函数调用，会产生一个新对象 bar，它的 this 会绑定到 foo 上，这叫 new 绑定。

在讲解它之前我们首先需要澄清一个非常常见的关于 JavaScript 中函数和对象的误解。

在传统的面向类的语言中，“构造函数”是类中的一些特殊方法，使用 new 初始化类时会调用类中的构造函数。通常的形式是这样的:

```js
something = new MyClass(..);
```

然而，JavaScript 中 new 的机制实 际上和面向类的语言完全不同。

首先我们重新定义一下 JavaScript 中的「构造函数」。

在 JavaScript 中，构造函数只是一些使用 new 操作符时被调用的函数。它们并不会属于某个类，也不会实例化一个类。实际上，它们甚至都不能说是一种特殊的函数类型，它们只是被 new 操作符调用的普通函数而已。

举例来说：

> 当 Number 在 new 表达式中被调用时，它是一个构造函数:它会初始化新创建的对象。

所以，包括内置对象函数在内的所有函数都可以用 new 来调用，这种函数调用被称为**构造函数调用**。这里有一个重要但是非常细微的区别: 实际上并不存在所谓的「构造函数」，只有对于函数的「构造调用」。

使用 new 来调用函数，或者说发生构造函数调用时，会自动执行下面的操作。

```
1. 创建(或者说构造)一个全新的对象。
2. 这个新对象会被执行[[原型]]连接。
3. 这个新对象会绑定到函数调用的this。
4. 如果函数没有返回其他对象，那么new表达式中的函数调用会自动返回这个新对象。
```

思考如下代码:

```js
function foo(a) {
  this.a = a;
}
var bar = new foo(2);
console.log(bar.a); // 2
```

使用 new 来调用 foo(..) 时，我们会构造一个新对象并把它绑定到 foo(..) 调用中的 this 上。new 是最后一种可以影响函数调用时 this 绑定行为的方法，我们称之为 new 绑定。

### 优先级

现在我们已经了解了函数调用中 this 绑定的四条规则，你需要做的就是找到函数的调用位 置并判断应当应用哪条规则。但是，如果某个调用位置可以应用多条规则该怎么办?为了 解决这个问题就必须给这些规则设定优先级，这就是我们接下来要介绍的内容。

毫无疑问，默认绑定的优先级是四条规则中最低的，所以我们可以先不考虑它。

隐式绑定和显式绑定哪个优先级更高？测试一下:

```js
var a = "a";
function foo() {
  console.log(this.a);
}

var obj1 = {
  a: "1",
  foo: foo
};
var obj2 = {
  a: "2",
  foo: foo
};
obj1.foo(); // 1
obj1.foo.call(obj2); // 2 显示绑定 > 隐式绑定
```

可以看到，显式绑定优先级更高，也就是说在判断时应当先考虑是否可以应用显式绑定。

new 绑定和隐式绑定哪个优先级更高？测试一下:

```js
function foo(something) {
  this.a = something;
}

var obj1 = {
  foo: foo
};

var obj2 = {};

// 隐式绑定
obj1.foo("a");
console.log(obj1.a); // a

// new 绑定 > 隐式绑定
var baz = new obj1.foo("c");
console.log(obj1.a); // a
console.log(baz.a); // c
```

可见，new 绑定比隐式绑定优先级高。但是 new 绑定和显式绑定谁的优先级更高呢？

> new 和 call/apply 无法一起使用，因此无法通过 new foo.call(obj1) 来直接 进行测试。但是我们可以使用硬绑定来测试它俩的优先级。

```js
// new VS call apoly bind
function foo(something) {
  this.a = something;
}
var obj = {};

var bar = foo.bind(obj);
bar("a");
console.log(obj.a); // a

var baz = new bar("b");
console.log(obj.a); // a
console.log(baz.a); // b
```

bar 的 this 虽然被硬绑定到 obj 上，但是通过 new 绑定创建的 baz 的 this 是一个新的 this，可见，new 修改了 bar() 中的硬绑定到 obj 的 this。new 调用，本质上是使用新创建 的 this 替换硬绑定的 this。

为什么要在 new 中使用硬绑定函数呢?直接使用普通函数不是更简单吗?

之所以要在 new 中使用硬绑定函数，主要目的是预先设置函数的一些参数，这样在使用 new 进行初始化时就可以只传入其余的参数。举例来说:

```js
function foo(p1, p2) {
  this.val = p1 + p2;
}
// 之所以使用 null 是因为在本例中我们并不关心硬绑定的 this 是什么 // 反正使用 new 时 this 会被修改
var bar = foo.bind(null, "p1");
var baz = new bar("p2");
baz.val; // p1p2
```

### 判断 this

现在我们可以根据优先级来判断函数在某个调用位置应用的是哪条规则。可以按照下面的顺序来进行判断:

1. 函数是否在 new 中调用(new 绑定)?如果是的话 this 绑定的是新创建的对象。
   var bar = new foo()
2. 函数是否通过 call、apply (显式绑定)或者 bind(硬绑定)调用?如果是的话，this 绑定的是指定的对象。
   var bar = foo.call(obj2)
3. 函数是否在某个上下文对象中调用(隐式绑定)?如果是的话，this 绑定的是那个上下文对象。
   var bar = obj1.foo()
4. 如果都不是的话，使用默认绑定。如果在严格模式下，就绑定到 undefined，否则绑定到 全局对象。
   var bar = foo()
   就是这样。对于正常的函数调用来说，理解了这些知识你就可以明白 this 的绑定原理了。不过......凡事总有例外。

### 绑定例外

#### 被忽略的 this

规则总有例外，这里也一样。

##### 1. 如果你把 null 或者 undefined 作为 this 的绑定对象传入 call、apply 或者 bind，这些值在调用时会被忽略，实际应用的是默认绑定规则:

```js
function foo() {
  console.log(this.a);
}
var a = 2;
foo.call(null); // 2
```

那么什么情况下你会传入 null 呢?

一种非常常见的做法是使用 apply(..) 来“展开”一个数组，并当作参数传入一个函数。类似地，bind(..) 可以对参数进行柯里化(预先设置一些参数)，这种方法有时非常有用:

```js
function foo(a, b) {
  console.log("a:" + a + ", b:" + b);
}
// 把数组“展开”成参数
foo.apply(null, [2, 3]); // a:2, b:3
// 使用 bind(..) 进行柯里化
var bar = foo.bind(null, 2);
bar(3); // a:2, b:3
```

这两种方法都需要传入一个参数当作 this 的绑定对象。如果函数并不关心 this 的话，你 仍然需要传入一个占位值，这时 null 可能是一个不错的选择，就像代码所示的那样。

> 显而易见，这种方式可能会导致许多难以分析和追踪的 bug。

##### 更安全的 this

```js
function foo(a, b) {
  console.log("a:" + a + ", b:" + b);
}
// 我们的 DMZ 空对象
var ø = Object.create(null); // 把数组展开成参数
foo.apply(ø, [2, 3]); // a:2, b:3
// 使用 bind(..) 进行柯里化
var bar = foo.bind(ø, 2);
bar(3); // a:2, b:3
```

可以创建一个“DMZ”(demilitarized zone，非军事区)对象，把 this 绑定到这个对象不会对你的程序 产生任何副作用。

##### 2. 间接引用

另一个需要注意的是，你有可能(有意或者无意地)创建一个函数的「间接引用」，在这种情况下，调用这个函数会应用默认绑定规则。

间接引用最容易在赋值时发生:

```js
function foo() {
  console.log(this.a);
}
var a = 2;
var o = { a: 3, foo: foo };
var p = { a: 4 };
o.foo(); // 3
(p.foo = o.foo)(); // 2
```

> 注意:对于默认绑定来说，决定 this 绑定对象的并不是调用位置是否处于严格模式，而是 函数体是否处于严格模式。如果函数体处于严格模式，this 会被绑定到 undefined，否则 this 会被绑定到全局对象。

##### 3. 软绑定

硬绑定这种方式可以把 this 强制绑定到指定的对象(除了使用 new 时)，防止函数调用应用默认绑定规则。问题在于，硬绑定会大大降低函数的灵活性，使用硬绑定之后就无法使用隐式绑定或者显式绑定来修改 this。

如果可以给默认绑定指定一个全局对象和 undefined 以外的值，那就可以实现和硬绑定相同的效果，同时保留隐式绑定或者显式绑定修改 this 的能力。
可以通过一种被称为软绑定的方法来实现我们想要的效果:

```js
if (!Function.prototype.softBind) {
  Function.prototype.softBind = function(obj) {
    var fn = this;
    // 捕获所有 curried 参数
    var curried = [].slice.call( arguments, 1 );
    var bound = function() {
      return fn.apply(
        (!this || this === (window || global)) ?
        obj : this
        curried.concat.apply(curried, arguments)
      );
    };
    bound.prototype = Object.create( fn.prototype );
    return bound;
  };
}
```

下面我们看看 softBind 是否实现了软绑定功能:

```js
function foo() {
  console.log("name: " + this.name);
}
var obj = { name: "obj" },
  obj2 = { name: "obj2" },
  obj3 = { name: "obj3" };
var fooOBJ = foo.softBind(obj);
fooOBJ(); // name: obj
obj2.foo = foo.softBind(obj);
obj2.foo(); // name: obj2 <---- 看!!!
fooOBJ.call(obj3); // name: obj3 <---- 看! setTimeout( obj2.foo, 10 );
// name: obj <---- 应用了软绑定
```

可以看到，软绑定版本的 foo() 可以手动将 this 绑定到 obj2 或者 obj3 上，但如果应用默
认绑定，则会将 this 绑定到 obj。

### this 词法

我们之前介绍的四条规则已经可以包含所有正常的函数。但是 ES6 中介绍了一种无法使用 这些规则的特殊函数类型:箭头函数。

箭头函数并不是使用 function 关键字定义的，而是使用被称为「胖箭头」的操作符 => 定义的。箭头函数不使用 this 的四种标准规则，而是根据外层(函数或者全局)作用域来决定 this。

我们来看看箭头函数的词法作用域:

```js
var a = 'a'
function foo() {
  // 返回一个箭头函数
  return a => {
    //this 继承自 foo()
    console.log(this.a);
  };
}
var obj1 = { a: 2 };
var obj2 = { a: 3 };
var bar = foo.call(obj1);
bar.call(obj2); // 2, 不是 3 !
new bar() // 2, 不是 a!
```

foo() 内部创建的箭头函数会捕获调用时 foo() 的 this。由于 foo() 的 this 绑定到 obj1， bar(引用箭头函数)的 this 也会绑定到 obj1，箭头函数的绑定无法被修改。(new 也不行!)

###  小结

> this 绑定有：默认绑定、隐式绑定、显式绑定（硬绑定、软绑定）、new 绑定

如果要判断一个运行中函数的 this 绑定，就需要找到这个函数的直接调用位置。找到之后就可以顺序应用下面这四条规则来判断 this 的绑定对象。

1. 由new调用?绑定到新创建的对象。
2. 由call或者apply(或者bind)调用?绑定到指定的对象。
3. 由上下文对象调用?绑定到那个上下文对象。
4. 默认:在严格模式下绑定到undefined，否则绑定到全局对象。

一定要注意，有些调用可能在无意中使用默认绑定规则。如果想「更安全」地忽略 this 绑定，你可以使用一个 DMZ 对象，比如 ø = Object.create(null)，以保护全局对象。
ES6 中的箭头函数并不会使用四条标准的绑定规则，而是根据当前的词法作用域来决定 this，具体来说，箭头函数会继承外层函数调用的 this 绑定(无论 this 绑定到什么)。这其实和 ES6 之前代码中的 self = this 机制一样。


