// 在一个下列类型数组中，查找最大值
// input: [1,2,3,4,6,32,66,77,33,29,26,22,21,10]
// output: 77

// 二分法
function getMaxValue(arr) {
  let len = arr.length
  let left = 0
  let right = len

  while (left < right) {
    let midIndex = Math.ceil((left + right) / 2)
    mid = arr[midIndex]
    if (arr[mid - 1] > mid) {
      right = mid - 1
    } else if (arr[mid + 1] > mid) {
      left  = mid + 1
    } else {
      return mid
    }
  }
  return -1
}


let arr = [1,2,3,4,6,32,66,77,99,33,29,26,22,21,10]
console.log(getMaxValue(arr)) // 99
