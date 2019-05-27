// 给定一个二叉树，判断其是否是一个有效的二叉搜索树。

// 假设一个二叉搜索树具有如下特征：

// 若任意节点的左子树不空，则左子树上所有节点的值均小于它的根节点的值；
// 若任意节点的右子树不空，则右子树上所有节点的值均大于它的根节点的值；
// 任意节点的左、右子树也分别为二叉查找树；
// 没有键值相等的节点。

// 示例 1:
// 输入:
//     2
//    / \
//   1   3
// 输出: true

// 示例 2:
// 输入:
//     5
//    / \
//   1   4
//      / \
//     3   6
// 输出: false
// 解释: 输入为: [5,1,4,null,null,3,6]。
//      根节点的值为 5 ，但是其右子节点值为 4 。

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
// 先判断异常或者错误的情况，最后返回正常结果。
// 这个函数判断的是当前节点对比符合二叉搜索树的值正确性，应该和根节点的值判断，使其符合二叉搜索树的正确性。

// var isValidBST = function(root) {
//   debugger
//   if (!root) return true
//   if (root.left) {
//     if (root.left.val > root.val) {
//       return false
//     }
//   } else if (root.right) {
//     if (root.right.val < root.val) {
//       return false
//     }
//   }
//   return isValidBST(root.left) && isValidBST(root.right)
// }
// 于是需要重新找方法，这样看来递归的方式可能不是很适用了。
// 仍然使用递归的方式，只是引入了两个全局变量，一个是默认的 isValid 状态，一个是最小值作为初始的最大值。
// 因为搜索二叉树的中序遍历结果应当是一个递增数列。
// 所以进行中序遍历； 遍历的同时将当前输出的值与之前输出的值进行比较，如果当前值小于或等于之前的输出值，则直接返回false
var isValidBST = function(root) {
  let isValid = true
  let maxV = -Number.MAX_VALUE
  if (!root) { return isValid }
  const inOrderTraversal = node => {
    if (node) {
      inOrderTraversal(node.left)
      if (node.val > maxV) {
        maxV = node.val
      } else {
        isValid = false
      }
      inOrderTraversal(node.right)
    }
  }
  inOrderTraversal(root)
  return isValid
}

// [10,5,15,null,null,6,20]
const root = {
  val: 10,
  left: {
    val: 5,
    left: null,
    right: null
  },
  right: {
    val: 15,
    left: {
      val: 9,
      left: null,
      right: null
    },
    right: {
      val: 20,
      left: null,
      right: null
    }
  }
}

console.log(isValidBST(root)) // false
