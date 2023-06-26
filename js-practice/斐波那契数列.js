// 0，1，f2 = f0 + f1，fn = fn-1 + fn-2
// 0 ,1 ,1, 2, 3, 5, 8
// 0、1、1、2、3、5、8、13、21、34

// 递归
function f (n) {
  if (n === 0 || n === 1) {
    return n
  }
  return f(n - 1) + f(n - 2)
}

// 动态规划
function f1 (n) {
  if (n < 2) {
    return n
  }
  let p = 0
  let q = 0
  let r = 1
  for (let i = 2; i <= n; i++) {
    p = q
    q = r
    r = p + q
  }
  return r
}

// while 循环
function f2 (n) {
  let i = 2
  let res = [0, 1, 1]
  while (i <= n) {
    res[i] = res[i - 1] + res[i - 2]
    i++
  }
  return res[n]
}

console.log(f(8))
console.log(f1(8))


try {
  console.log(f2(8))
} catch (error) {
  console.log('##', error)
}

