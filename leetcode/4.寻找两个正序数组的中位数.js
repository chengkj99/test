/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
/**
 * 给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。
 * 请你找出并返回这两个正序数组的中位数 。
 * 算法的时间复杂度应该为 O(log (m+n)) 。
 *
 * 示例 1：
 * 输入：nums1 = [1,3], nums2 = [2]
 * 输出：2.00000
 * 解释：合并数组 = [1,2,3] ，中位数 2
 *
 * 示例 2：
 * 输入：nums1 = [1,2], nums2 = [3,4]
 * 输出：2.50000
 * 解释：合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5
 */

var findMedianSortedArrays = function (nums1, nums2) {
  let len1 = nums1.length
  let len2 = nums2.length
  let len = len1 + len2
  let isOdd = len % 2 === 0
  let midIndex
  if (isOdd) {
    midIndex = [len / 2, len / 2 - 1]
  } else {
    midIndex = (len - 1) / 2
  }

  let nums = []
  let k1 = 0, k2 = 0
  while (k1 < len1 && k2 < len2) {
    if (nums1[k1] < nums2[k2]) {
      nums.push(nums1[k1])
      k1++
    } else {
      nums.push(nums2[k2])
      k2++
    }
  }
  while (k1 < len1) {
    nums.push(nums1[k1])
    k1++
  }
  while (k2 < len2) {
    nums.push(nums2[k2])
    k2++
  }

  if (typeof midIndex === 'object') {
    return (nums[midIndex[0]] + nums[midIndex[1]]) / 2
  } else {
    return nums[midIndex]
  }
}

console.log(findMedianSortedArrays([], [2,3]))
// @lc code=end


// 把数组合并
// 计算数组总长度是偶数还是奇数，计算中位数
// 然后找到中间值
