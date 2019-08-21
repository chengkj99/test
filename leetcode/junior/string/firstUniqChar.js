// 字符串中的第一个唯一字符

// 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。

// 案例:

// s = "leetcode"
// 返回 0.

// s = "loveleetcode",
// 返回 2.


// 注意事项：您可以假定该字符串只包含小写字母。

/**
 * @param {string} s
 * @return {number}
 */
// 方法：用除了当前元素的其他元素找当前元素，找到则是非唯一元素，找不到则是唯一元素，结束
var firstUniqChar = function(s) {
  let arr = s.split('')
  let len = arr.length
  if (len === 1) {return 0}
  let count = 0
  for (let i = 0; i < len; i++) {
      let cur = arr.splice(i, 1)
      if (arr.length > 0 && arr.indexOf(...cur) === -1) {
         return i
      }
      arr.splice(i, 0, ...cur)
  }
  return -1
};
