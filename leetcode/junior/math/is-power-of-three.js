// 3的幂
// 给定一个整数，写一个函数来判断它是否是 3 的幂次方。

// 示例 1:
// 输入: 27
// 输出: true
// 示例 2:

// 输入: 0
// 输出: false
// 示例 3:

// 输入: 9
// 输出: true
// 示例 4:

// 输入: 45
// 输出: false

// 进阶：
// 你能不使用循环或者递归来完成本题吗？

/**
 * @param {number} n
 * @return {boolean}
 */

// 循环
var isPowerOfThree1 = function(n) {
  let num = 1
  while (num < n) {
    num = num * 3
  }
  return num === n
}

// 递归
var isPowerOfThree2 = function(n) {
  if (n < 3) {
    return n === 1
  } else {
    n = n / 3
    return isPowerOfThree2(n)
  }
}

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


console.log('###', isPowerOfThree(Math.pow(3, 1)))
console.log('###', isPowerOfThree(Math.pow(3, 2)))
console.log('###', isPowerOfThree(27))
console.log('###', isPowerOfThree(Math.pow(3, 4)))
console.log('!!!', isPowerOfThree(12))
