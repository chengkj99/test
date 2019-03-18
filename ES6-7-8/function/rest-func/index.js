/**
 * Created by MaxCheng on 2016/9/27.
 */
// 函数的拓展
// 2.rest参数（...变量名）
// 有了rest参数，可以不用使用arguments对象了。


// rest 参数搭配的变量是一个数组，该变量将多余的参数放入数组中。
function add(...values) {
  let sum = 0;
  console.log('values:', values)// values是一个数组 , Array[3]
  for (let i in values) {
    sum += values[i];
  }
  return sum;
}
console.log(add(2, 3, 5));

//利用 rest 参数改写数组的push方法
function push(arr, ...arg) {
  arg.forEach((item) => {
    arr.push(item);
  });
  return arr;
}

let arr2 = [];
push(arr2, 1, 2, 3, 4, 5);
console.log(arr2);

// 注意的地方:
// 1.rest参数之后不能再有其他参数（即只能是最后一个参数），否则会报错。
// 2.函数的length属性(获取参数个数)，不包括rest参数。



