# 杨辉三角

给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。

![杨辉三角](https://ckj-bucket.oss-cn-beijing.aliyuncs.com/chengkj-blog/gengrate.gif)

在杨辉三角中，每个数是它左上方和右上方的数的和。

## 示例:

```js
输入: 5
输出: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]
```

## 解题

题目看起来比较简单，思路如下：

需要使用一个嵌套循环。

1. 一层行数的循环
1. 一层根据行数得出的每一行的数组长度大小的循环，用来得到每一行的数组

然后分析得出一下规律，当每一行的第一个和最后一个元素时，值为 1；每一行的中间的位置等于`上一行上一个索引对应的值` + `上一行当前索引对应的值`；如下：
```js
第一行: [1]
第二行: [1, 1]
第三行: [1, 2, 3]
...
第row-1行: dp[row-1] = dp[row-2][i-1][i] (row >= 2, row = 0)
第row行: dp[row] = dp[row-1][i-1][i] (row >= 2, row = 0)
```

```js
/**
 * @param {number} numRows
 * @return {number[][]}
 */
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
          // 当每一行的第一个和最后一个元素时，值为 1
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

console.log(generate(5)) // [ [ 1 ], [ 1, 1 ], [ 1, 2, 1 ], [ 1, 3, 3, 1 ], [ 1, 4, 6, 4, 1 ] ]
```
