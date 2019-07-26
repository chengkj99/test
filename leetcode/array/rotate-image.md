<!-- 旋转图像
给定一个 n × n 的二维矩阵表示一个图像。

# 旋转图像

将图像顺时针旋转 90 度。

## 说明：
你必须在原地旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要使用另一个矩阵来旋转图像。

## 示例

示例 1:
```js
// 给定:
matrix = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
],
// 原地旋转输入矩阵，使其变为:
matrix = [
  [7,4,1],
  [8,5,2],
  [9,6,3]
]
```

示例 2:
```js
// 给定:
matrix = [
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
],
// 原地旋转输入矩阵，使其变为:
matrix = [
  [15,13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7,10,11]
]
```
这道题最初没想出来，然后参考了官方的解法。
思路是先转置矩阵，再每一行翻转可以实现将图像顺时针旋转 90 度。
为什么先转置再翻转可以实现图像的 90 度反转呢？观察以上的两个示例，翻转 90 度就是将第一列变为了第一行，第二列变为了第二行，如果还记得`矩阵变换`的话，很容易想到，这和矩阵的**转置**很像。

```js
// 给定:
matrix = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
],
// 转置: 行、列交换
matrix = [
  [1,4,7],
  [2,5,8],
  [3,6,9]
]
```
矩阵旋转 90 度 和矩阵转置的操作都使原矩阵的行和列发生了交换，区别只是每一行元素的顺序是互逆的。

```js

// 给定：
matrix =
[
  [1,2,3],
  [4,5,6],  =>
  [7,8,9]
],
// 转置矩阵: 行列交换
[
  [1,4,7],
  [2,5,8], =>
  [3,6,9]
]
// 行反转
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]
``` -->

```js
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// 转置加翻转
var rotate = function(matrix) {
  let len = matrix.length
  // 转置 transpose matrix
  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      let temp = matrix[i][j]
      matrix[i][j] = matrix[j][i]
      matrix[j][i] = temp
    }
  }
  // 翻转每一行 reverse each row
  for (let i = 0; i < len; i++) {
    matrix[i].reverse()
  }
  return matrix
}


let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

console.log(rotate(arr)) // [ [ 7, 4, 1 ], [ 8, 5, 2 ], [ 9, 6, 3 ] ]
```