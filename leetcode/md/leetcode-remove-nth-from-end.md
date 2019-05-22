---
title: LeetCode 删除链表的倒数第 N 个节点
date: 2019-05-10 16:15:33
tags:
  - leetcode
thumbnail: http://ckj-bucket.oss-cn-beijing.aliyuncs.com/chengkj-blog/leetcode.png
---

给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。

**示例:**

```
给定一个链表: 1->2->3->4->5, 和 n = 2.
当删除了倒数第二个节点后，链表变为 1->2->3->5.
```

**说明：**
给定的 n 保证是有效的。

**进阶：**
你能尝试使用一趟扫描实现吗？

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
 * @param {number} n
 * @return {ListNode}
 */

var removeNthFromEnd = function(head, n) {
  let count = getHeadLength(head);
  if (count === 1 || count === 0) {
    return (head = null);
  }
  //  删除最后一个
  if (n === 1) {
    deleteEndNode(head);
    return head;
  }
  //  目前删除的节点位置，从 1 开始
  let index = count - n;
  //  刪除非最后一个
  deleteNode(head, index);
  return head;
};

var getHeadLength = function(head) {
  let count = 1;
  //  定义一个辅助指针
  let pointer = head;
  while (pointer.next) {
    pointer = pointer.next;
    count++;
  }
  return count;
};
var deleteNode = function(head, index) {
  while (index) {
    head = head.next;
    index--;
  }
  if (head.next) {
    head.val = head.next.val;
    head.next = head.next.next;
  }
};
var deleteEndNode = function(head) {
  while (head.next) {
    if (head.next && head.next.next) {
      head = head.next;
    } else {
      head.next = null;
    }
  }
};
```

**解题思路:**

需要考虑边界情况，需要考虑节点的位置是不是最后一个。
另外，删除的位置是倒数开始算的，要确定对倒数的目前删除位置。

思路流程：

1. 删除链表倒数第 N 个节点
2. 链表长度为 1，删除 1，return null
3. 链表长度为 0，return null
4. 链表长度大于 1，删除一个位置
5. 链表长度大于 1，删除最后一个位置
