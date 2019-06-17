// Shuffle an Array 打乱数组
// 打乱一个没有重复元素的数组。

// 示例:
// // 以数字集合 1, 2 和 3 初始化数组。
// int[] nums = {1,2,3};
// Solution solution = new Solution(nums);

// // 打乱数组 [1,2,3] 并返回结果。任何 [1,2,3]的排列返回的概率应该相同。
// solution.shuffle();

// // 重设数组到它的初始状态[1,2,3]。
// solution.reset();

// // 随机返回数组[1,2,3]打乱后的结果。
// solution.shuffle();

/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
  this.nums = nums
}

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
  return this.nums
}

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
  const nums = [...this.nums]
  const newNums = []
  // 获取 0 - max 范围内的数组索引值
  const getRandomInt = max => {
    return Math.floor(Math.random() * Math.floor(max))
  }
  let len = nums.length
  while (len > 0) {
    for (let i = 0; i < len; i++) {
      const value = nums.splice(getRandomInt(len), 1)
      newNums.push(...value)
    }
    len = nums.length
  }
  return newNums
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */

var nums = [1, 2, 3, 4, 5, 6]
var obj = new Solution(nums)
var param_1 = obj.reset()
var param_2 = obj.shuffle()

console.log('param_1', param_1)
console.log('param_2', param_2)
