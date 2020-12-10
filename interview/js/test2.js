// const tree = {
//   value: 1,
//   children: [{
//     value: 2,
//     children: [{
//         value: 3,
//         children: null,
//       },
//       {
//         value: 4,
//         children: null,
//       }
//     ]
//   }]
// }

// function getValues(tree) {
//   if (!tree || tree.constructor !== Array) {
//     return []
//   }
//   let levelValues = []
//   let queue = [tree]
//   while (queue.length > 0) {
//     let values = []
//     let newQueue = []
//     queue.forEach(item => {
//       values.push(item.value)
//       item.children && newQueue.push(...item.children)
//     })
//     levelValues.push(vlaues)
//     queue = newQueue
//   }

//   const result = []
//   const [levelValues0, levelValues1, levelValues2] = levelValues

//   for (let i = 0; i < levelValues0.length; i++) {
//     const [rootValue] = levelValues0
//     let firstValues = [rootValue]
//     for (let i = 0; i < levelValues1.length; i++) {
//       firstValues.push(levelValues1[index])
//       let secondValues = []
//       for (let i = 0; i < levelValues2.length; i++) {
//         secondValues.push(levelValues2[index])
//         firstValues.push(secondValues)
//       }
//     }
//     result.push(firstValues)
//   }
//   return result
// }

// console.log(getValues(tree))

let a = '11'
let f = () => {
  var a = '22'
  console.log(this.a)
  console.log(a)
}

f()

console.log(this.a)
