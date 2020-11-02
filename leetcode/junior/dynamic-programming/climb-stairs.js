// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

// 注意：给定 n 是一个正整数。

// 示例 1：
// 输入： 2
// 输出： 2
// 解释： 有两种方法可以爬到楼顶。
// 1.  1 阶 + 1 阶
// 2.  2 阶

// 示例 2：
// 输入： 3
// 输出： 3
// 解释： 有三种方法可以爬到楼顶。
// 1.  1 阶 + 1 阶 + 1 阶
// 2.  1 阶 + 2 阶
// 3.  2 阶 + 1 阶

/**
 * @param {number} n
 * @return {number}
 */
// 异常解法：当数值较大时，运行超时，毕竟递归的方式性能消耗较大
// var climbStairs = function(n) {
//   if(n === 1) {
//     return 1
//   }
//   if (n === 2) {
//     return 2
//   }
//   if (n > 2) {
//     return climbStairs(n-2) + climbStairs(n-1)
//   }
// };

// 正确解法：
var climbStairs = function (n) {
  const dp = []
  if (n === 1) {
    return 1
  }
  if (n === 2) {
    return 2
  }
  dp[0] = 1
  dp[1] = 2
  for (let i = 2; i < n; i++) {
    dp[i] = dp[i - 2] + dp[i - 1]
  }
  return dp[n - 1]
}



// 这个问题可以被分解为一些包含 **最优子结构的子问题**，即它的最优解可以从其子问题的最优解来有效地构建，我们可以使用动态规划来解决这一问题。

// 状态定义: dp[i] 代表该层楼梯的拥有的方法数

// 状态转移：
// 第 i 阶可以由以下两种方法得到：
// 在第 (i-1) 阶后向上爬 1 阶。
// 在第 (i-2) 阶后向上爬 2 阶。
// 所以到达第 i 阶的方法总数就是到第 (i−1) 阶和第 (i−2) 阶的方法数之和。
// dp[i] = dp[i-1] + dp[i-2]

// console.log(climbStairs(5))
console.log(climbStairs(50)) //89

function slimbStairs2(n) {
  let dp = []
  if (n === 1) {
    return 1
  }
  if (n === 2) {
    return 2
  }
  dp[1] = 1
  dp[2] = 2
  for (i = 3; i <= n; i++) {
    dp[i] = dp[i - 2] + dp[i - 1]
  }
  return dp[n]
}

console.log(slimbStairs2(5))

// 1 = 1
// 2 = 2
// 3 = 2 + 1
// 1，1，1
// 1，2
// 2，1

// // 4 = 3 + 2
// 1，1，1，1
// 1，1，2
// 1，2，1
// 2，1，1
// 2，2

// 5 = 4 + 3 = 5 + 3 = 8
