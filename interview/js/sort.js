//  冒泡排序
function bubbleSort(arr) {
  let len = arr.length
  for (let i = 0; i < len-1; i++) { // 控制循环趟数
    for (let j = 0; j < len - i - 1; j++) { // 控制每一趟循环次数
      if (arr[j] > arr[j+1]) {
        let temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
      }
    }
  }
  return arr
}

// 快速排序

function quickSort(arr) {
  if (arr.length <= 1) return arr

  let pivotIndex = Math.floor(arr.length / 2)
  let pivot = arr.splice(pivotIndex, 1)[0]
  let left = []
  let right = []
  arr.forEach(item => {
    if (pivot > item) {
      right.push(item)
    } else {
      left.push(item)
    }
  })
  return quickSort(left).concat([pivot], quickSort(right))
}
