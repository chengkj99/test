---
title: LeetCode 合并两个有序链表
date: 2019-05-14 14:50:18
tags:
  - leetcode
thumbnail: http://ckj-bucket.oss-cn-beijing.aliyuncs.com/chengkj-blog/leetcode.png
---

合并两个有序链表
将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。

**示例:**

```js
输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4
```

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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// 遍历解法
var mergeTwoLists = function(l1, l2) {
  let head = { val: -1, next: null }
  let curNode = head
  while (l1 && l2) {
    if (l1.val < l2.val) {
      curNode.next = l1
      l1 = l1.next
    } else {
      curNode.next = l2
      l2 = l2.next
    }
    curNode = curNode.next
  }
  curNode.next = l1 ? l1 : l2
  return head.next
}

// 递归解法
var mergeTwoLists = function(l1, l2) {
  if (!l1) {
    return l2
  }
  if (!l2) {
    return l1
  }

  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  } else {
    l2.next = mergeTwoLists(l2.next, l1)
    return l2
  }
}V
```

**解题思路:**

遍历解法：同时不断遍历两个链表，取出小的追加到新的头节点后，直至两者其中一个为空，再将另一者追加的新链表最后。

递归解法：递归的核心方法是将问题规模不断缩小化，合并两个长度为n和m的链表，在value(n) < value(m)可以将规模缩减为合并长度为(n-1)和m的链表。
