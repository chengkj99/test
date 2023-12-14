/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let occ = new Set()
  let len = s.length
  let rk = -1
  let maxlen = 0

  for (let i = 0; i < len; i++) {
    if (i != 0) {
      occ.delete(s.charAt(i - 1))
    }
    while (rk + 1 < len && !occ.has(s.charAt(rk + 1))) {
      occ.add(s.charAt(rk + 1))
      rk++
      maxlen = Math.max(maxlen, rk - i + 1)
    }
  }
  return maxlen
}

console.log(lengthOfLongestSubstring('dvdf'))
// @lc code=end

// 滑动窗口
// 外层for循环用i控制每一个起始点
// 里面的while rk 指针控制每一个终止点
// 每次 while循环后，计算长度
