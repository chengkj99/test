# 罗马数字转整数

罗马数字包含以下七种字符: I， V， X， L，C，D 和 M。

```
字符          数值
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
```

例如， 罗马数字 2 写做 `II` ，即为两个并列的 1。12 写做 `XII` ，即为 `X` + `II` 。 27 写做 `XXVII`, 即为 `XX` + `V` + `II` 。

通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 `IX`。这个特殊的规则只适用于以下六种情况：
I 可以放在 `V` (5) 和 `X` (10) 的左边，来表示 4 和 9。
X 可以放在 `L` (50) 和 `C` (100) 的左边，来表示 40 和 90。
C 可以放在 `D` (500) 和 `M` (1000) 的左边，来表示 400 和 900。

给定一个罗马数字，将其转换成整数。输入确保在 1 到 3999 的范围内。

示例 1:
```js
输入: "III"
输出: 3

```
示例 2:
```js
输入: "IV"
输出: 4
```

示例 3:
```js
输入: "IX"
输出: 9
```

示例 4:
```js
输入: "LVIII"
输出: 58
解释: L = 50, V= 5, III = 3.
```

示例 5:
```js
输入: "MCMXCIV"
输出: 1994
解释: M = 1000, CM = 900, XC = 90, IV = 4.
```

## 解题
看到题的第一感觉感觉不是一个难题，只要读懂题的意思，梳理思路即可完成答题。

首先想到的是先`做一个映射表`对罗马数字和阿拉伯数字建立一个映射关系。根据常识，平时做加减法运算时是按照`个`、`十`、`百`...依次解析的。然后在正常的解析思路的基础上再考虑一些异常或者特殊情况即可。

简单说分为两步：
1. 建立一个数字映射表
1. 如果特殊的六种情况特殊处理，否则就正常解析

按照以上分析完成代码如下：
```js
/**
 * @param {string} s
 * @return {number}
 */
var romanIntMap = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
}
var chars = Object.keys(romanIntMap).reduce((pre, cur) => ({ ...pre, [cur]: cur }), {})
var romanToInt = function(s) {
  if (!s) return 0
  let value = 0
  let len = s.length
  for (let i = len - 1; i >= 0; i--) {
    let curChar = s.charAt(i)
    // Special Resolve
    if ([chars.I, chars.X, chars.C].includes(curChar)) {
      let preChar = s.charAt(i + 1)
      if ([chars.X, chars.V].includes(preChar) && curChar === chars.I) {
        value -= romanIntMap[curChar]
        continue
      }
      if ([chars.L, chars.C].includes(preChar) && curChar === chars.X) {
        value -= romanIntMap[curChar]
        continue
      }
      if ([chars.D, chars.M].includes(preChar) && curChar === chars.C) {
        value -= romanIntMap[curChar]
        continue
      }
    }
    value += romanIntMap[curChar]
  }
  return value
}

console.log(romanToInt('III')) // 3
console.log(romanToInt('IV')) // 4
console.log(romanToInt('IX')) // 9
console.log(romanToInt('LVIII')) // 58
console.log(romanToInt('MCMXCIV')) // 1994
```

但是这个思路完全是按照自己的想法，应该会有更加简单或者更有效率的思路，心情好的时候，再继续深究吧。
