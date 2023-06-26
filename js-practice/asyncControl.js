let list = [1,2,3,4,56,7,8,9,10]

// let arr = list.map(i => Promise.resolve(i))

// Promise.all(list).then((res) => {
//   console.log('$$$', res)
// })



/**
 * @params list {Array} - 要迭代的数组
 * @params limit {Number} - 并发数量控制数
 * @params asyncHandle {Function} - 对`list`的每一个项的处理函数，参数为当前处理项，必须 return 一个Promise来确定是否继续进行迭代
 * @return {Promise} - 返回一个 Promise 值来确认所有数据是否迭代完成
 */
// let mapLimit = (list, limit, asyncHandle) => {
//     let recursion = (arr) => {
//         return asyncHandle(arr.shift())
//             .then(()=>{
//                 if (arr.length!==0) return recursion(arr)   // 数组还未迭代完，递归继续进行迭代
//                 else return 'finish';
//             })
//     };

//     let listCopy = [].concat(list);
//     let asyncList = []; // 正在进行的所有并发异步操作
//     while(limit--) {
//       recursion(listCopy)
//         // asyncList.push( recursion(listCopy) );
//     }
//     // return Promise.all(asyncList);  // 所有并发异步操作都完成后，本次并发控制迭代完成
// }


// var dataLists = [1,2,3,4,5,6,7,8,9,11,100,123];
// var count = 0;
// mapLimit(dataLists, 3, (curItem)=>{
//     return new Promise(resolve => {
//         count++
//         setTimeout(()=>{
//             console.log(curItem, '当前并发量:', count--)
//             resolve();
//         }, Math.random() * 1000)
//     });
// })

// while(limit--) 同时发送限制数量的并发请求
// resursion(list) 这里面对每个请求进行执行，执行完了就读下一个继续执行


var dataLists = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
let limitTask = (list, limit, doTask) => {
  let _list = [...list]
  let recursion = (list) => {
    return doTask(list.shift()).then((item) => {
      if (list.length > 0) {
        return recursion(list)
      }
      return 'finish'
    })
  }
  while(limit--) {
    recursion(_list)
  }
}
let count = 0
limitTask(dataLists, 8, (item) => {
  return new Promise((resolve, reject) => {
    count++
    setTimeout(() => {
      console.log('item:', item, ', count: ', count)
      count--
      resolve()
    }, 1000)
  })
})
