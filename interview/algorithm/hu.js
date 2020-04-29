Number.prototype.add = function (num) {
  let str1 = this + ''
  let str2 = num + ''

  let [bigNum1, decimalNum1] = str1.split('.')
  let [bigNum2, decimalNum2] = str2.split('.')
  let decimalNum1Len = decimalNum1 ? bigNum1.length : 0
  let decimalNum2Len = decimalNum2 ? bigNum2.length : 0
  let digit = decimalNum1Len > decimalNum2Len ? decimalNum1Len : decimalNum2Len

  let newNum1 = '' + bigNum1 + decimalNum1
  let newNum2 = '' + bigNum2 + decimalNum2

  let newNum = ('' + (+newNum1 + +newNum2))
  console.log('::', newNum)
  newNum = newNum.substring(0, digit) + '.' + newNum.substring(digit, newNum.length)
  return [newNum, newNum1, newNum2]
}

console.log((0.11).add(1.121))
