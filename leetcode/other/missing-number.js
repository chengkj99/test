// 缺失数字
// 给定一个包含 0, 1, 2, ..., n 中 n 个数的序列，找出 0 .. n 中没有出现在序列中的那个数。

// 示例 1:
// 输入: [3,0,1]
// 输出: 2

// 示例 2:
// 输入: [9,6,4,2,3,5,7,0,1]
// 输出: 8

// 说明:
// 你的算法应具有线性时间复杂度。你能否仅使用额外常数空间来实现?

/**
 * @param {number[]} nums
 * @return {number}
 */
// n  = len + 1
// 先构造一个完整的数组，然后再一个一个去删除已有的元素，返回剩下的元素
var missingNumber1 = function(nums) {
  let len = nums.length
  let n = len + 1
  let tempNums = {}
  for (let i = 0; i < n; i++) {
    tempNums[i] = true
  }
  for (let i = 0; i < len; i++) {
    let cur = nums[i]
    if (tempNums[cur]) {
      delete tempNums[cur]
    }
  }
  return Object.keys(tempNums).toString()
}

// 异或，异或符合交换率
var missingNumber2 = function(nums) {
  let missing = nums.length
  for (let i = 0; i < nums.length; i++) {
    missing ^= nums[i] ^ i
  }
  return missing
}

console.log(missingNumber2([9,6,4,2,3,5,7,0,1]))
