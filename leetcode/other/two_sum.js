// Total Accepted: 443723
// Total Submissions: 1412886
// Difficulty: Easy
// Contributors: Admin
// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
//
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
//
// Example:
// Given nums = [2, 7, 11, 15], target = 9,
//
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].
// Subscribe to see which companies asked this question.

// 一个数组，选择几个元素相加等于给定的一个目标。返回这些元素组成的数组。

function twoSum (nums, target) {
  // 思路：当一个值==目标值的时候，遍历；当两个值等于目标值的时候,当三个值等于目标值的时候...
  let numsNew = []
  if (nums.indexOf(target) > -1) {
    return numsNew[0] = [nums.indexOf(target) + 1]
  }
  // target == target - 1 + 1 == target - 2 + 2 == target - 3 +3 == target - N + N
  for (let i = 0; i < nums.length; i++) {
    if (nums.indexOf(i) > -1) {
      numsNew[0] = nums.indexOf(i) + 1
      if (nums.indexOf(target - i) > -1) {
        numsNew[1] = nums.indexOf(target - i) + 1
      }
    }
  }
  return numsNew
}

(function functionName() {
  let array = [1,2,3,4,5]
  let target = 10
  console.log(twoSum(array,target))
})()
