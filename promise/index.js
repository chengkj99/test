// 在如果没有 Promise 时，如果想实现在未来的某个时刻收到值，可以使用 callback
function q0(callback) {
  setTimeout(() => {
    callback(0)
  }, 1000);
}
// q0((res) => {console.log(res)})


// 给出错误提示
function q1(callback, errorback) {
  setTimeout(() => {
    if (Math.random() < 0.5) {
      return callback(1)
    } else {
      errorback(new Error('error'))
    }
  })
}
// q1((res) => {console.log(res)}, (err) => {console.log(err)})

// 改为通过返回一个对象的形式

function q2() {
  var _callback
  setTimeout(() => {
    _callback(2)
  }, 1000)
  return {
    then: (callback) => {
      _callback = callback
    }
  }
}

// q2().then((res) => {console.log(res)})
// weakness：1.只能调用一次；2.调用时间超过 1 秒，将失败；
// var p = q2()
// setTimeout(() => {
//   p.then((res) => {console.log(res)})
// }, 100) // 100 < 1000 will success, otherwise will fail\

// 方案升级：

function q3() {
  let padding = [], value;
  setTimeout(() => {
    value = 1;
  }, 1000)
}





