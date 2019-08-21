// 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。

// 在杨辉三角中，每个数是它左上方和右上方的数的和。

// 示例:
// 输入: 5
// 输出:
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]

/**
 * @param {number} numRows
 * @return {number[][]}
 */
// 循环
// 遍历每一行 => 遍历每一行的每一组数 => 计算和 push 每一行的数
var generate = function(numRows) {
  const res = []
  for (let row = 0; row < numRows; row++) {
    const rowRes = []
    for (let i = 0; i <= row; i++) {
      if (row < 2) {
        rowRes.push(1)
      } else {
        let cur = 0
        if (i === 0 || i === row) {
          // 当第一个和最后一个元素时，值为 1
          cur = 1
        } else {
          const preRow = res[row - 1]
          // 根据发现的规律：中间的位置等于上一行元素的上一个索引对应的值 + 当前索引对应的值
          let x = preRow[i - 1]
          let y = preRow[i]
          cur = x + y
        }
        rowRes.push(cur)
      }
    }
    res.push(rowRes)
  }
  return res
}

// 动态规划：根据前一行求本行
// 状态定义：dp[row] 代表第 row 行的数组
// 状态转移：1: [1], 2: [1, 1], 3: [1, 2, 3] dp[row] = dp[row-1][i-1][i] (row >= 2, row = 0)
// 状态初始化：dp[1] = [[1]], dp[2] = [[1, 1]]

var generate2 = function(row) {
  const dp = []
  if (row === 0) {
    dp.push([1])
    return
  }
  if (row === 1) {
    dp.push([1, 1])
    return
  }
  for (let i = 0; i <= row; i++) {
    const rows = []
    if (i === 0 || i === row) {
      rows.push(1)
    } else {
      let preRow = dp[row-1]
      rows.push(preRow[i-1] + preRow[i])
    }
    dp.push(rows)
    return dp.concat(generate2(row-1))
  }
}



console.log(generate2(5))
