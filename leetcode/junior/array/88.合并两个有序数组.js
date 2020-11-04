/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// 输入：
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3

// 输出：[1,2,2,3,5,6]

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// var merge = function(nums1, m, nums2, n) {
//   let temp = []
//   while (nums1.length > 0 && nums2.length > 0) {
//     if(nums1[0] < nums2[0]) {
//       temp.push(nums1.shift())
//     } else {
//       temp.push(nums2.shift())
//     }
//   }
//   return temp.concat(nums1, nums2)
// };

// 先合并再排序，时间复杂度较差
var merge = function (nums1, m, nums2, n) {
  nums1.splice(m - n, n, ...nums2)
  nums1.sort((a, b) => (a - b))
  return nums1
};
// 双指针从前往后
var merge = function (nums1, m, nums2, n) {
  let i = 0
  let n1 = 0
  let n2 = 0
  while (i < m + n - 1) {
    if (nums1[n1] < nums2[n2] && n1 < m) {
      nums1[i] = nums1[n1]
      n1++
      i++
    } else {
      nums1[i] = nums2[n2]
      n2++
      i++
    }
  }
  return nums1
};

// 双指针从后往前
var merge = function (nums1, m, nums2, n) {
  let n1 = m - 1
  let n2 = n - 1
  let len = m + n - 1
  while (n1 >= 0 && n2 >= 0) {
    if (nums1[n1] < nums2[n2]) {
      nums1[len] = nums2[n2]
      n2--
      len--
    } else {
      nums1[len] = nums1[n1]
      n1--
      len--
    }
  }
  // 上面的逻辑有两种情况，nums2 先遍历完，此时 n2 为 -1，则下面这行代码是不会起作用
  // 如果是nums1 先遍历完，则 nums2 会有多余的数据项，这些多余的数据项应该是 已排序的均小于 nums1 （n2, m + n）的数据项， 将（0，n2）这些多余的数据项复制到 nums1 即可。
  // 表示将 nums2 数组从下标 0 位置开始，拷贝到nums1数组中，从下标 0 位置开始，长度为 n2 + 1
  nums1.splice(0, n2 + 1, ...nums2.slice(0, n2 + 1));
  return nums1
};
// @lc code=end

console.log('##', merge([2, 0], 1, [1], 1));
