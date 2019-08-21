---
title: LeetCode 反转单链表
date: 2019-05-13 14:39:28
tags:
  - leetcode
thumbnail: https://ckj-bucket.oss-cn-beijing.aliyuncs.com/bua-rsp/leetcode-white.png
---

反转一个单链表。

**示例:**

```
输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
```

**进阶:**
你可以迭代或递归地反转链表。你能否用两种方法解决这道题？

**解题:**

```js
<!-- 方法1：迭代 -->
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

<!-- 方法2：递归 -->
var reverseList = function(head) {
  if (head === null || head.next === null) {
    return head
  }
  var new_head = reverseList(head.next)
  head.next.next = head
  head.next = null
  return new_head
}
```

**解题思路:**

迭代的思路比较容易理解，就是先将第一个头结点构造为尾节点，后续依次迭代每一个结点，从尾节点开始将依次链接。

递归的思路想了挺久，然后通过断点调试一步步走才理解了这个思路，比如：链表结构是：`1 -> 2 -> 3 -> 4`，如果从前向后的顺序递归，思路没有行通；从后向前递归，也就是先反转 `3 -> 4 => 4 -> 3`，再反转 `2 -> 4 -> 3 => 4 -> 3 -> 2`，再反转 `1 -> 4 -> 3 -> 2 => 4 -> 3 -> 2 -> 1`，这个过程就是递归的过程。麻烦的点在于如何保留 head 指针，这里引入了 new_head 作为每次反转后的新指针，所以它的值变化情况是：`4 => 4 -> 3 => 4 -> 3 -> 2 => 4 -> 3 -> 2 -> 1`。
