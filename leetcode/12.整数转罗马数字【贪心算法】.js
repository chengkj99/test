/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
/**
 * 字符          数值
 * I             1
 * V             5
 *
 * X             10
 * L             50
 *
 * C             100
 * D             500
 *
 * M             1000
 */
var intToRoman = function (num) {
  let res = ''
  let romanList = [
    'I',
    'IV',
    'V',
    'IX',
    'X',
    'XL',
    'L',
    'XC',
    'C',
    'CD',
    'D',
    'CM',
    'M'
  ]
  let numList = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000]
  let i = numList.length - 1
  // 先计算最大值的匹配关系  
  while (i >= 0) {
    while (num >= numList[i]) {
      res += romanList[i]
      num -= numList[i]
    }
    i--
  }
  return res
}
console.log(intToRoman(3))
// @lc code=end

// 贪心算法
// 把一个大问题，分为一个个小问题，每次求最优解
// 这是一种通过局部最优解，来求全局最优解的方法