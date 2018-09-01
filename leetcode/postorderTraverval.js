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
// 二叉树 后序遍历
var postorderTraversal = function(root) {
  if (!root) {
    return []
  }
  let result = []
  result = result.concat(postorderTraversal(root.left))
  result = result.concat(postorderTraversal(root.right))
  result.push(root.val)
  return result
};
