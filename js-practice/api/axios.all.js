// function f(x, y, z) {}
// var args = [1, 2, 3];
// f.apply(null, args);


//
function spread(callback) {
  return function (arr) {
    return callback.apply(null, arr);
  }
}
//
// const wrap = spread(function f(x, y, z) {
//   console.log("1:", x)
//   console.log("2:", y)
//   console.log("3:", z)
// })
// console.log(wrap(["a", "b", "c"]))


// function qqq(x, y, z) {
//     console.log("----", x, y, z)
// }
// qqq.apply(null, [1,2,3])


debugger;
var p1 = 3;
var p2 = 1337;
debugger;
Promise.all([p1, p2]).then(
  spread((x, y) => {
    debugger;
    console.log("1:", x)
    console.log("2:", y)
  })
);
