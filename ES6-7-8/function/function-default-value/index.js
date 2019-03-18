/**
 * Created by MaxCheng on 2016/9/27.
 */
//函数的拓展

//1.函数的默认赋值


//在ES6之前，不能直接为函数的参数指定默认值，只能采用变通的方法。

/*
 下面代码检查函数log的参数y有没有赋值，如果没有，则指定默认值为World。
 这种写法的缺点在于，如果参数y赋值了，但是对应的布尔值为false，则该赋值不起作用。
 就像上面代码的最后一行，参数y等于空字符，结果被改为默认值。
 为了避免这个问题，通常需要先判断一下参数y是否被赋值，如果没有，再等于默认值。
 */

function log(x,y) {
    // 为了避免这个问题，通常需要先判断一下参数y是否被赋值，如果没有，再等于默认值。
    if (typeof y === 'undefined') {
        y = 'CHINA';
    }

    y= y || 'WORLD';
    console.log(x,y);
}

log('你好','世界');//你好 世界
log('你好');//你好 CHINA
log('你好', '');//你好 WORLD , 虽然传了值但是当作被传默认值处理

//ES6
function log(x, y = 'World') {
    console.log(x, y);
}

log('Hello') // Hello World
log('Hello', 'China') // Hello China
log('Hello', '') // Hello
console.log('---------------------');
//函数的length属性 :
//length属性的含义是，该函数预期传入的参数个数。
// 某个参数指定默认值以后，预期传入的参数个数就不包括这个参数了。
(function (a) {}).length // 1
(function (a = 5) {}).length // 0
(function (a, b, c = 5) {}).length // 2

console.log('---------------------');
//应用 :利用参数默认值，可以指定某一个参数不得省略，如果省略就抛出一个错误。
function throwIfMissing() {
    throw new Error('Missing parameter');
}

function foo(mustBeProvided = throwIfMissing()) {
    return mustBeProvided;
}

foo()
// Error: Missing parameter

console.log('---------------------');


