// 对称二叉树
// 给定一个二叉树，检查它是否是镜像对称的。

// 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。
//       1
//     / \
//     2   2
//   / \ / \
//   3  4 4  3
// 但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:
//     1
//    / \
//   2   2
//    \   \
//    3    3

// 说明:
// 如果你可以运用递归和迭代两种方法解决这个问题，会很加分。

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

// 错误解法：这个方法能判断出左右子树有相同的节点值，但是判断不出来节点在左右子树上的位置的区别
// var isSymmetric = function(root) {
//   if (!root) { return true }
//   let leftArr = []
//   let rightArr = []

//   leftArr.push(root.val)
//   rightArr.push(root.val)

//   root.left && leftArr.concat(isSymmetric(root.left))
//   root.right && rightArr.concat(isSymmetric(root.right))

//   if (leftArr.length !== rightArr.length) {
//     return false
//   }
//   for(let i = 0; i < leftArr.length; i++) {
//     if (leftArr[i] !== rightArr[i]) {
//       return false
//     }
//   }
//   return true
// };

// 递归
var isSymmetric = function(root) {
  if (!root) {
    return true
  }
  const isMirror = (t1, t2) => {
    if (t1 == null && t2 == null) {
      return true
    }
    if (t1 == null || t2 == null) {
      return false
    }
    if (t1.val !== t2.val) {
      return false
    }
    return isMirror(t1.right, t2.left) && isMirror(t1.left, t2.right)
  }
  return isMirror(root, root)
}

// 迭代
var isSymmetric = function(root) {
  let queue = [root, root]
  while(queue.length > 0) {
    let t1 = queue.pop()
    let t2 = queue.pop()
    if (t1 == null && t2 == null) {
      continue
    }
    if (t1 == null || t2 == null) {
      return false
    }
    if (t1.val !== t2.val) {
      return false
    }
    queue.push(t1.left)
    queue.push(t2.right)
    queue.push(t1.right)
    queue.push(t2.left)
  }
  return true
}
