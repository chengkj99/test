// 验证回文字符串

// 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

// 说明：本题中，我们将空字符串定义为有效的回文串。

// 示例 1:

// 输入: "A man, a plan, a canal: Panama"
// 输出: true
// 示例 2:

// 输入: "race a car"
// 输出: false

/**
 * @param {string} s
 * @return {boolean}
 */
// 方法: 对比第一位和最后一位，第二位和倒数第二位，遇到非数字或字母字符忽略，以此类推...

// var isValidStr = function(ch) {
//   const regx = /^[A-Za-z0-9]*$/;
//   if (regx.test(ch)) {
//     return true;
//   }
//   return false;
// }
var isValidStr = function(ch) {
  if (ch >= "a" && ch <= "z") return true;
  if (ch >= "A" && ch <= "Z") return true;
  if (ch >= "0" && ch <= "9") return true;
  return false;
};

var isPalindrome = function(s) {
  if (s === "") {
    return true;
  }
  let left = 0;
  let right = s.length - 1;

  while (right > left) {
    if (!isValidStr(s[left])) {
      left++;
    } else if (!isValidStr(s[right])) {
      right--;
    } else if (s[left].toLocaleLowerCase() !== s[right].toLocaleLowerCase()) {
      return false;
    } else {
      left++;
      right--;
    }
  }
  return true;
};
