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
// 层序遍历
var levelOrder = function(root) {
  if (!root) {
      return []
  }

  let result  = []
  let queue = [root]
  while (queue.length > 0) {
      let newQueue = []
      let nodeArr = []
      queue.forEach(node => {
        nodeArr.push(node.val)
        node.left && newQueue.push(node.left)
        node.right && newQueue.push(node.right)
      })
      result.push(nodeArr)
      queue = newQueue
  }
  return result
};


// 获取路径数和遍历结果
function levelOrder2(root, target) {
  if (!root) {
    return []
  }
  let result = []
  let queue = root
  let step = 0
  while (queue.length > 0) {
    let newQueue = []
    step ++
    for (let item of queue) {
      result.push(item.value)
      if (target == item.value) {
        return ({result: result, step: step})
      }
      item.children && newQueue.push(...item.children)
    }
    queue = newQueue
  }
  return ({result: result, step: step})
}