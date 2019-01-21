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