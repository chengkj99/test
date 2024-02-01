/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 *
 * https://leetcode.cn/problems/letter-combinations-of-a-phone-number/description/
 *
 * algorithms
 * Medium (58.95%)
 * Likes:    2742
 * Dislikes: 0
 * Total Accepted:    806.2K
 * Total Submissions: 1.4M
 * Testcase Example:  '"23"'
 *
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。
 * 
 * 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
 * 
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：digits = "23"
 * 输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：digits = ""
 * 输出：[]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：digits = "2"
 * 输出：["a","b","c"]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 <= digits.length <= 4
 * digits[i] 是范围 ['2', '9'] 的一个数字。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} digits - 输入的数字字符串
 * @return {string[]} - 返回所有可能的字母组合
 */
var letterCombinations = function(digits) {
  // 如果输入字符串为空，则直接返回空数组
  if (digits.length === 0) {
      return [];
  }

  // 数字到字母的映射关系
  const digitMap = {
      '2': 'abc',
      '3': 'def',
      '4': 'ghi',
      '5': 'jkl',
      '6': 'mno',
      '7': 'pqrs',
      '8': 'tuv',
      '9': 'wxyz'
  };

  // 保存最终结果的数组
  const result = [];
  

  /**
   * 回溯函数，用于生成当前数字对应的所有可能字母组合
   * @param {number} index - 当前数字的索引
   * @param {string} currentCombination - 当前已生成的字母组合
   */
  function backtrack(index, currentCombination) {
      // 如果当前数字的索引达到字符串末尾，说明每个数字对应的字符串（digitMap）都连接了一次，将当前字母组合加入结果数组
      if (index === digits.length) {
          result.push(currentCombination);
          return;
      }

      // 获取当前数字对应的字母集合
      const currentDigit = digits[index];
      const letters = digitMap[currentDigit];

      // 遍历当前数字对应的字母集合
      for (let i = 0; i < letters.length; i++) {
          // 递归调用，尝试组合其他数字对应的字母
          backtrack(index + 1, currentCombination + letters[i]);
      }
  }

  // 初始调用回溯函数，从第一个数字开始生成字母组合
  backtrack(0, '');

  // 返回最终结果数组
  return result;
};

// 示例测试
console.log(letterCombinations("78")); // 输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
// console.log(letterCombinations(""));   // 输出：[]
// console.log(letterCombinations("2"));   // 输出：["a","b","c"]

// @lc code=end

