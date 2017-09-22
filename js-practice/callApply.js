// 通过call和apply，你可以通过写一个方法，被其他对象调用，而不需要再次便编写。
function func1 () {
  function Product (name, price) {
      this.name = name
      this.price = price
      this.getInfo = function () {
        console.log('我是' + this.name, '价格是' + this.price )
      }

  }

  function Food (name, price) {
    // Product.call(this, name, price)
    Product.apply(this, [name, price])
  }

  function Toy (name, price) {
    Product.apply(this, [name, price])
  }

  // 相当于 Food、Top继承了Product的方法

  let f = new Food('西瓜', '22.00')
  let t = new Toy('玩具熊', '100.00')
  f.getInfo()
  t.getInfo()
}




function func2 () {

  function splat (func) {
    return function (array) {
      return func.apply(null, array)
    }
  }
  let addArrayElements = splat(function (x, y) { return x+ y })
  console.log(addArrayElements([3, 4]))

}

// 打印函数属性
func3 () {
  function unplat () {

  }
}
