// const _ = require('lodash')
// 实现一个函数节流 throttle，函数防抖 debounce

// 防抖：在事件被触发 n 秒后再执行回调，如果在这 n 秒内又被触发，则重新计时。
// 节流：规定一个单位时间，在这个单位时间内，只能有一次触发事件的回调函数执行，如果在同一个单位时间内某事件被触发多次，只有一次能生效。

function throttle(fn, delay) {
  let timer
  let last
  return function () {
    now = +new Date()
    // 保证执行环境的上下文和参数
    const args = arguments
    const self = this
    // 重复执行就判断是不是：当前时间小于上一次执行的时间加延迟，如果是则防抖一下 『取消上次的定时器，重新建立新的定时器』，防抖一下是为了当后续不再执行时，执行最后一次调用
    // 重复执行就判断是不是：当前时间小于上一次执行的时间加延迟，如果不是，说明这个时间内可以执行一次了
    if (last && now < last + delay) {
      clearInterval(timer)
      timer = setTimeout(() => {
        last = now // 最新的 last 应该在执行时更新
        fn.apply(self, args)
      }, delay)
    } else {
      last = now
      fn.apply(self, args)
    }
  }
}

function dobunce(fn, delay) {
  let timer
  return function() {
    // 保证执行环境的上下文和参数
    const args = arguments
    const self = this
    // 重复执行就取消上次的定时器，重新建立新的定时器
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(self, args)
    }, delay)
  }
}


const outputName = dobunce(() => {
  console.log('heihei')
}, 1000)

function main() {
  let i = 0
  let timer = setInterval(() => {
    i++
    if (i === 10) {
      clearInterval(timer)
      return
    }
    console.log('do')
    outputName()
  }, 200)
}

main()
