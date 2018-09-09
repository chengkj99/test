// const event1 = {
//   clientList: [],
//   publisher: function() {
//     for (let i = 0; i < this.clientList.length; i++) {
//       this.clientList[i].apply(null, arguments)
//     }
//   },
//   listener: function(fn) {
//     this.clientList.push(fn)
//   }
// }

// event.listener(val => {
//   console.log('123', val)
// })
// event.listener(val => {
//   console.log('456', val)
// })


const event2= {
  clientList: {},
  publisher: function() {
    let key = Array.prototype.shift.call(arguments)
    let fns = this.clientList[key]
    if (!fns || fns.length ===0) return false
    for (let i = 0, fn; fn = fns[i++];) {
      fn.apply(this, arguments)
    }
  },
  listener: function(key, fn) {
    if (!this.clientList[key]) {
      this.clientList[key] = []
    }
    this.clientList[key].push(fn)
  },
  remove: function(key, fn) {
    let fns = this.clientList[key]
    if (!fns || fns.length === 0) {
      return false
    }
    for (let i = 0, _fn; _fn = fns[i++];) {
      if (fn === _fn) {
        fns.splice(i, 1)
        return
      }
    }
  }
}
let f1 = val => {
  console.log('A one', val)
}
let f2 = val => {
  console.log('A two', val)
}
let f3 = val => {
  console.log('B one', val)
}
let f4 = val => {
  console.log('B two', val)
}
event2.listener('A', f1)
event2.listener('A', f2)
event2.listener('B', f3)
event2.listener('B', f4)

event2.publisher('A', '康健')
event2.publisher('B', '康健2')
event2.remove('A', f1)
console.log('~~~~~~~~~~~~~~~~~~~~~')
event2.publisher('A', '康健')
event2.publisher('B', '康健2')
