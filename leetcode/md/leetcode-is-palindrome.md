---
title: LeetCode 链表是否为回文链表
date: 2019-05-15 16:27:41
tags: -leetcode
thumbnail: https://ckj-bucket.oss-cn-beijing.aliyuncs.com/bua-rsp/leetcode-white.png
---

请判断一个链表是否为回文链表。

**示例:**

```js
<!-- 示例1 -->
输入: 1->2
输出: false

<!-- 示例2 -->
输入: 1->2->2->1
输出: true
```

**进阶:**
你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？

**解题:**

```js
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
<!-- 方法1: 通过将链表转为数组，判断数组是否回文 -->
<!-- 思路: 1. 链表转数组； 2. 循环判断数组的首尾节点，只要出现不相等节点，则返回 false, 否则返回 true。 -->
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

<!-- 方法2: 找到链表中间节点，反转一侧节点，回文判断 -->
<!-- 利用龟兔赛跑算法，找到中间节点 -->
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
<!-- 利用递归反转节点 -->
var reverse = head => {
  if (!head || !head.next) {
    return head
  }
  let newHead = reverse(head.next)
  head.next.next = head
  head.next = null
  return newHead
}
<!-- 利用以上两个函数，进行回文判断 -->
<!-- 思路: 1. 寻找链表中间节点；2. 反转后半部分节点；3. 迭代循环判断前后两部分节点的值是不是相等，出现不相等，返回 false，否则返回 true。 -->
<!-- 注意: 空链表也是属于回文链表。 -->
var isPalindrome = function(head) {
  if (!head) { return true }
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
```

**总结:**

方法 1 是自己想的，虽然测试可用，代码还更少，只是不够高级。

方法 2 参考了别人的思路，然后自己写的，思路很正统，高级很多，而且很高效。
