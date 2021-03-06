// 买卖股票的最佳时机
// 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。

// 如果你最多只允许完成一笔交易（即买入和卖出一支股票），设计一个算法来计算你所能获取的最大利润。

// 注意你不能在买入股票前卖出股票。

// 示例 1:

// 输入: [7,1,5,3,6,4]
// 输出: 5
// 解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
//      注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格。
// 示例 2:

// 输入: [7,6,4,3,1]
// 输出: 0
// 解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。

/**
 * @param {number[]} prices
 * @return {number}
 */
// 状态定义: dp[i] 代表第 i 天的股票最大利润
// 状态转移: dp[i] = max(dp[i], dp[j], 0 < j < i)
var maxProfit = function(prices) {
  const len = prices.length
  const dp = []
  let res = 0
  for (let i = 0; i < len; i++) {
    dp[i] = 0
    for (let j = 0; j < i; j++) {
      if (prices[i] > prices[j]) {
        const curProfit = prices[i] - prices[j]
        dp[i] = Math.max(dp[i], curProfit)
      }
    }
  }
  for (let x = 0; x < len; x++) {
    res = Math.max(res, dp[x])
  }
  return res
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]))
