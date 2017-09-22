
// 一个简单的递归
const OperatorView = {
  '默认': {},
  '中国联通': {
    '华东联通': ['山东联通', '江苏联通', '安徽联通', '浙江联通', '福建联通', '上海联通'],
    '华北联通': ['北京联通', '天津联通', '河北联通', '山西联通', '内蒙古联通'],
    '华南联通': ['广东联通', '广西联通', '海南联通'],
    '华中联通': ['湖北联通', '湖南联通', '河南联通', '江西联通'],
    '西南联通': ['四川联通', '云南联通', '贵州联通', '西藏联通', '重庆联通'],
    '西北联通': ['宁夏联通', '新疆联通', '青海联通', '陕西联通', '甘肃联通'],
    '东北联通': ['辽宁联通', '黑龙江联通', '吉林联通']
  },
  '中国移动': {
    '华北移动': ['北京移动', '天津移动', '河北移动', '山西移动', '内蒙古移动'],
    '华东移动': ['山东移动', '江苏移动', '安徽移动', '浙江移动', '福建移动', '上海移动'],
    '华南移动': ['广东移动', '广西移动', '海南移动'],
    '华中移动': ['湖北移动', '湖南移动', '河南移动', '江西移动'],
    '西南移动': ['四川移动', '云南移动', '贵州移动', '西藏移动', '重庆移动'],
    '西北移动': ['宁夏移动', '新疆移动', '青海移动', '陕西移动', '甘肃移动'],
    '东北移动': ['辽宁移动', '黑龙江移动', '吉林移动']
  },
  '中国电信': {
    '华北电信': ['北京电信', '天津电信', '河北电信', '山西电信', '内蒙古电信'],
    '华东电信': ['山东电信', '江苏电信', '安徽电信', '浙江电信', '福建电信', '上海电信'],
    '华南电信': ['广东电信', '广西电信', '海南电信'],
    '华中电信': ['湖北电信', '湖南电信', '河南电信', '江西电信'],
    '西南电信': ['四川电信', '云南电信', '贵州电信', '西藏电信', '重庆电信'],
    '西北电信': ['宁夏电信', '新疆电信', '青海电信', '陕西电信', '甘肃电信'],
    '东北电信': ['辽宁电信', '黑龙江电信', '吉林电信']
  }
}

function cloneObject(obj){
   var o = obj.constructor === Array ? [] : {};
   for(var i in obj){
     if(obj.hasOwnProperty(i)){
       o[i] = typeof obj[i] === "object" ? cloneObject(obj[i]) : obj[i];
     }
   }
   return o
 }



function getArrOfObj(obj) {
  let arr = []
  function getObjArray (obj) {
    for (let val in obj) {
      if (obj.hasOwnProperty(val)) {
        if(obj[val].constructor == Array && obj[val].length != 0){
          arr = arr.concat(obj[val])
        }
        typeof obj[val] == 'object' ? getObjArray(obj[val]) : obj[val]
      }
    }
    return arr
  }
  let arrOut = getObjArray(obj)
  return arrOut

}

// function getObjArray(obj) {
//   let temp = []
//   for (let val in obj) {
//     if (obj.hasOwnProperty(val)) {
//       if (obj[val].toString() == "[object object]") {
//         getObjArray(obj[val])
//       } else {
//         temp.concat(obj[val])
//       }
//     }
//   }
//  return temp
// }
console.log('|||||||||||||||||||||||||||||');
console.log(cloneObject(OperatorView));
console.log('----------------------------');
console.log(getArrOfObj(OperatorView));
