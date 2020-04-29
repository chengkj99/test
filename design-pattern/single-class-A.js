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

const a = new A()
const b = new A()
a.setName('kangjian')
console.log(a.getName())
console.log(b.getName())
