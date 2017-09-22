
// 纯函数
//
// var memoize = function (f) {
//   var cache = {}
//   return function () {
//     var arg_str = JSON.stringify(arguments)
//     cache[arg_str] = cache[arg_str] || f.apply(f, arguments)
//     return cache[arg_str]
//   }
// }
// var squareNumber = memoize(function(x){return x * x})
//
// var ds = new Date().getTime()
// for (var i = 0; i < 10000; i++) {
//   squareNumber(4)
// }
// var de = new Date().getTime()
// console.log(de-ds + '...')
//
//
// var squareNumber2 = function (x) {
//   return x * x
// }
//
// var ds2 = new Date().getTime()
// for (var i = 0; i < 10000; i++) {
//   squareNumber2(3)
// }
// var de2 = new Date().getTime()
// console.log(de2-ds2 + '...')

var match = function (what, str) {
  return str.match(what)
}
match(/\s+/g, "hello world");
