// 删除链表的倒数第 N 个节点
// 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。

// 示例：
// 给定一个链表: 1->2->3->4->5, 和 n = 2.
// 当删除了倒数第二个节点后，链表变为 1->2->3->5.

// 说明：
// 给定的 n 保证是有效的。

// 进阶：
// 你能尝试使用一趟扫描实现吗？

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let count = getHeadLength(head)
  if (count === 1 || count === 0) {
    return head = null
  }
  // 删除最后一个
  if (n === 1) {
    deleteEndNode(head)
    return head
  }

  // 目前删除的节点位置，从 1 开始
  let index = count - n
  // 刪除非最后一个
  deleteNode(head, index)
  return head
}

var getHeadLength = function(head) {
  let count = 1
  // 定义一个辅助指针
  let pointer = head
  while (pointer.next) {
    pointer = pointer.next
    count++
  }
  return count
}
var deleteNode = function(head, index) {
  while (index) {
    head = head.next
    index--
  }
  if (head.next) {
    head.val = head.next.val
    head.next = head.next.next
  }
}
var deleteEndNode = function(head) {
  while (head.next) {
    if (head.next && head.next.next) {
      head = head.next
    } else {
      head.next = null
    }
  }
}

// 解题思路：
// 删除链表倒数第 N 个节点，
// 链表长度为 1，删除 1，return null
// 链表长度为 0，return null
// 链表长度大于 1，删除一个位置
// 链表长度大于 1，删除最后一个位置

console.log(removeNthFromEnd(head, 1)) // { val: 4, next: { val: 5, next: { val: 1, next: null } } }

// 测试数据
// var head = {
//   val: 4,
//   next: {
//     val: 5,
//     next: {
//       val: 1,
//       next: {
//         val: 9,
//         next: null
//       }
//     }
//   }
// }
