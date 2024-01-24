/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 * 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 
 * 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请
 * 你返回所有和为 0 且不重复的三元组。
 * 注意：答案中不可以包含重复的三元组。
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// 1 个人解 worong
// var threeSum = function(nums) {
//   let i = 0
//   let j = i + 1
//   let len = nums.length
//   let res = []
//   while (j < len) {
//     let a = nums[i]
//     let b = nums[j]
//     for (let x = j + 1; x < len; x++) {
//       let c = nums[x]
//       if ((i!=j) && (i!=x) && (j!=x) && (a + b + c) === 0) {
//         res.push([a, b, c])
//       }
//     }
//     i++
//     j++
//   }
//   return res
// };

// 2 devv 三指针法
function threeSum (nums) {
  nums.sort((a, b) => (a - b))
  let res = []
  let len = nums.length

  // len - 2 留一位
  for (let i = 0; i < len - 2; i++) {

    if (i > 0 && nums[i] === nums[i-1]) {
      // 排除重复的 i
      continue
    }

    let j = i + 1
    let k = len - 1

    while(j < k) {
      let sum = nums[i] + nums[j] + nums[k]
      if ((i !== j) && (i !== k) && (j !== k) && sum === 0) {
        res.push([nums[i], nums[j], nums[k]])
        while(j < k && nums[k] === nums[k - 1]) { k-- }
        while(j < k && nums[j] === nums[j + 1]) { j++ }
        j++
        k--
      } else if (sum < 0) {
        j++
      } else {
        k--
      }
    }
  }
  return res
}
// @lc code=end

console.log(threeSum([-1,0,1,2,-1,-4]))


/**
 * 总结：
 * 
 * 1 个人
 * 最初想到的是三指针法，奈何自己不知道如何移动三个指针，知道固定前两个，移动第三个，但是最终是覆盖的case不全。
 * 
 * 2 devv
 * 三指针法：用于解决一些寻找最优组合的场景
 * 排序：由于这道题不要求顺序，可以先排序，排序是为了方便的移动指针
 * 三指针：外面一层 for 循环控制第一个指针，里面一个 while 循环控制两个指针
 */
