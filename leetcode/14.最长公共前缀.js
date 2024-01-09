/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs === null || strs.length === 0) {
    return ''
  }
  let length = strs[0].length;
  let count = strs.length;
  for (let i = 0; i < length; i++) {
    // i 表示每一列的长度
    let c = strs[0].charAt(i)
    for (let j = 1; j < count; j++) {
        // j 表示每一个数组位置
        // i === strs[j].len 表示，列的长度达到了其中一个最短数组的长度，既结束条件
        // strs[j].charAt(i) !== c 表示，其中一个数组的第 i 个字符不是公共前缀，既结束条件
      if (i === strs[j].length || strs[j].charAt(i) !== c) {
        return strs[0].substring(0, i)
      }
    }
  }
  return strs[0]
}
// @lc code=end

// const strs = ['a']
// const strs = ["ab", "a"]
const strs = ["cir","car"]
// const strs = ['flower', 'flow', 'flight']
// 输出："fl"
console.log(longestCommonPrefix(strs))

// 纵向扫描
// 先取第一个字符作为基准字符
// 然后双循环，一个i循环表示列，另一个 j 循环表示每一个字符串，依次判断每个字符串的第i个字符是否为公共字符串，如果不等，直接返回当前长度的公共字符串；
// 注意，当 i === j循环中的一个字符串长度时，说明i是最短字符串的长度，可以返回当前长度的公共字符串了;