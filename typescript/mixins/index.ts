class A {
  getNameA() {
    console.log("A");
  }
}

class B {
  getNameB() {
    console.log("B");
  }
}

class C {
  getNameC() {
    console.log("C");
    this.getNameA()
    this.getNameB()
  }
  getNameB: () => void;
  getNameA: () => void;
}

const applyMixins = function (derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach(baseCtor => {
      Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
          derivedCtor.prototype[name] = baseCtor.prototype[name];
      })
  });
}
const F = applyMixins(C, [A, B]);

const c = new C();
c.getNameA();
c.getNameB();
c.getNameC();

