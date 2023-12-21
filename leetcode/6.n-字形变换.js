/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] N 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
/**
 * 
 * 将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。
 * 比如输入字符串为 "PAYPALISHIRING" 行数为 3 时，排列如下：
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 * 之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，
 * 比如："PAHNAPLSIIGYIR"。
 * 请你实现这个将字符串进行指定行数变换的函数：
 */
// 示例 1：

// 输入：s = "PAYPALISHIRING", numRows = 3
// 输出："PAHNAPLSIIGYIR"

// 示例 2：
// 输入：s = "PAYPALISHIRING", numRows = 4
// 输出："PINALSIGYAHRPI"
// 解释：
// P     I    N
// A   L S  I G
// Y A   H R
// P     I

// 示例 3：
// 输入：s = "A", numRows = 1
// 输出："A"

var convert = function(s, numRows) {
    // 如果行数为 1 或者字符串长度小于等于行数，则直接返回原字符串
    if (s.length < numRows || numRows <= 1) {
        return s
    }

    // 创建一个二维数组来模拟 Z 字形排列
    let rows = []
    for (let i = 0; i < numRows; i++) {
        rows[i] = []
    }
    let row = 0  // 当前行数
    let flag = false // 标记是否要继续向下移动，还是要换方向
    for (let char of s) {
        rows[row].push(char)
        if (row === 0 || row === numRows -1) {
            flag = !flag
        }
        // 根据移动方向更新当前行数
        row += (flag ? 1 : -1)
    }
    let result = ''
    for (let j = 0; j < numRows; j++) {
        result += rows[j].join('')
    }
    return result
};

  // 测试示例
  console.log(convert("PAYPALISHIRING", 3)); // 输出："PAHNAPLSIIGYIR"
  console.log(convert("PAYPALISHIRING", 4)); // 输出："PINALSIGYAHRPI"
  console.log(convert("A", 1)); // 输出："A"
// @lc code=end
// 核心思想是，找到Z字形的排列规律，想到使用二维数组去模拟

// 这段代码使用的是一种模拟 Z 字形排列的方法。这种方法的核心思想是按照 Z 字形排列的规律，将输入字符串中的字符放入二维数组中的对应行，然后按行顺序将字符连接起来，形成新的字符串。

// 关于如何能够想到使用这种方法，通常是通过观察 Z 字形排列的规律来得到灵感。在这种排列中，字符的放置顺序是先向下，然后向右上方，再次向下，依次类推。通过观察这种规律，我们可以想到使用一个二维数组来模拟这种排列过程，然后根据字符的放置顺序将字符放入对应的行中。

// 在实现这种方法时，我们需要考虑如何处理 Z 字形排列的转折点，以及如何根据当前的移动方向更新当前行数。这就是代码中涉及到的部分逻辑，通过这些逻辑，我们可以模拟 Z 字形排列的过程，将输入字符串按照指定的行数进行 Z 字形排列，并返回新的字符串。



