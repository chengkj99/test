/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 * 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。
 * 如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。
 * 假设环境不允许存储 64 位整数（有符号或无符号）。
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
// 示例 1：
// 输入：x = 123
// 输出：321

// 示例 2：
// 输入：x = -123
// 输出：-321

// 示例 3：
// 输入：x = 120
// 输出：21

// 示例 4：
// 输入：x = 0
// 输出：0

var reverse = function(x) {
    if (x === 0) return 0
    let f = ''
    let l = []
    
    let xl = String(x).split('')
    if (xl[0] === '-') {
        f = xl.shift()
    }
    for (let i = xl.length - 1 ; i >= 0; i--) {
        if(xl[i] === 0 && l.length === 0) {
            continue
        }
        l.push(xl[i])
    }
    let s = +(f + l.join(''))

    if (s > 2**31 - 1 || s < -(2**31)) {
        return 0
    }
    return s
};

console.log(reverse(-123))
// @lc code=end

// 这一次是独立完成，没有参考其他答案
// 解题的感受是一步步的分解问题
// 先考虑主流程
// 1. 把数字转字符，转数组
// 2. 转为数组后，首先考虑第一位，如果是符号，先存出来
// 3. 然后从数组的最后一位开始遍历，反转到新的数组里
// 4. 把反转后的数组转为数字
// 5. 判断反转后的数字大小，如果超过边界值，返回 0 
// ** 操作符 等同于 Math.pow()

