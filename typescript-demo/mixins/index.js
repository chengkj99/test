var A = /** @class */ (function () {
    function A() {
    }
    A.prototype.getNameA = function () {
        console.log("A");
    };
    return A;
}());
var B = /** @class */ (function () {
    function B() {
    }
    B.prototype.getNameB = function () {
        console.log("B");
    };
    return B;
}());
var C = /** @class */ (function () {
    function C() {
    }
    C.prototype.getNameC = function () {
        console.log("C");
        this.getNameA();
        this.getNameB();
    };
    return C;
}());
var applyMixins = function (derivedCtor, baseCtors) {
    baseCtors.forEach(function (baseCtor) {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
};
var F = applyMixins(C, [A, B]);
var c = new C();
c.getNameA();
c.getNameB();
c.getNameC();
