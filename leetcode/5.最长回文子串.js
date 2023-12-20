/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
/**
 * 给你一个字符串 s，找到 s 中最长的回文子串。
 * 如果字符串的反序与原始字符串相同，则该字符串称为回文字符串。
 * 示例 1：
 * 输入：s = "babad"
 * 输出："bab"
 * 解释："aba" 同样是符合题意的答案。
 * 
 * 示例 2：
 * 输入：s = "cbbd" 
 * 输出："bb"
 */
function longestPalindrome(s) {
    if (s.length <= 1) return s;
  
    let maxSubStart = 0;
    let maxSubLength = 0;
    for (let i = 0; i < s.length; i++) {
        //expandAroundCenter函数被调用两次的目的是为了处理两种情况：一种是以当前字符为中心的回文子串，另一种是以当前字符和下一个字符之间的空隙为中心的回文子串。这是因为回文子串可以以单个字符或者两个字符为中心，所以我们需要分别处理这两种情况，然后比较它们的长度，选择最长的作为当前字符的最长回文子串。
        // 从单个字符为中心开始扩展，奇数情况
        const lengthCenteredAtChar = expandAroundCenter(s, i, i)
        // 从两个字符中心开始扩展，偶数情况
        const lengthCenteredAtSpace = expandAroundCenter(s, i, i+1)

        // 取最大的值回文字符长度
        let longestSubstr = Math.max(lengthCenteredAtChar, lengthCenteredAtSpace)
        if (longestSubstr > maxSubLength) {
            maxSubLength = longestSubstr
            // 使用当前字符的位置 i 减去最长回文子串的长度减一的一半，然后向下取整，以得到最长回文子串的起始位置。这是因为回文子串的长度可能是奇数也可能是偶数，所以我们需要根据长度的奇偶性来确定起始位置。
            maxSubStart = i - Math.floor((maxSubLength - 1) / 2)
        }
    }
    return s.substr(maxSubStart, maxSubLength)
  }
  
  function expandAroundCenter(s, left, right) {
    while(left >= 0 && right< s.length && s[left] === s[right]) {
        left--
        right++
    }
    // cc aba dd
    // 0 1  2 3 4  56
    // right: 5- left: 1 - 1 = 3(子串长度)
    // so right - left - 1，其实是子串两边的索引值相减得出的 子串长度 + 1，所以需要再减 1
    return right - left - 1

  }
  
  console.log(longestPalindrome("babad")); // 输出："bab"
//   console.log(longestPalindrome("cbbd"));  // 输出："bb"
// @lc code=end

// 中心扩展法
// expandAroundCenter: 循环以每一个字符为中心向两边扩展
// 计算最长的回文长度



