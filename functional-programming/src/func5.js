let _ = require('underscore')
// 高阶函数： 以一个函数作为参数、以一个函数作为结果返回、一等公民
// 关于函数传递的思考

class Part {
  p1 () {
    let maxV = _.max([1, 2, 3, 4, 5])
    console.log(maxV)

    let o = [
      {
        name: 'chengkangjian',
        age: 10
      },
      {
        name: 'shifei',
        age: 20
      }
    ]
    let maxV2 = _.max(o, function (val) { return val.age})
    console.log(maxV2)
  }
}
 let P = new Part()
 P.p1()
