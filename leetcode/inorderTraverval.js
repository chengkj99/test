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
//二叉树 中序遍历
var inorderTraversal = function(root) {
  if (!root) {
      return []
  }
  let result = []
  result = result.concat(inorderTraversal(root.left))
  result.push(root.val)
  result = result.concat(inorderTraversal(root.right))
  return result
};
