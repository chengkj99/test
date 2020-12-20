const say = require('./exports-currency')
const Say = require('./module-exports-currency')

// use exports 
say.sayHello()
say.sayHi()

// use module.exports 
const say2 = new Say()
say2.sayHello()
say2.sayHi()