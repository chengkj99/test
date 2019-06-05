// fill 引起的问题
// fill() 方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引。

// 构造二维数组
// let a = new Array(2).fill(undefined).map(() => new Array(2).fill({name:''}))

// var a = new Array(2).fill(undefined).map(() => {
//   return new Array(2).fill(undefined).map(() => ({
//     name: ''
//   }))
// })


// a.forEach((xDot, xIndex) => {
//   xDot.forEach((yDot, yIndex) => {
//     console.log(xIndex, yIndex);
//     yDot.x = 0 + 15 * 40 * xIndex;
//     yDot.y = 0 + 15 * 40 * yIndex;
//     console.log("yDot...", yDot);
//     console.log("a...", a);
//   });
// });

// let newA = a.map((xDot, xIndex) => {
//   return xDot.map((node, yIndex) => ({
//     ...node,
//     x: 0 + 15 * 40 * xIndex,
//     y: 0 + 15 * 40 * yIndex
//   }));
// });

console.log("after a !!!", a);
