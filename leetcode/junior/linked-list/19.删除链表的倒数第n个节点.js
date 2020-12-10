function deleteNodeFromEnd(head, n) {
  if (n === 0) {
    return head
  }
  // 创建一个哑结点，这样可以不用对头节点进行特殊判断了
  let preHead = {
    val: -1,
    next: head
  }
  let first = preHead
  let second = preHead
  for (let i = 0; i < n; i++) {
    second = second.next
  }
  // second.next 为空时，second 为最后一个节点，first 为倒数第 N - 1 个节点
  while (second && second.next) {
    first = first.next
    second = second.next
  }
  first.next = first.next ? first.next.next : null
  return preHead.next
}

const h = {
  val: 1,
  next: {
    val: 2,
    next: null
  }
}
console.log(deleteNodeFromEnd(h, 1))
