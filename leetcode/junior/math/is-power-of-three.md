# 判断一个数是 3 的幂次方

给定一个整数，写一个函数来判断它是否是 3 的幂次方。

## 示例

```js
示例 1:
输入: 27
输出: true

示例 2:
输入: 0
输出: false

示例 3:
输入: 9
输出: true

示例 4:
输入: 45
输出: false
```

## 进阶

你能不使用循环或者递归来完成本题吗？

## 解题

因为进阶部分给予了提示，能不使用循环或递归完成本题吗，于是首先就先用这两种方法解题，再想其他的方法。

首先利用 while 循环，其每次的结果如果小于目标值，一直乘以 3，如果大于等于结果，结束循环，判断结果值是不是等于目前值，如果等于则这个数就是 3 的幂次方，否则就不是。

```js
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  let num = 1
  while (num < n) {
    num = num * 3
  }
  return num === n
}
```

如果使用递归，首先要有一个递归的结束条件，另外需要每次递归的处理过程，然后就一直递归下去，得到递归结果。在本题中，初始条件是 3 的幂次方的待判定结果值，于是想到，每一次除以 3 作为处理过程，最终的结果是一个小于 3 的余数，这个余数如果等于 1，说明能被 3 整除，说明给的数是 3 的幂次方，这也是递归的结束条件。

```js
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  if (n < 3) {
    return n === 1
  } else {
    n = n / 3
    return isPowerOfThree2(n)
  }
}
```

由于进阶中，要求是否可以不适用循环和递归，在借鉴了资料提到了对数的思路，不过这个思路的实现比想象中要困难，因为 JS 数值的精度问题。这里 `getBaseLog(x, y)` 方法得到的是 以 `x` 为底值，`y` 为真数的对数，如果对数是个整数，说明这个数是可以被 3 幂次方得到的。但是 `Math.log(y) / Math.log(x)` 的结果由于精度问题得到的是类似于 `3.0000000000000000004` 的整数，所以，不得不对 `Math.log(y) / Math.log(x)` 的结果值进行四舍五入取整， 并定义一个精度值的安全范围 `accuracyValue` 作为四舍五入后的整数值和处理前的值进行判断是否在安全的精度值范围内，如果 `是` 这个数就被认为是以 3 为底的真数。

```js
/**
 * @param {number} n
 * @return {boolean}
 */
// 利用对数 Math.log()
// 如果以 3 为底的真数是一个整数，则这个真数是 3 的幂次方得到的。
const numbersCloseEnoughToEqual = (n1, n2) => {
  // 精度值的安全范围
  const accuracyValue = 0.00000000001
  return Math.abs(n1 - n2) < accuracyValue
}
const getBaseLog = (x, y) => {
  let value = Math.log(y) / Math.log(x)
  let closeValue = Math.round(value)
  return numbersCloseEnoughToEqual(value, closeValue)
}
var isPowerOfThree = function(n) {
  const baseNumber = 3
  return getBaseLog(baseNumber, n)
}

console.log(isPowerOfThree(3))  // true
console.log(isPowerOfThree(9))  // true
console.log(isPowerOfThree(27)) // true
console.log(isPowerOfThree(81)) // true
console.log(isPowerOfThree(12)) // false
```

