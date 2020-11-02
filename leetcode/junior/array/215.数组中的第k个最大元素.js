/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// sort 排序
var findKthLargest = function (nums, k) {
  const _nums = [...nums]
  _nums.sort((a, b) => (b - a))
  return _nums[k - 1] // 第 k 个大的值，它的索引值是 k - 1
};

// 冒泡排序
var findKthLargest = function (nums, k) {
  let len = nums.length
  for (let i = 0; i < k; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[i] < nums[j]) {
        let temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp
      }
    }
  }
  return nums[k - 1] // 第 k 个大的值，它的索引值是 k - 1
};

// 快速排序，再选择第 k 个位置的值
var findKthLargest = function (nums, k) {
  const quickSort = (nums) => {
    if (nums.length < 1) return []
    let midIndex = Math.floor(nums.length / 2)
    let midValue = nums.splice(midIndex, 1)[0]
    let left = []
    let right = []
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > midValue) {
        left.push(nums[i])
      } else {
        right.push(nums[i])
      }
    }
    return quickSort(left).concat(midValue, quickSort(right))
  }
  return quickSort(nums)[k - 1]
};

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2))
// @lc code=end
