//
// doWork( () => {
//   console.log('call me when done');
// })
//
// function doWork(cb){
//    setTimeout( () => {
//      cb();
//    }, 3000)
// }

// let a = [1,2,3,4,5,6]
// let b = [1,3,6]
// //
// let t = a.filter( (it) => {
//   if (it > 3) {
//     return it
//   }
// })
// var t
// for (var v of b) {
//   t = a.filter( (it) => {
//     console.log('v, it..', v, it, v==it)
//     if (it == v ) {
//       return it
//     }
//   })
// }
// console.log(t)

// for (var v of b) {
//   let index = a.indexOf(v)
//   console.log(a.indexOf(v))
//   a.splice(index, 1)
// }
// console.log(a)
