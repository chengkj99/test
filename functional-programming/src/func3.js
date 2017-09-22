let _ = require('underscore')

// 闭包

//闭包获取局部变量
function f1 () {
  function whatWasLocal () {
    let CAPTURED = 'oh hai!'
    return function () {
      return 'The local is' + CAPTURED
    }
  }

  let reportLocal = whatWasLocal()
  console.log(reportLocal())
}


//闭包获取函数
// FACTOR: 因子 Scale: 规模

function f2 () {
  function createScaleFunction (FACTOR) {
    // FACTOR 将被保存在返回的缩放主体内，这个变量恰恰就是闭包的定义。
    return function (v) {
      return _.map(v, function (val, key) {
        return (FACTOR * val)
      })
    }
  }
  let scale10 = createScaleFunction(10)
  console.log(scale10([1,2,3]))

  let scale100 = createScaleFunction(100)
  console.log(scale100([1,2,3]))
  console.log(scale10([11,21,31]))
}

// 如何设计闭包？拿到外部函数的变量并绑定到返回函数的this。
function f3 () {
  function createdWeirdScaleFunc (FACTOR) {
    return function (v) {
      this['FACTOR'] = FACTOR
      let CAPTURED = this
      return _.map(v, _.bind(function (val) {
        return (FACTOR * val)
      }, CAPTURED))
    }
  }

  let scale10 = createdWeirdScaleFunc(10)
  console.log(scale10([1, 2, 3]))
}
// 但是上面这么写很棘手，还好的是，javascript的变量捕获是自动的。

// 自由变量
// 自由变量和闭包的关系是，自由变量闭合于闭包的创建。
// 什么是自由变量？ 函数内部的函数中声明的变量
function f4 () {

  function makeAdder (CAPTURED) {
    return function (free) {
      return free + CAPTURED
    }
  }
  let add10 = averangeDamp(10)
  console.log(add10(6))

}

// 捕获其他高阶函数是构建抽象的强大技术。
function f5 () {
  function average (arr) {
    let sum  = _.reduce(arr, function(a, b) {return a+b})
    return (sum / _.size(arr))
  }
  function averageDamp (FUN) {
    return function (n) {
      return average([n, FUN(n)])
    }
  }
  let averageSq = averageDamp(function (n) {return n*n})
  console.log(averageSq(10))
}

// 变量遮蔽 ：就是同名变量覆盖

{
  f5()
}
