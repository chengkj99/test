//  有效的字母异位词

// 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的一个字母异位词。

// 示例 1:
// 输入: s = "anagram", t = "nagaram"
// 输出: true

// 示例 2:
// 输入: s = "rat", t = "car"
// 输出: false

// 说明:
// 你可以假设字符串只包含小写字母。

// 进阶:
// 如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 方法1:
 // 如果长度不一致，false
// 如果长度一致，对两个字符串，分别提取一个字母，分别算每一个字母出现的次数，得两个对象
// 对比对象

// 方法2：
// 如果长度不一致，false
// 对一个字符串进行遍历，取一个字符，在另外一个字符串中查找并删除，判断最后是不是能够边空
// 验证通过

var isAnagram = function(s, t) {
  if (s.length !== t.length) return false
  let tArr = t.split('')
  for (let i = 0; i < t.length; i++) {
    let cur = s[i]
    let index = tArr.indexOf(cur)
    if (index === -1) {
      return false
    }
    tArr.splice(index, 1)
  }
  if (tArr.length > 0) {
    return false
  }
  return true
};

let s = 'abc'
let t = 'bc'

console.log(isAnagram(s, t)) // false
