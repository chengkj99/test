class Say {
    constructor() {}

    sayHello() {
        console.log('Hello');
    }
    sayHi() {
        console.log('Hi');
    }
}

// 如果想返回一个变量，使用 exports = Say 是不行的，Node 不允许重写 exports，这个时候可以使用 module.exports

module.exports = Say