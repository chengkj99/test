# 汉明距离

两个整数之间的汉明距离指的是这两个数字对应二进制位不同的位置的数目。

给出两个整数 x 和 y，计算它们之间的汉明距离。

>  注意：0 ≤ x, y < 231.

## 示例:
```
输入: x = 1, y = 4
输出: 2
解释:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑
上面的箭头指出了对应二进制位不同的位置。
```

## 解题

正好昨天刚刚复习了`位的异或操作`，当时还在想，这个操作能有什么用呢，没想到今天看到这个题突然就想到了用这个方法。

首先将两个数异或操作，根据异或操作同为 0 ，异为 1的特性，然后，计算 1 的个数即是汉明距离。

```js
如:
1   (0 0 0 1)
      &
4   (0 1 0 0)
2   (0 1 0 1)
// 异或结果中 1 的个数是 2 所以，汉明距离是2。
```

```js
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  let z = x ^ y
  let count = 0
  while (z != 0) {
    count++
    z &= z - 1
  }
  return count
}

console.log('hammingDistance', hammingDistance(1, 4)) // 2
```
