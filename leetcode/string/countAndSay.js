// 报数序列是一个整数序列，按照其中的整数的顺序进行报数，得到下一个数。其前五项如下：

// 1.     1
// 2.     11
// 3.     21
// 4.     1211
// 5.     111221
// 1 被读作  "one 1"  ("一个一") , 即 11。
// 11 被读作 "two 1s" ("两个一"）, 即 21。
// 21 被读作 "one 2",  "one 1" （"一个二" ,  "一个一") , 即 1211。

// 给定一个正整数 n（1 ≤ n ≤ 30），输出报数序列的第 n 项。

// 注意：整数顺序将表示为一个字符串。

// 示例 1:
// 输入: 1
// 输出: "1"

// 示例 2:
// 输入: 4
// 输出: "1211"

/**
 * @param {number} n
 * @return {string}
 */

// 第一个是 1
// 下一个值 = 第一位的个数 + 当前数
var countAndSay = function(n) {
  if (n === 1) { return '1' }
  let res = ''
  for (let i = 1; i < n; i++) {
    let start = '1'
    if (i !== 1) {
      start = res
    }
    let curCount = count(start)
    let curSay = say(curCount)
    res = curSay
  }
  return res
}

// 11122  => 3122
var count = nums => {
  let res = []
  let arr = nums.split('')
  let count = 1
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      count++
    } else {
      res.push({ val: arr[i], count })
      count = 1
    }
  }
  return res
}

var say = arr => {
  let res = ''
  arr.forEach(obj => {
    res += `${obj.count}${obj.val}`
  })
  return res
}


// 1
// 11
// 21
// 1211
// 111221
// 312211
// 13112221

console.log(countAndSay(1)) // 1
console.log(countAndSay(2)) // 11
console.log(countAndSay(3)) // 1211
console.log(countAndSay(7)) // 13112221


