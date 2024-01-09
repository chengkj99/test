/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
// 暴力穷举法
// var maxArea = function(height) {
//     let i = 0
//     let len = height.length
//     let maxArea  = 0
//     while(i < len) {
//         for (let j = i + 1; j < len; j++) {
//             let w  = j - i
//             let h = Math.min(height[j], height[i])
//             let area  = w * h
//             maxArea = Math.max(maxArea, area)
//         }
//         i++
//     }
//     return maxArea
// };

// 双指针法
var maxArea = function(height) {
    let len = height.length
    let l = 0
    let r = len - 1
    let maxValue = 0
    while(l < r) {
        let area = Math.min(height[l], height[r]) * (r - l)
        maxValue = Math.max(maxValue, area)
        if (height[l] < height[r]) {
            l++
        } else {
            r--
        }
    }
    return maxValue
 }
// @lc code=end



console.log(maxArea([1,8,6,2,5,4,8,3,7]))
// console.log(maxArea([1, 1]))
// console.log(maxArea([1,8,6,9]))

/**
 * 最初想到的是暴力穷举法，取一位和后面的每一位进行一一计算，计算最大值
 * 面积公式是：
 * 两个指针指向的数字中较小值∗指针之间的距离: min(height[i], height[j]) * （j-i） 
 * 
 * 
 * 看了题解了解到：双指针法
 * 使用双指针法进行缩减搜索空间。
 * 
 * 如何移动：
 * 指针每一次移动，都意味着排除掉了一个柱子，排除的应该是短的那根短柱子，
 * 只能是移动短柱子，因为移动短柱子，高度可能会增加，即使（指针之间的距离）缩短，面积可能会增加；
 * 但是如果移动长柱子，意味着（指针之间的距离）缩短，而短柱子是决定水面的高度，面积则肯定缩小。
 * 
 * */ 
