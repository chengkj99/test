// 请判断一个链表是否为回文链表。

// 示例 1:

// 输入: 1->2
// 输出: false
// 示例 2:

// 输入: 1->2->2->1
// 输出: true
// 进阶：
// 你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？

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
// 通过将链表转为数组判断
var isPalindrome = function(head) {
  if (!head) {
    return true
  }
  let res = []
  while (head) {
    res.push(head.val)
    head = head.next
  }
  let len = res.length
  for (let i = 0; i < len; i++) {
    let start = res[i]
    let end = res[len - i - 1]
    if (start !== end) {
      return false
    }
    if (i >= len - i - 1) {
      return true
    }
  }
}

// 找到中点，龟兔赛跑算法
var findMid = head => {
  let p = head
  let q = head.next
  if (!p || !q) {
    return p
  }
  while (q !== null && q.next !== null) {
    p = p.next
    q = q.next.next
  }
  return p
}

// 链表反转，递归
var reverse = head => {
  if (!head || !head.next) {
    return head
  }
  let newHead = reverse(head.next)
  head.next.next = head
  head.next = null
  return newHead
}


//  利用以上两个函数，进行回文判断
//  思路: 1. 寻找链表中间节点；2. 反转后半部分节点；3. 迭代循环判断前后两部分节点的值是不是相等，出现不相等，返回 false，否则返回 true。
//  注意: 空链表也是属于回文链表。
var isPalindromePro = function(head) {
  if (!head) {
    return true
  }
  let mid = findMid(head)
  let afterHalfHead = reverse(mid.next)
  mid.next = null
  while (head && afterHalfHead) {
    if (head.val !== afterHalfHead.val) {
      return false
    }
    head = head.next
    afterHalfHead = afterHalfHead.next
  }
  return true
}

var head = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: null
      }
    }
  }
}

console.log(isPalindrome(head))
