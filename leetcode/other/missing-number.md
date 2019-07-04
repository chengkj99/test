# 缺失数字

给定一个包含 0, 1, 2, ..., n 中 n 个数的序列，找出 0 .. n 中没有出现在序列中的那个数。

## 示例

```
示例 1:
输入: [3,0,1]
输出: 2

示例 2:
输入: [9,6,4,2,3,5,7,0,1]
输出: 8
```

## 说明:

你的算法应具有线性时间复杂度。你能否仅使用额外常数空间来实现?

## 解题

### 解法 1: 循环和 hash

先构造一个完整的数组，然后再一个一个去删除已有的元素，返回剩下的那个元素

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
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
console.log(missingNumber2([9, 6, 4, 2, 3, 5, 7, 0, 1])) // 8
```

### 解法 2：异或

#### 分析：

位的异或运算：相同得 0，不同得 `1，6 ^ 6 === 0`

异或操作符合交换律： `6 ^ 6 ^ 8 === 6 ^ 8 ^ 6`

[0, n]的数列中，可以用`n 个数`和`n 个数的下标`进行异或运算，即可得出缺失的值：

```js
下标	0	1	2	3  4
数字	0	1	3	4  x(缺失的值)

missing = 0 ^ 0 ^ 1 ^ 1 ^ 2 ^ 3 ^ 3 ^ 4 ^ 4
        = 0 ^ 0 ^ 2 ^ 0 ^ 0
        = 2
```

<!-- 异或，异或符合交换率 -->

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber2 = function(nums) {
  let missing = nums.length
  for (let i = 0; i < nums.length; i++) {
    missing ^= nums[i] ^ i
  }
  return missing
}
console.log(missingNumber2([9, 6, 4, 2, 3, 5, 7, 0, 1])) // 8
```
