
　// 保留两位小数 换算百分数
function getPercentage (val) {
  let v = (val * 100).toFixed(2)+ '%'
  return v
}

function main () {
  let arr = [0.1234, 0.2345, 0.3456555, 0.555555 ,1.1111111, 2.2222222222, 3.33333333, 4.444444444, 55.555555555, 666.66666666]
  for (it of arr) {
    console.log(getPercentage(it))
  }
}
main ()
