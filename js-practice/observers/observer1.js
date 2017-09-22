var Observable = function() {
  this.subscribers = {}
}

Observable.prototype = {
  constructor: Observable,

  subscribe (type, fn) {
    if (!this.subscribers[type]) {
      this.subscribers[type] = []
    }
    this.subscribers[type].push(fn)
  },

  unsubscribe (type, fn) {
    if (!this.subscribers) {
      return
    }
    let listeners = this.subscribers[type],
        i,
        len = listeners.length


    for (let i = 0; i < len; i++) {
      if (listeners[i] === fn) {
        listeners.splice(i, 1)
        return
      }
    }
  },

  publish (type, event) {
    if (!this.subscribers[type]) {
      return
    }
    if (!event[type]) {
      event[type] = type
    }

    var listeners = this.subscribers[type],
        i,
        len = listeners.length

    for (let i = 0; i < len; i++) {
      listeners[i](event)
    }
  }
}


let publisher = new Observable()
let eventArgs = { message: 'hello Observable pattern' }
let eventArgs2 = { message: 'ooooooooooooooooooooo' }
let subscriber = function (eventArgs) {
  console.log(eventArgs.message)
}
publisher.subscribe('message', subscriber)
publisher.publish('message', eventArgs)
publisher.publish('message', eventArgs2)







//
//
//
// // 首先定义一个可观察对象
// var Observable = function() {
//    //只有一个用于收集订阅者的对象,这个地方要写成公共对象
//    // 不能用var subscribers = {}, 这样会写成私有对象
//    this.subscribers = {};
// } ;
//
// // Observable 对象原型上上的3个方法: subscribe, unsubscribe, publish
// Observable.prototype = {
//   constructor: Observable,
//
//   // subscribe @param1 type  @param2 fn
//   subscribe: function(type, fn) {
//
//   // 首先查看对象subscribers上是否存在type属性
//     if (!this.subscribers[type]) {
//       this.subscribers[type] = [];
//     }
//     // 将订阅者加入到 subscribers 中
//     // subscriber is just a function，订阅者仅仅是一个函数而已
//     this.subscribers[type].push(fn);
//
//   },
//
//     // unsubscribe 取消订阅 @param1 type  @param2 fn
//   unsubscribe: function(type, fn) {
//
//     // 先判断subscribers中存不存在type这个属性，不存在直接返回
//     if (!this.subscribers[type]) {
//         return;
//     }
//     // 存在type,将要取消订阅的订阅者找出，从订阅者名单中删除掉
//     var listeners = this.subscribers[type],
//           i,
//           len = listeners.length;
//     for (i = 0; i < len; i++) {
//         if (listeners[i] === fn) {
//             // 将取消订阅的观察者observer移除
//             listeners.splice(i, 1);
//             return;
//         }
//     }
//
//   },
//
//   // publish: 发布 @param1 type  @param2 eventArgs(事件信息)
//   publish: function(type, event) {
//
//    // 判断观察者对象集合subscribers中存不存在type属性，不存在则表示为订阅，直接返回
//    if (!this.subscribers[type]) {
//       return;
//    }
//
//    // 先判断对象event中存不存在type这个属性，不存在就创建该属性
//     if (!event[type])  {
//         event[type] = type;
//     }
//
//    // 找到该事件对应的观察者，并发布通知
//     var  listeners = this.subscribers[type],
//           i,
//           len = listeners.length;
//     for (i = 0; i < len; i++) {
//         listeners[i](event);
//     }
//
//   }
//
// }
//
//
// // 创建一个可观察者Observable实例
// var publisher = new Observable();
//
// // 创建一个对象传入到订阅者中
// var eventArgs = {message: "hello observer pattern!"};
//
//
// // 创建一个订阅者
// var subscriber = function(eventArgs) {
//     console.log(eventArgs.message);
// };
//
// // 订阅 @param1 type  @param2 fn
// publisher.subscribe("message", subscriber);
//
// // 发布 @param1 type  @param2 eventArgs(事件信息)
// publisher.publish("message", eventArgs); // "hello observer pattern!"


// 注意:
// 发布者和订阅者之间的关系是通过发布者上的一个对象来建立交互的，即subscribers
// 订阅者本质上是一个函数(javascript中函数也是一个对象)
// 订阅，取消订阅，发布的功能都在发布者身上，订阅者只是通过依附(attach)或者脱离(disattach)来订阅或者退订事件
