// 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。

// 例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
// 满足要求的三元组集合为：
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const res = []
  const cache = []
  let leftIndex = 0
  let rightIndex = 0
  const target = 0
  const len = nums.length
  for (let i = 0; i < len; i++) {
    leftIndex = i
    for (let j = i + 1; j < len; j++) {
      rightIndex = j
      let leftValue = nums[leftIndex]
      let rightValue = nums[rightIndex]
      let thirdValue = target - (leftValue + rightValue)
      const thirdIndex = nums.slice(rightIndex).indexOf(thirdValue)
      const curIndexs = [leftIndex, rightIndex, thirdIndex]
      if (thirdIndex > -1 && rightIndex + thirdIndex > rightIndex) {
        if (!isRepeat){
          cache.push(curIndexs)
          res.push([leftValue, rightValue, thirdValue])
        }
      }
    }
  }
  return [res, cache]
}

const nums = [-1, 0, 1, 2, -1, -4]
console.log(threeSum(nums))

// 目标值是 0
// 将 [0,1] 作为一个值，找另一个匹配的值
