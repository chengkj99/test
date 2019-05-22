// 合并两个有序数组
// 给定两个有序整数数组 nums1 和 nums2，将 nums2 合并到 nums1 中，使得 num1 成为一个有序数组。

// 说明:
// 初始化 nums1 和 nums2 的元素数量分别为 m 和 n。
// 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。

// 示例:
// 输入:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3

// 输出: [1,2,2,3,5,6]

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
//
var merge = function(nums1, m, nums2, n) {
  let index1 = 0
  let index2 = 0
  while (index2 < n - 1) {
    if (nums1[index1] === 0) {
      nums1.splice(index1, 1, nums2[index2])
      index2++
      index1++
    } else if (nums2[index2] <= nums1[index1]) {
      nums1.splice(index1, 0, nums2[index2])
      index2++
      index1++
    } else {
      index1++
    }
    if (index1 > m) {
      let rest = nums2.slice(index2)
      let len = rest.length
      nums1.splice(m + 1, len, ...rest)
      nums1.slice(0, m + n - 1)
      return nums1
    }
    nums1.slice(0, m + n - 1)
  }
  return nums1
}

let nums1 = [1, 2, 3, 0, 0, 0]
let nums2 = [2, 5, 6]
let m = 3
let n = 3

console.log(merge(nums1, m, nums2, n))
