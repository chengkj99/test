// 泛型，支持多种类型的的类型，就是类型的抽象。
// 泛型也可以说是类型的类，类型是泛型的实例。
// 函数返回任何接收到的值
// 不用泛型：只能接收一种类型
function identity1(arg) {
    return arg;
}
// 不用泛型: 接收的类型和返回的类型无法保持一致
function identity2(arg) {
    return arg;
}
// 用泛型, 这里的 T 是一个类型变量，帮我们捕获任何传入的类型，因为它可以表示多个类型，所以把这个版本的函数叫做泛型。
function identity3(arg) {
    return arg;
}
console.log(typeof identity3(3));
console.log(typeof identity3('3'));
