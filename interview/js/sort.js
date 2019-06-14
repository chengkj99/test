//  冒泡排序
function bubbleSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    // 控制循环趟数
    for (let j = 0; j < len - i - 1; j++) {
      // 控制每一趟循环次数
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// 快速排序
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  let pivotIndex = Math.floor(arr.length / 2);
  let pivot = arr.splice(pivotIndex, 1)[0];
  let left = [];
  let right = [];
  arr.forEach(item => {
    if (pivot > item) {
      right.push(item);
    } else {
      left.push(item);
    }
  });
  return quickSort(left).concat([pivot], quickSort(right));
}

// insert sort 0-1
function insertSort(array) {
  function swap(temp, i, j) {
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  let arrLen = array.length,
    i,
    j,
    temp;
  for (i = 1; i < arrLen; i++) {
    for (j = i; j > 0; j--) {
      if (array[j] < array[j - 1]) {
        swap(temp, j, j - 1);
      } else {
        break;
      }
    }
  }
  return array;
}

// 合并有序数列：比较两个数组的首位，小的取出并在数组中删除。
function CombinSequence(array1, array2) {
  let L1 = array1.length;
  let L2 = array2.length;
  let arrayCombin = [];
  let x = (y = 0);
  while (x < L1 && y < L2) {
    if (array1[x] < array2[y]) {
      arrayCombin.push(array1[x]);
      x = x++;
      y = y++;
    } else {
      arrayCombin.push(array2[y]);
      x = x++;
      y = y++;
    }
  }

  return arrayCombin;
}

function mergeSort(array) {
  function sort(array, first, last) {
    first = first === undefined ? 0 : first;
    last = last === undefined ? array.length - 1 : last;
    if (last - first < 1) {
      return;
    }
    var middle = Math.floor((first + last) / 2);
    sort(array, first, middle);
    sort(array, middle + 1, last);
    var f = first,
      m = middle,
      i,
      temp;
    while (f <= m && m + 1 <= last) {
      if (array[f] >= array[m + 1]) {
        // 这里使用了插入排序的思想
        temp = array[m + 1];
        for (i = m; i >= f; i--) {
          array[i + 1] = array[i];
        }
        array[f] = temp;
        m++;
      } else {
        f++;
      }
    }
    return array;
  }
  return sort(array);
}

(function main() {
  let array = [1, 2, 3, 4, 5, 8, 7, 6, 5, 4, 3];
  // console.log('array:',array)
  // console.log('bubble sort positive:',bubbleSort(array))
  // console.log('insert sort reverse:',insertSort(array))

  let arr1 = [1, 2, 3, 4, 10, 6, 7, 8, 5, 2, 0];
  console.log(mergeSort(arr1));
})();
