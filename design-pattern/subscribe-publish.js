// 发布订阅模式 - 自定义事件

// const event = {}
// event.clientList = []
// event.listen = function(fn) {
//   this.clientList.push(fn)
// }
// event.trigger = function() {
//   for (let i = 0, fn; fn = this.clientList[i++];) {
//     fn.apply(this, arguments)
//   }
// }

// event.listen(function(age) {
//   console.log('My name is xiaoming', 'My age is ' + age)
// })

// event.listen(function(age) {
//   console.log('My name is xiaohong', 'My age is ' + age)
// })

// console.log(publisher)
// publisher.trigger(18)

// 添加唯一标识 key，按订阅的类型发布

// const publisher = {}
// publisher.client = {}
// publisher.listen = function (key, fn) {
//   if (!this.client[key]) {
//     this.client[key] = []
//   }
//   this.client[key].push(fn)
// }

// publisher.trigger = function() {
//   let key = Array.prototype.shift.call(arguments)
//   fns = this.client[key]
//   if (!fns || fns.length === 0) {
//     return false
//   }
//   for (let i = 0, fn; fn = fns[i++];) {
//     fn.apply(this, arguments)
//   }
// }

// publisher.listen('say', function(name){
//   console.log('xioaming say to ' + name)
// })
// publisher.listen('say', function(name){
//   console.log('xiaohong say to ' + name)
// })
// publisher.listen('like', function(name){
//   console.log('xiaohong like ' + name)
// })

// publisher.trigger('say', 'CKJ')
// publisher.trigger('like', 'CKJ')


// 给一个对象安装发布订阅能力，以及删除订阅能力
const event = {
  client: {},
  listen: function (key, fn) {
    if (!this.client[key]) {
      this.client[key] = []
    }
    this.client[key].push(fn)
  },
  trigger: function() {
    let key = Array.prototype.shift.call(arguments)
    fns = this.client[key]
    if (!fns || fns.length === 0) {
      return false
    }
    for (let i = 0, fn; fn = fns[i++];) {
      fn.apply(this, arguments)
    }
  },
  remove: function(key, fn) {
    let fns = this.client[key]
    if (!fns || fns.length === 0) {
      return false
    }
    for (let i = 0, _fn; _fn = fns[i++];) {
      if (_fn === fn) {
        fns.splice(i, 1)
      }
    }
  }
}

// const installEvent = function(obj) {
//   for (let key in event) {
//     obj[key] = event[key]
//   }
// }

// let newPublisher = {}
// installEvent(newPublisher)

// newPublisher.listen('say', f1 = function(name){
//   console.log('xioaming say to ' + name)
// })
// newPublisher.listen('say', f2 = function(name){
//   console.log('xiaohong say to ' + name)
// })
// newPublisher.listen('like', f3 = function(name){
//   console.log('xiaohong like ' + name)
// })

// newPublisher.trigger('say', 'CKJ2')
// newPublisher.trigger('like', 'CKJ2')

// newPublisher.remove('say', f1)

// newPublisher.trigger('say', 'CKJ2')
// newPublisher.trigger('like', 'CKJ2')

// 订阅者如果不知道发布者，怎么办？或者如果有多个发布者，每个订阅者是不是要订阅多这个发布者？
// 此时，发布订阅模式可以用一个全局的 Event 来实现

const Event = (function(){
    return {
      ...event
    }
})()



Event.listen('say', f1 = function(name){
  console.log('xioaming say to ' + name)
})
Event.listen('say', f2 = function(name){
  console.log('xiaohong say to ' + name)
})
Event.listen('like', f3 = function(name){
  console.log('xiaohong like ' + name)
})

Event.trigger('say', 'CKJ3')
Event.trigger('like', 'CKJ3')

Event.remove('say', f1)

Event.trigger('say', 'CKJ3')
Event.trigger('like', 'CKJ3')







