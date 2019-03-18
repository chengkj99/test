// 装饰器 decorator
// 装饰器可以不改变原类的情况下，扩展一个类的功能
// 基于 Object.definedProperty 所以三个属性，依次是
// 1.target: 修饰的原型对象
// 2.key: 修饰的属性
// 3.descriptor: 描述符

function decoratorArmout(target, key, descriptor) {
  const method = descriptor.value
  let moreDef = 100
  let ret

  descriptor.value = (...args) => {
    args[0] += moreDef
    ret = method.apply(target, args)
    return ret
  }
  return descriptor
}

class Man {
  constructor(def = 2, atk = 3, hp = 3) {
    this.init(def, atk, hp)
  }ss

  @decoratorArmout
  init(def, atk, hp) {
    this.def = def
    this.atk = atk
    this.hp = hp
  }

  toString() {
    return `防御力${this.def}, 攻击力${this.atk}, 血量${this.hp}`
  }
}

var tony = new Man()
console.log(`当前状态 ===> ${tony}`)
