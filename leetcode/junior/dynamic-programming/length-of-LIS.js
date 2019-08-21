// 题意
// 给定一个长度为1000以内的数组,每个元素范围都在[0,10000]的整数,求这个数组的LIS.
// LIS: 最长递增子序列

// 解法
// 记数组为a[0...n-1],算法很直接,具体如下:

// 状态定义: 我是谁？
// dp[i]代表以第 i 项为结尾的 LIS 的长度.
// 状态转移: 我从哪里来？ || 我到哪里去？
// dp[i] = max(dp[i], max(dp[j]) + 1) if j < i and a[j] < a[i]
// 状态初始化:
// dp[i]=1
// 时间复杂度:
// 状态数为n, 每次转移复杂度是O(n), 所以算法总复杂度是O(n^2)

function lengthOfLIS(nums) {
  let res = 0
  const dp = []
  const len = nums.length
  for (let i = 0; i < len; i++) {
    dp[i] = 1
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        // 求 dp[i] 时，遍历dp[0...i-1]，找出 nums[j] < nums[i] 且 dp[j] 是最大的
        // dp[i]=dp[j]+1
        dp[i] = Math.max(dp[i], dp[j] + 1) // 更新最优状态
      }
    }
  }
  for (let x = 0; x < len; x++) {
    res = Math.max(dp[x], res)
  }
  return res
}

console.log(lengthOfLIS([1, 5, 3, 4, 6, 9, 7, 6]))
