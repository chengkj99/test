
function Publisher () {
  this.subscribers = [] // 用来装订阅者
}

Publisher.prototype.deliver = function (data) {
  this.subscribers.forEach( function (fn) {
    fn(data)
  })
  return this
}

Function.prototype.subscribe = function (publisher) {
  var that = this
  var alreadyExist = publisher.subscribers.some( function (fn) {
    return (that === fn)
  })
  if (!alreadyExist) {
    publisher.subscribers.push(this)
  }
  return this
}

var NewYorkTimes = new Publisher
var Joe = function (from) {
  console.log('Deliver from ' + from + ' to Joe')
}
Joe.subscribe(NewYorkTimes)

NewYorkTimes.deliver('hello')
NewYorkTimes.deliver('hi')
