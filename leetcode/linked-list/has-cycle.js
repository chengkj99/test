// 环形链表
// 给定一个链表，判断链表中是否有环。

// 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。

// 示例 1：
// 输入：head = [3,2,0,-4], pos = 1
// 输出：true
// 解释：链表中有一个环，其尾部连接到第二个节点。

// 示例 2：
// 输入：head = [1,2], pos = 0
// 输出：true
// 解释：链表中有一个环，其尾部连接到第一个节点。

// 示例 3：
// 输入：head = [1], pos = -1
// 输出：false
// 解释：链表中没有环。

// 进阶：
// 你能用 O(1)（即，常量）内存解决此问题吗？

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 通过将节点存入数组，判断后面的节点在数组中是否存在相等节点
var hasCycle = function(head) {
  if (!head || !head.next) {
    return false
  }
  let list = []
  let pointer = head
  while (pointer) {
    if (list.indexOf(pointer) > -1) return true
    list.push(pointer)
    pointer = pointer.next
  }
  return false
}

// 将数组使用 Map 数据结构替换后，性能大大提升
var hasCyclePro = function(head) {
  if (!head || !head.next) {
    return false
  }
  let hash = new Map()
  let pointer = head
  while (pointer) {
    if (hash.has(pointer)) return true
    hash.set(pointer)
    pointer = pointer.next
  }
  return false
}

var subHead = {
  val: 2,
  next: {
    val: 3,
    next: {
      val: 4,
      next: null
    }
  }
}
subHead.next.next.next = subHead
var head = {
  val: 1,
  next: {
    val: 11,
    next: subHead
  }
}

console.log(hasCycle(head)) // true
console.log(hasCyclePro(head)) // true
