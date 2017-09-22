// setTimeout((data) => {
//   console.log('setTimeout1');
//   let data1 = data + ' setTimeout1';
//   setTimeout((data) => {
//     console.log('setTimeout2');
//     let data2 = data + ' setTimeout2';
//     setTimeout((data) => {
//       console.log('setTimeout3');
//       let data3 = data + ' setTimeout3';
//        console.log(data3)
//     }, 1000,data2)
//   }, 1000,data1)
// }, 1000, 'mock data')

// setTimeout( (data) => {
//   console.log('s1')
//   let data1 = data + 's1'
//   setTimeout( (data) => {
//     console.log('s2')
//     data = data + 's2'
//     console.log(data)
//   }, 1000, data1)
// }, 1000, 'start')

// let i = 0
// function f1(callback) {
//   setTimeout( () => {
//     console.log(i++)
//     callback()
//   }, 1000)
// }
// function f2() {
//   console.log('end')
// }
// f1(
//   () => f1(
//     () => f1(
//       () => f2()
//     )
//   )
// )



// 发布订阅模式（观察者模式）／事件监听模式


// Generator
// function f1 () {
//   console.log('f1')
//   for (var i = 0; i < 1000000; i++) {
//    console.log('f1...' + i )
//   }
//
// }
// function f2 () {
//   console.log('f2')
//   for (var i = 0; i < 1000000; i++) {
//    console.log('f2***' + i )
//   }
// }
//
// function* helloWorldGenerator() {
//   yield f1();
//   yield f2();
//   return 'ending';
// }
// //
// var hw = helloWorldGenerator();
// hw.next()
// // { value: 'hello', done: false }
//
// hw.next()
// // { value: 'world', done: false }
// //
// // hw.next()
// // // { value: 'ending', done: true }
// //
// // hw.next()
// // // { value: undefined, done: true }







// 同步环境执行完之后再执行异步内容，（和多线程不一样）
// const pri = new Promise((resolve, reject) => {
//   console.log('inner p')
//   resolve(42)
// })
// pri.then(
//   val => {
//     console.log(val)
//   }
// )
// for (var i = 0; i < 1000000; i++) {
//  console.log('outer P' + i )
// }
//
// setTimeout(() => {
//   console.log('3')
// }, 3000)






//
// const aP = new Promise( (resolve, reject) => {
//   resolve(100)
// })
// const thenP = aP.then( value => {
//   console.log(value)
// })
// let inThenP
// const then2P = aP.then( value => {
//   console.log('then2P:', value)
//   inThenP = Promise.resolve(123)
//   console.log('inThenP:', inThenP)
// })


// f1.then(f2).then(f3).then(f4)
// 如果f4依赖f1和f3的结果，这个时候，需要f3获得f1的结果，这样层层值传递。





function f1 () {
  console.log('...')
  return '...'
}
function f2 () {
  console.log('!!!')
  return '!!!'
}


async function f() {
  var symbol = await f1()
  var stockPrice = await f2()
  return stockPrice
}

f().then(function (result) {
  console.log(result)
});
