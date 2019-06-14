// 打家劫舍
// 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。

// 给定一个代表每个房屋存放金额的非负整数数组，计算你在不触动警报装置的情况下，能够偷窃到的最高金额。

// 示例 1:
// 输入: [1,2,3,1]
// 输出: 4
// 解释: 偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
//      偷窃到的最高金额 = 1 + 3 = 4 。

// 示例 2:
// 输入: [2,7,9,3,1,3]
// 输出: 12
// 解释: 偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
//      偷窃到的最高金额 = 2 + 9 + 1 = 12 。

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  let len = nums.length
  let maxValue = 0
  const dp = []
  for (let i = 0; i < len; i++) {
    if (i === 0 || i === 1) {
      dp[i] = nums[i]
    } else if (i === 2) {
      dp[i] = nums[2] + nums[0]
    } else {
      // 跳过第一个值，因为不能和相邻的值对比，和（nums[i] + dp[i - 2]）和 （nums[i] + dp[i - 3]）对比，选出最大值
      // 而不进一步和 （nums[i] + dp[i - 4]） 对比
      // 是因为是非负整数，所以 （nums[i] + dp[i - 2]） 一定大于 （nums[i] + dp[i - 4]），（nums[i] + dp[i - 3]） 一定大于 （nums[i] + dp[i - 5]），也就没必要和更前面的值对比了
      dp[i] = Math.max(nums[i] + dp[i - 2], nums[i] + dp[i - 3])
    }
    maxValue = Math.max(maxValue, dp[i])
  }
  return maxValue
}

// 状态定义：dp[i] 代表第 i 个元素的最大值
// 状态转移：maxValue = Math.max(nums[i] + dp[i-2], nums[i] + dp[i-3])

console.log(rob([2,7,9,3,1]))
