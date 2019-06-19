// 计数质数
// 统计所有小于非负整数 n 的质数的数量。

// 示例:
// 输入: 10
// 输出: 4
// 解释: 小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。

/**
 * @param {number} n
 * @return {number}
 */

// 方法1：
var countPrimes = function(n) {
  let count = 0
  const isPrime = value => {
    if (value <= 1) return false
    // for (let i = 2; i < value; i++) {
    // 小于 根value 的值即可，因为 2 * 5 =10，和 5*2 = 10 是重复的，判断一次即可。
    for (let i = 2; i * i <= value; i++) {
      if (value % i === 0) {
        return false
      }
    }
    return true
  }
  for (let i = 2; i < n; i++) {
    if (isPrime(i)) {
      count++
    }
  }
  return count
}

// 方法2：标记法

var countPrimes2 = function(n) {
  let count = 0
  const isPrime = []
  // 先标记 true
  for (let i = 2; i < n; i++) {
    isPrime[i] = true
  }
  // 标记 2 的倍数，3 的倍数... i 的倍数，直到 i * i >= n
  for (let i = 2; i * i < n; i++) {
    if (!isPrime[i]) continue
    for (let j = i * i; j < n; j +=i) {
      isPrime[j] = false
    }
  }
  // 获取未标记的质数
  for (let i = 2; i < n; i++) {
    isPrime[i] && count++
  }
  return count
}

console.log('!!!,', countPrimes2(10))
