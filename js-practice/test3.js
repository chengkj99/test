// 实现一个CodingMan，可以按照以下方式调用:

// CodingMan(“Hank”)输出:
// Hi! This is Hank!

// CodingMan(“Hank”).sleep(10).eat(“dinner”)
// 输出
// Hi! This is Hank!
// 等待10秒..
// Wake up after 10
// Eat dinner~

// CodingMan(“Hank”).eat(“dinner”).eat(“supper”)
// 输出
// Hi This is Hank!
// Eat dinner~
// Eat supper~

// CodingMan(“Hank”).sleepFirst(5).eat(“supper”)
// 输出
// //等待5秒
// Wake up after 5
// Hi This is Hank!
// Eat supperi
// 以此类推。


function CodingMan(name) {

  function Man(name) {
    setTimeout(() => {
      console.log(`Hi! This is ${name}!`)
    }, 0)
  }
  Man.prototype.sleep = function (m) {
    const curTime = new Date()
    const delay = m * 1000
    while (new Date() - curTime < delay) {}
    setTimeout(() => {
      console.log(`Wake up after ${m}`)
    }, 0)

    return this
  }
  Man.prototype.eat = function (s) {
    setTimeout(() => {
      console.log(`Eat ${s}`)
    }, 0)
    return this
  }
  Man.prototype.sleepFirst = function(m) {
    const curTime = new Date()
    const delay = m * 1000
    while (new Date() - curTime < delay) {}
    console.log(`Wake up after ${m}`)
    return this
  }
  return new Man(name)
}

// CodingMan('Hank').sleep(3).eat('hello')

console.log('------------------')

CodingMan('Hank').sleepFirst(5).eat('hello')
