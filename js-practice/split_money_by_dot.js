// 金额三位分割
    // 处理没有小数情况
    function formatNumberNoDot (str) {
        if(str.length <= 3){
            return str;
        } else {
            return formatNumberNoDot(str.substr(0, str.length-3)) + ',' + str.substr(str.length-3);
        }
    }

// 处理带小数的情况
    function formatNumberDot (str) {
      let arr = str.split('.')
      let end = arr[1]
      let start = formatNumberNoDot(arr[0])
      let formatNumber = start + '.' + end
      return formatNumber
    }
// 主函数
    function formatNumberMain (num) {
      if (num === '' || num === null || num === undefined || num === 0){
        return num = '0'
      }
      let s = num.toString()
      if (s) {
        if (s.indexOf('.') > 0) {
          return formatNumberDot(s)
        } else {
          return formatNumberNoDot(s)
        }
      }
    }

    // console.log(formatNumberMain(122111))
    // console.log(formatNumberMain(44432322213122112))
    // console.log(formatNumberMain(10022111))
    // console.log(formatNumberMain(1111221111))
    // console.log(formatNumberMain(111111.22111))
    // console.log('------------')
    // console.log(formatNumberMain(111111111.22111))
    // console.log(formatNumberMain(111111111.01))
    // console.log(formatNumberMain(11111111.0011))
    // console.log(formatNumberMain(111111111.011))
    // console.log(formatNumberMain(111111111.01))
function handleMain () {
  let ts = new Date();
  for ( let i = 0; i <= 300; i++) {
    console.log(i)
    formatNumberMain(11111.1111)
  }
  let tn = new Date()
  console.log((tn.getTime() - ts.getTime()) / 1000)
}
{
  handleMain()
}



// 122,111
// 44,432,322,213,122,110
// 10,022,111
// 1,111,221,111
// 111,111.22111
// ------------
// 111,111,111.22111
// 111,111,111.01
// 11,111,111.0011
// 111,111,111.011
// 111,111,111.01
