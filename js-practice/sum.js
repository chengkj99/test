/**
 * sum(1, 2, 3).sumOf(); //6
 * sum(2, 3)(2).sumOf(); //7
 * sum(1)(2)(3)(4).sumOf(); //10
 * sum(2)(4, 1)(2).sumOf(); //9
 */

// 实现 sum 函数使得以下表达式的值正确

function sum(...args1) {
  let values = args1
  const _sum = (...args2) => {
    values.push(...args2)
    return _sum
  }
  _sum.sumOf = () => {
    return values.reduce((pre, cur) => (pre + cur), 0)
  }
  return _sum
}

console.log('#:', sum(1, 1)(2, 2)(3).sumOf());
