// 内部迭代器
each = function (arr, callback) {
  for (let i = 0; arr[i]; i++) {
    callback.call(null, i, arr[i])
  }
}

let arr = [1, 2, 3]
each(arr, function (i, v) {
  console.log('@', i, v)
  // @ 0 1
  // @ 1 2
  // @ 2 3
})

// 外部迭代器

let iterator = function (obj) {

  let index = 0;

  let next = function () {
    index++;
  }

  let isDone = function () {
    return index === obj.length - 1
  }

  let getCurrentItem = function () {
    return obj[index]
  }
  return {
    next,
    isDone,
    getCurrentItem
  }
}

let arr1 = [1, 2, 3]
let arr2 = [1, 2, 4]

function compare(iterator1, iterator2) {
  while (!iterator1.isDone() && !iterator2.isDone()) {
    if (iterator1.getCurrentItem() !== iterator2.getCurrentItem()) {
      return false
      console.log(iterator1.getCurrentItem())
    }
    iterator1.next()
    iterator2.next()
  }
  return true
}
console.log('#', compare(iterator(arr1), iterator(arr2)))
