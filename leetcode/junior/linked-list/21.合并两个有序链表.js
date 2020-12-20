/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// 迭代
var mergeTwoLists = function (l1, l2) {
  let prehead = {
    val: -1,
    next: null
  }
  let pre = prehead
  while (l1 && l2) {
    if (l1.val < l2.val) {
      pre.next = l1
      l1 = l1.next
    } else {
      pre.next = l2
      l2 = l2.next
    }
    pre = pre.next
  }
  if (!l1) {
    pre.next = l2
  }
  if (!l2) {
    pre.next = l1
  }
  return prehead.next
};

// 递归
var mergeTwoLists = function (l1, l2) {
  if (!l1) return l2
  if (!l2) return l1
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  } else {
    l2.next = mergeTwoLists(l1, l2.next)
    return l2
  }
};

const l1 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 4,
      next: null
    }
  }
}
const l2 = {
  val: 2,
  next: {
    val: 3,
    next: {
      val: 5,
      next: null
    }
  }
}

console.log('##:', mergeTwoLists(l1, l2));



// @lc code=end
