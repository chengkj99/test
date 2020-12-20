const sayHello = () => {
    console.log('Hello')
}

const sayHi = () => {
    console.log('Hi');
}

// exports 是 module.exports 的引用，可以修改，不能重写

exports.sayHello = sayHello
exports.sayHi = sayHi