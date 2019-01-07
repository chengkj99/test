// // 用代码实现下面的二叉树，并写一个函数打印出广度优先遍历结果
// //                   a
// //                 /   \  
// //                b     c
// //               / \     \
// //              d   e     f

// const tree = [
//     {
//         value: 'a', 
//         children: [
//             {
//                 value: 'b', 
//                 children: [
//                     {
//                         value: 'd',
//                         children: null
//                     },
//                     {
//                         value: 'e',
//                         children: null
//                     }
//                 ]
//             },
//             {
//                 value: 'c',
//                 children: [
//                     {
//                         value: 'f',
//                         children: null
//                     }
//                 ]
//             }
//         ]
//     }
// ]

// const levelOrder = tree => {
//     if (!tree || tree.constructor !== Array) {
//         return []
//     }
//     let result = []
//     let queue = tree
//     while (queue.length > 0) {
//         let newQueue = []
//         queue.forEach(item => {
//             result.push(item.value)
//             item.children && newQueue.push(...item.children) 
//         })
//         queue = newQueue
//     }
//     return result
// }

// console.log(levelOrder(tree))

// 将一天24小时按每半小时划分成48段，我们用一个位图表示选中的时间区间，例如`110000000000000000000000000000000000000000000000`，
// 表示第一个半小时和第二个半小时被选中了，其余时间段都没有被选中，也就是对应00:00~01:00这个时间区间。一个位图中可能有多个不连续的
// 时间区间被选中，例如`110010000000000000000000000000000000000000000000`，表示00:00-1:00和02:00-02:30这两个时间区间被选中了。

// 要求：写一个函数timeBitmapToRanges，将上述规则描述的时间位图转换成一个选中时间区间的数组。
// 示例输入：`"110010000000000000000000000000000000000000000000"`
// 示例输出：`["00:00~01:00", "02:00~02:30"]`

function getTime(index) {
    let num = index + 1
    let [brfore, after] = ('' + num / 2).split('.')
    let hour = brfore.length === 1 ? `0${brfore}` : brfore
    let minute = after ? '30' : '00'
    
    return `${hour}:${minute}`
  }
  
  function formatBit(bits) {
      let len = bits.length
      let start = 0
      let end = 0
      if (len > 1) {
          start = bits[0]
          end = bits[len-1]
      } else {
          start = bits[0] - 1
          end = bits[0]
      }
      return `${getTime(start)}~${getTime(end)}`
  }
  
  
  function bitmapToTimeRange(bitmap) {
      
      let array = []
      let bit = []
      bitmap.split('').forEach((item, index) => {
          if (item === '1') {
              bit.push(index)
          } else {
              bit.length > 0 && array.push(formatBit(bit))
              bit = []
          }
      })
      return array
  }
  
  console.log(bitmapToTimeRange("111010000000011110000000000000000000000000000000"))