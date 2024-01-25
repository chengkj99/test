/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 * 给你一个长度为 n 的整数数组 nums 和 一个目标值 target。
 * 请你从 nums 中选出三个整数，使它们的和与 target 最接近。
 * 返回这三个数的和。
 * 假定每组输入只存在恰好一个解。
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums.sort((a, b) => (a - b))
  let len = nums.length
  let closest = nums[0] + nums[1] + nums[len - 1];
  for (let i = 0; i < len - 2; i++) {
    let j = i + 1
    let k = len - 1
    while(j < k) {
      let sum = nums[i] + nums[j] + nums[k]
      if (sum < target) {
        j++
      } else if (sum > target) {
        k--
      } else {
        return sum
      }
      if (Math.abs(sum - target) < Math.abs(closest - target)) {
        closest = sum
      }
    }
  }
  return closest
};
// @lc code=end

