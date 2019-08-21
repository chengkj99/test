// 将有序数组转换为二叉搜索树

// 将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。

// 本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。

// 示例:
// 给定有序数组: [-10,-3,0,5,9],
// 一个可能的答案是：[0,-3,9,-10,null,5]，它可以表示下面这个高度平衡二叉搜索树：
//       0
//      / \
//    -3   9
//    /   /
//  -10  5

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
// 错误解法：取中间元素作为根节点，使用两侧元素分别建立左右子树
// var sortedArrayToBST = function(nums) {
//   let len = nums.length
//   if (!len) { return null }
//   let midIndex = Math.floor(len / 2) // [0, midIndex] [midIndex, len]
//   let midV = nums[midIndex]
//   let root = { val: midV, left: null, right: null }
//   let nextLeftNode = nextRightNode = null
//   for (let i = midIndex; i >= 0; i--) {
//     if (!nextLeftNode) {
//       nextLeftNode = setNode(root, nums[i])
//     } else {
//       nextLeftNode = setNode(nextLeftNode, nums[i])
//     }
//   }
//   for (let i = midIndex + 1; i < len; i++) {
//     if (!nextRightNode) {
//       nextRightNode = setNode(root, nums[i])
//     } else {
//       nextRightNode = setNode(nextRightNode, nums[i])
//     }
//   }
//   return root
// };

// // input: nodes
// function setNode(node, newVal) {
//   let newNode = createNode(newVal)
//   if (!node) {
//     return newNode
//   }
//   if (newNode.val < node.val) {
//     node.left = newNode
//     return node.left
//   }
//   if (newNode.val > node.val) {
//     node.right = newNode
//     return node.right
//   }
// }

// function createNode(val) {
//   return { val, left: null, right: null }
// }


// 正确解法：（每次）取中间元素作为根节点，使用两侧元素分别建立左右子树，递归
var sortedArrayToBST = function(nums) {
  let len = nums.length
  if (!len) { return null }
  let midIndex = Math.floor(len / 2) // [0, midIndex] [midIndex, len]
  let midV = nums[midIndex]
  let root = { val: midV, left: null, right: null }
  let leftNodes = nums.slice(0, midIndex)
  let rightNodes = nums.slice(midIndex + 1, len)
  root.left = sortedArrayToBST(leftNodes)
  root.right = sortedArrayToBST(rightNodes)
  return root
};

console.log(sortedArrayToBST([0,1,2,3,4,5]))
