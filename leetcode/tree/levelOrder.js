// 给定一个二叉树，返回其按层次遍历的节点值。 （即逐层地，从左到右访问所有节点）。

// 例如:
// 给定二叉树: [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回其层次遍历结果：

// [
//   [3],
//   [9,20],
//   [15,7]
// ]

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) return [] // 注意边界情况
  let queue = [root]
  let res = []
  while(queue.length > 0) {
    let subRes = []
    let newQueue = []
    queue.forEach(node => {
      subRes.push(node.val)
      node.left && newQueue.push(node.left)
      node.right && newQueue.push(node.right)
    })
    res.push(subRes)
    queue = newQueue
  }
  return res
};


// var levelOrder = function(root) {
//   if (!root) return []
//   let queue = [root]
//   let result = []
//   while(queue.length > 0) {
//     let newQueue = []
//     let nodeResult = []
//     for (let i = 0; i < queue.length; i++) {
//       nodeResult.push(queue[i].val)
//       queue[i].left && newQueue.push(queue[i].left)
//       queue[i].right && newQueue.push(queue[i].right)
//     }
//     result.push(nodeResult)
//     queue = newQueue
//   }
//   return result
// }
