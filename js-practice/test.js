//
// doWork( () => {
//   console.log('call me when done');
// })
//
// function doWork(cb){
//    setTimeout( () => {
//      cb();
//    }, 3000)
// }

// let a = [1,2,3,4,5,6]
// let b = [1,3,6]
// //
// let t = a.filter( (it) => {
//   if (it > 3) {
//     return it
//   }
// })
// var t
// for (var v of b) {
//   t = a.filter( (it) => {
//     console.log('v, it..', v, it, v==it)
//     if (it == v ) {
//       return it
//     }
//   })
// }
// console.log(t)

// for (var v of b) {
//   let index = a.indexOf(v)
//   console.log(a.indexOf(v))
//   a.splice(index, 1)
// }
// console.log(a)

// newValue 新的配额
// reValue 当前的重购额度
// count 次数
// totalReValue 累加前的累积重购额度
// totalMuchValue 累加前的累积增购额度
// value 价值
function getMuchValue(value, totalReValue, totalMuchValue, newValue, count) {
  let muchValue = 0; // 待求的增购额度
  if (newValue > 0) {
    if (totalReValue + newValue <= value) {
      muchValue = 0;
    } else {
      muchValue = newValue + totalReValue - value;
    }
  } else {
    if (totalMuchValue + newValue > 0) {
      muchValue = newValue;
    } else {
      muchValue = -totalMuchValue;
    }
  }
  return muchValue;
}

// newValue 新的配额
// reValue 当前的重购额度
// count 次数
// totalReValue 累加后的累积重购额度
// totalMuchValue 累加前的累积增购额度
function getMuchValue(value, totalReValue, totalMuchValue, newValue, count) {
  let muchValue = 0; // 待求的增购额度
  if (newValue > 0) {
    if (totalReValue <= value) {
      muchValue = 0;
    } else {
      muchValue = totalReValue - value;
    }
  } else {
    if (totalMuchValue + newValue > 0) {
      muchValue = newValue;
    } else {
      muchValue = -totalMuchValue;
    }
  }
  return muchValue;
}

console.log(getMuchValue(30000, 30000, 13500, -13700));
console.log(getMuchValue(370000, 370000, 90000, -4500));
console.log(getMuchValue(70000, 2000, 0, 73780));
console.log(getMuchValue(70000, 0, 0, 2000));
console.log(getMuchValue(10000, 1000, 0, -1000));
console.log(getMuchValue(5000, 0, 0, -2500));
