const {
    now
} = require("moment")

let o = {
    name: '123'
}
Object.defineProperty(o, 'name', {
    value: '100',
    writable: false,
    enumerable: true,
    configurable: true
})

o.name = 200
console.log(o)


// 函数防抖
// n 个时间单位后执行

function debounce(fn, delay) {
    let timer
    return function () {
        let self = this
        const args = arguments
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(self, args)
        }, delay)
    }
}

// 函数节流
// 在 n 个单位时间，只执行一次
function throttle(fn, delay) {
    let timer
    let last
    return function () {
        now = +Date
        let self = this
        const args = arguments
        if (last && now < last + delay) {
            timer = setTimeout(() => {
                last = now
                fn.apply(self, args)
            }, dalay)
        } else {
            last = now
            fn.apply(self, args)
        }
    }
}
