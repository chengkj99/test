/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

// 二叉树 前序遍历
var preorderTraversal = function(root) {
  if (!root) {
      return []
  }
  let result = []
  result.push(root.val)
  result = result.concat(preorderTraversal(root.left))
  result = result.concat(preorderTraversal(root.right))
  return result
};
