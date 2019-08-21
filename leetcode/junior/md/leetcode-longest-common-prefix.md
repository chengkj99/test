---
title: LeetCode 最长公共前缀
date: 2019-05-07 10:35:45
tags:
- leetcode
thumbnail: https://ckj-bucket.oss-cn-beijing.aliyuncs.com/bua-rsp/leetcode-white.png
---

编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

**示例 1:**
```
输入: ["flower","flow","flight"]
输出: "fl"
```

**示例 2:**
```
输入: `["dog","racecar","car"]`
输出: ""
解释: 输入不存在公共前缀。
```

**说明:**

所有输入只包含小写字母 a-z 。

**解题:**

```js
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.constructor !== Array) { return '' }
  if (strs.length === 0) { return '' }
  if (strs.length === 1) { return strs[0] }
  let res = ''
  let countIndex = 0
  while (true) {
    let tem = ''
    let isSame = strs.every((value, index, arr) => {
      if (value[countIndex] !== '' && !value[countIndex]) { return false }
      if (index === 0) {
        tem = value[countIndex]
        return true
      }
      return tem === value[countIndex]
    })
    if (isSame) {
      res = res + tem
      countIndex++
    } else {
      return res
    }
  }
}

console.log(longestCommonPrefix(["flower","flow","flight"])); // fl

```

**解题思路:**

对字符串数组中的每一个元素进行等价判断，如果相等就继续进行第二个元素进行等价判断，直到不相等为止。

做题过程中，遗漏了对异常和边界情况的考虑，如在 while 循环中漏了对超出数组边界值的终止循环判断；也少了对数组类型的判断和数组为长度为 0 和为 1 时候的判断。
