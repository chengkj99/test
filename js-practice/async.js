console.log(1)

setTimeout(() => {
  console.log(2)
  Promise.resolve().then(() => {
    console.log(3)
  })
})

new Promise((resolve, reject) => {
  console.log(4)
  resolve(5)
}).then((data) => {
  console.log(data)
})

setTimeout(() => {
  console.log(6)
})

console.log(7)

// 第一次宏任务： 1 4 7
// 清空微任务：5
// 执行宏任务：2
// 清空微任务：3
// 执行宏任务：6
