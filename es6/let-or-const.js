// 浏览器的 ES6 环境
function f() { console.log('I am outside!'); }

(function () {
  if (false) {
    // 重复声明一次函数f
    function f() { console.log('I am inside!'); }
  }

  f();
}());
// Uncaught TypeError: f is not a function




// let 不存在变量提升

// 暂时性死区

// 不允许重复声明

// ES6 的块级作用域允许声明函数的规则，只在使用大括号的情况下成立，如果没有使用大括号，就会报错。

// es6之前只有全局作用域和函数作用域，es6新增了块级作用域。

// 块级作用域最好使用函数最好写成表达式函数而不是函数声明，因为不同的浏览器可能对函数声明的作用域进行提升，容易出错。

// es6 只有var 和 function声明。现在新增了let、const、import、class。

// es6新增顶层对象属性，也就是window和global。
