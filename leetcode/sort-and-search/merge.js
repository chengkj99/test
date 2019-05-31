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
// var merge = function(nums1, m, nums2, n) {
//   let index1 = 0
//   let index2 = 0
//   while (index2 < n - 1) {
//     if (nums1[index1] === 0) {
//       nums1.splice(index1, 1, nums2[index2])
//       index2++
//       index1++
//     } else if (nums2[index2] <= nums1[index1]) {
//       nums1.splice(index1, 0, nums2[index2])
//       index2++
//       index1++
//     } else {
//       index1++
//     }
//     if (index1 > m) {
//       let rest = nums2.slice(index2)
//       let len = rest.length
//       nums1.splice(m + 1, len, ...rest)
//       nums1.slice(0, m + n - 1)
//       return nums1
//     }
//     nums1.slice(0, m + n - 1)
//   }
//   return nums1
// }
// 思路：引入两个索引变量，遍历两个数组的每一个值进行判断，判断成功累加，直到索引值分别都与数组长度相等。
// 这种方式的问题是引入了一个变量，如果要去直接插入到 nums1 中呢
// var merge = function(nums1, m, nums2, n) {
//   let res = []
//   let i = j = 0
//   while (i < m || j < n) {
//     // 处理边界非法值
//     if (i < m && !nums1[i]) {
//       i++
//       continue
//     }
//     if (j < n && !nums2[j]) {
//       j++
//       continue
//     }
//     // 处理当一个数组到结尾时的情况
//     if (i === m && j < n) {
//       res.push(nums2[j])
//       j++
//       continue
//     }
//     if (j === n && i < m) {
//       res.push(nums1[i])
//       i++
//       continue
//     }
//     // 正常处理
//     if (nums1[i] <= nums2[j]) {
//       res.push(nums1[i])
//       i++
//       continue
//     }
//     if (nums1[i] >= nums2[j]) {
//       res.push(nums2[j])
//       j++
//       continue
//     }
//   }
//   return res
// }

// 将数组尾部充当占位符的 0 替换掉，然后排序
var merge = function(nums1, m, nums2, n) {
  nums1.splice(m, n, ...nums2)
  nums1.sort((a, b) => a - b)
  return nums1
}
let nums1 = [-1, 0, 0, 3, 3, 3, 0, 0, 0]
let nums2 = [1, 2, 2]
let m = 6
let n = 3

console.log(merge(nums1, m, nums2, n)) // [-1,0,0,1,2,2,3,3,3]
