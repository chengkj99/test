// 实现一个 calc 方法，可以将输入的数拆解为尽可能多的乘数，所有数相乘等于输入数。
/**

 * @param {number} n 乘积

 * @return {Array} 拆解后的乘数

 */
// function calc(n) {
//   let res = []
//   let val = 1
//   while (val < n / 2) {
//     let rest = n / 2
//     if () {

//     }
//   }
// }

// calc(2)
// // [2]

// calc(8)
// // [2, 2, 2]

// calc(24)
// // [2, 2, 2, 3]

// calc(30)
// [2, 3, 5]


new Promise((resolve, reject) => {
  console.log(1);

  setTimeout(() => {
    console.log(2);
  });

  resolve();

}).then(() => {

  console.log(3);

}).then(() => {

  return new Promise((resolve, reject) => {

    console.log(4);

  }).then(() => {

    console.log(5);

  });

}).then(() => {

  console.log(6);

});

console.log(7);

// 1, 7, 3, 4, 2, 5, 6

// 数据服务、
