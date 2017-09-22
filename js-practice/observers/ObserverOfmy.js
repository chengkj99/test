// 观察者模式

// 角色： 订阅者、传送者、发布者（观察者）

function Publisher () {
  this.subscriber = []
}

Publisher.prototype.deliver = function (data) {
  this.subscriber.some( function (fn) {
    fn(data)
  })
}

Function.prototype.subscribe = function (Publisher) {
  var that = this
  var alreadyExist = Publisher.subscriber.forEach( function (fn) {
      return (fn === that)
  })
  if (!alreadyExist) {
    Publisher.subscriber.push(this)
  }
}

var P1 = new Publisher

var F1 = function (data) {
  console.log(data)
}
F1.subscribe(P1)

P1.deliver('hello world')
