/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var findValueIndex = (nums, target) => {
  let start = 0
  let end = nums.length - 1
  while (start < end) {
    let midIndex = Math.floor((start + end) / 2)
    if (nums[midIndex] > target) {
      end = midIndex - 1
    } else if (nums[midIndex] < target) {
      start = midIndex + 1
    } else {
      return midIndex
    }
  }
  return -1
}

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let first = nums[i]
    let second = target - first
    otherNums = nums.slice(i + 1)
    let secondIndex = findValueIndex(otherNums, second)
    if (secondIndex > -1) {
      return [i, secondIndex]
    }
    console.log('nums', nums)
  }
};


console.log(twoSum([2, 7, 11, 15], 9))
// @lc code=end
