// 反转链表
// 反转一个单链表。

// 示例:
// 输入: 1->2->3->4->5->NULL
// 输出: 5->4->3->2->1->NULL
// 进阶:
// 你可以迭代或递归地反转链表。你能否用两种方法解决这道题？

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// 方法1：迭代
var reverseList = function(head) {
  let pointer = {
    val: head.val,
    next: null
  }
  while (head.next) {
    head = head.next
    pointer = {
      val: head.val,
      next: pointer
    }
  }
  return pointer
}

// 方法2：递归
var reverseList = function(head) {
  if (head === null || head.next === null) {
    return head
  }
  var new_head = reverseList(head.next)
  head.next.next = head
  head.next = null
  return new_head
}

// var head = {
//   val: 1,
//   next: {
//     val: 2,
//     next: {
//       val: 3,
//       next: {
//         val: 4,
//         next: null
//       }
//     }
//   }
// }
