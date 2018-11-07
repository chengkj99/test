
// 访问器属性配置 和 getter/setter 不能同时存在


var o = {
  _name: ''
}

// definedProperty 配置
Object.defineProperty(o, 'name', {
  value: 'bananer',
  configurable: true,
  enmurable: true,
  writable: false
})

console.log(o.name) // bananer

o.name = 'zhangsan'

console.log(o.name) // bananer

// --------

var o = {
  _year: ''
}
Object.defineProperty(o, 'year', {
  get: function() {
    return this._year
  },
  set: function(newValue) {
    console.log('设置为', newValue)
    this._year = newValue
  }
})

o.year = 2018
console.log(o.year === o._year) // true
