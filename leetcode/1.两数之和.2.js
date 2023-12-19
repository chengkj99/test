// 示例 1：

// 输入：nums = [2,7,11,15], target = 9
// 输出：[0,1]
// 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
// 示例 2：

// 输入：nums = [3,2,4], target = 6
// 输出：[1,2]
// 示例 3：

// 输入：nums = [3,3], target = 6
// 输出：[0,1]

/**
 * 
 * @param {*} array 
 * @param {*} target 
 * @returns 
 * 
 * 解法1：最简单的方式是 两个for循环
 * 解法2：使用 hashMap 来存储遍历过的每一个值，然后再和后面的每一个值进行计算比对
 * 如果比对成功，返回存储过的索引值和当前的索引值。
 */
const twoSum = function (array, target) {
  const endValueMap = {}
  for (let i = 0; i < array.length; i++) {
    let start = array[i]
    let end = target - array[i]
    if (endValueMap[end] != undefined) {
      return [endValueMap[end], i]
    }
    endValueMap[start] = i
  }
  return []
}

let nums = [2, 1, 7, 3, 17, 11, 15],
  target = 9

console.log(twoSum(nums, target))
