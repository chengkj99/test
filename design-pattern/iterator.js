// 迭代器模式应用，迭代一个想要的结果，而不是用 if else 判断的方式获得想要的结果

// 内部迭代器
each = function (arr, callback) {
  for (let i = 0; arr[i]; i++) {
    callback.call(null, i, arr[i])
  }
}

let arr = [1, 2, 3]
each(arr, function (i, v) {
  console.log('@', i, v)
})

// 外部迭代器
let iterator = function (obj) {
  let index = 0;
  let next = function () {
    index++;
  }
  let isDone = function () {
    return index === obj.length
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
    }
    iterator1.next()
    iterator2.next()
  }
  return true
}
console.log('#', compare(iterator(arr1), iterator(arr2)))


// jQuery 迭代器
let each2 = function (obj, callback) {
  var value,
    i = 0,
    length = obj.length,
    isArray = Object.prototype.toString.call(obj) === '[object Array]';
  if (isArray) { // 迭代类数组 for ( ; i < length; i++ ) {
    for (; i < length; i++) {
      value = callback.call(obj[i], i, obj[i]);
      if (value === false) {
        break;
      }
    }
  } else {
    for (i in obj) { // 迭代object对象
      value = callback.call(obj[i], i, obj[i]);
      if (value === false) {
        break;
      }
    }
  }
  return obj;
};

each2(arr2, function (i, v) {
  console.log('$', i, v)
})
