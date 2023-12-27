/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 * 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。
 * 回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 * 例如，121 是回文，而 123 不是。
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let s = ('' + x).split('')
  if (s[0] === '+' || s[0] === '-') {
    return false
  }
  let len = s.length
  let i = 0
  while (i < Math.floor(len / 2)) {
    if (s[i] === s[len - 1 - i]) {
        i++
        continue
    } else {
        return false
    }
  }
  return true
}
// @lc code=end
// 很快实现了
// 先判断首位如果是有符合的数值，肯定不是回文数了
// 然后判断普通数值，依次对比对应的首位和尾位，相等继续，不相等返回 false
// 最后返回true,说明全都相等
