class A {
  constructor(name) {
    this.name = name
  }
  instance = null

  getInstance() {
    if(this.instance) {
      return this.instance
    }
    this.instance = new A()
    return this.instance
  }

  getName() {
    return this.name
  }
  setName(value) {
    this.name = value
  }
}

new A()
const a = A.getInstance()
const b = A.getInstance()
a.setName('kangjian')
console.log(a.getName())
console.log(b.getName())
