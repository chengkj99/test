// 汉明距离
// 两个整数之间的汉明距离指的是这两个数字对应二进制位不同的位置的数目。

// 给出两个整数 x 和 y，计算它们之间的汉明距离。

// 注意：
// 0 ≤ x, y < 231.

// 示例:
// 输入: x = 1, y = 4

// 输出: 2
// 解释:
// 1   (0 0 0 1)
// 4   (0 1 0 0)
//        ↑   ↑
// 上面的箭头指出了对应二进制位不同的位置。

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
// 首先将两个数异或操作，同为 0 ，异为 1，然后，计算 1 的个数即是汉明距离。
var hammingDistance = function(x, y) {
  let z = x ^ y
  let count = 0
  while (z != 0) {
    count++
    z &= z - 1
  }
  return count
}

console.log('hammingDistance', hammingDistance(1, 4))
