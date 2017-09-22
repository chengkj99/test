let _ = require('underscore')

// Applicative编程：接收一个谓词函数，返回一个反转谓词结果的函数。
// PRED是谓词函数，在这里谓词函数被返回的函数捕获。这样我们能够再次定义谓词函数。
class Part {

  PartOne () {

    function complement (PRED) {
      return function () {
        return PRED.apply(null, _.toArray(arguments))
      }
    }
      // 判断是否偶数
    function isEvens (n) {
      return (n%2) === 0
    }

    let isEven = complement(isEvens)
    console.log('isEven-2:', isEven(2)) //true
    console.log('isEven-3:', isEven(3)) // false

    // 判断奇数
    function isOdds (n) {
      return (!((n%2) === 0))
    }
    let isOdd = complement(isOdds)
    console.log('isOdd-2:', isOdd(2)) //false
    console.log('isOdd-3:', isOdd(3)) // true

    // 但是如果此后isEvens发生了变化

    // isEvens发生变化，影响了isEven，不影响isOdd。
    // 因为变量的捕获发生在创建闭包的时候，在这里虽然创建了isEvens新的变量和新的引用，但是不会被isOdd察觉。
    // 方法重载？
    function isEvens (n) {
      return false
    }
    console.log('isEven-22:', isEven(22)) //false
    console.log('isEven-33:', isEven(33)) // false

    console.log('isOdd-22:', isOdd(22)) //false
    console.log('isOdd-33:', isOdd(33)) // true
  }

  PartTwo () {
    //看下面这段
    function showObj (obj) {
      return function () {
        return obj
      }
    }

    let o = {a: 'apple', b: 'banana'}
    let showo = showObj(o)
    o.c= 'can'
    console.log('showObj(o)', showo())
    //  以上这段，o的引用存在于闭包的内部和外部，他的变化可以跨越看似私有的界限，这样会引起混乱。

    // 改进：
    // 通过函数创建 1
    // function pingpong () {
    //   let PRIVATE = 100;
    //   return {
    //     inc: function (n) {
    //       return PRIVATE += n
    //     },
    //     dec: function (n) {
    //       return PRIVATE -= n
    //     }
    //   }
    // }
    // let ping = pingpong()
    // console.log(ping.inc(8)) //108
    // console.log(ping.dec(6)) //103

    // 通过匿名立即执行函数创建
    let pingpong = (function () {
      let PRIVATE = 100;
      return {
        inc: function (n) {
          return PRIVATE += n
        },
        dec: function (n) {
          return PRIVATE -= n
        }
      }
    })()
    console.log(pingpong.inc(8)) //108
    console.log(pingpong.dec(6)) //103

    // 这种方式，提供了强大的访问保护技术
    pingpong.other = function (v) { return 'other number' + PRIVATE }
    console.log(pingpong.other()) //PRIVATE is not defined

  }
}

let P = new Part()
P.PartTwo()
