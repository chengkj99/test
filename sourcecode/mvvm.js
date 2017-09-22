// 观察对象的数据变化
// 当变化时，触发回调
// 需要一个观察器，需要一个回调

export class Mvvm {
  constructor (obj, callback) {
    if (Object.prototype.toString.call(obj) !== '[object Object]') {
      throw new Error('This parameter must be an object：' + obj)
    }
    this.$callback = callback;
    this.observe = this.observe.bind(this)
    this.observe(obj);
  }
  observe (obj) {
    Object.keys(obj).forEach( (key, index, keyArr ) => {
      let val = obj[key]
      Object.defineProperty(obj, key, {
        get: function () {
          return val
        },
        set: function (val, newVal) {
          this.$callback(val, newVal)
          // obj[key] = newVal
        }
      })
      if (Object.prototype.toString.call(obj[key]) !== '[object Object]') {
        this.observe(obj[key])
      }
    })
  }
}

// export default Mvvm
