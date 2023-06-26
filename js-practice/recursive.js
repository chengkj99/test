// 递归的返回值问题




// 今天写一个递归函数，获取的返回值不是自己想要的结果而是undefined，困扰了我很久。

function recuFunc(val) {
  if (val > 10) {
    return val
  } else {
    recuFunc(val + 1)
  }
}

let res = recuFunc(1)

console.log(res)  //undefined


// 思考了许久，终于发现了问题之所在。


function recuFunc(val) {
  if (val > 10) {
    return val
  } else {
    return recuFunc(val + 1)
  }
}

let res = recuFunc(1)

console.log(res)  //11

// 仅仅在递归调用的函数前面加上`return`,问题便迎刃而解。

// 究其原因，就是函数体没有返回值，自然结果是undefined。
// 最初我以为当我执行到` val > 10 `的时候，`return val` 此时就能得到想要的结果，还是我将递归算法的理解还不够。
// 其实递归函数就像一个同心圆一样，一层函数嵌套着一层函数，当边界条件被满足时，`return val`返回给最里层的函数，
// 如果函数前不加`return`,但是这个函数没有被返回,它的上层函数就没有返回值，其结果就是undefined了。
