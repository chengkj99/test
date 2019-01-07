function binarySearch(arr, target) {
    if (!arr || arr.length === 0) {
      return -1
    }
    let left = 0
    let right = arr.length - 1
    while (left <= right) {
      let mid = Math.ceil((left + right) / 2)
      if (target < arr[mid]) {
        right = mid - 1
      } else if (target > arr[mid]) {
        left = mid + 1
      } else {
        return mid
      }
    }
    return -1
  }