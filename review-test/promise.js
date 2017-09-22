// promise 使用方法

//   if (data) {
//     resolve(data)
//   } else {
//     reject(data)
//   }
// })
//
// promise.then(() => {
//
// })
//
// promise.catch(() => {
//
// })

// var promise = new Promise(function(resolve, reject) {
//   console.log('#1')
//   // resolve(1)
//   // reject(2)
//   reject(new Error('reject'));
//   console.log('#2')
// })
//
// promise.then(
//   (res) => {
//     console.log('suc:', res)
//   },
//   (res) => {
//     console.log('err:', res)
//   }
// )

var promise = new Promise(function(resolve, reject) {
    return Promise.resolve(0)
})
promise.then(
  (res) => {
    console.log('res:', res)
  },
  (res) => {
    console.log('res err', res)
  }
)

// console.log(Promise.resolve('kangjian'))
