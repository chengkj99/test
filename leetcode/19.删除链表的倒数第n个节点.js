function deleteNodeFromEnd(head, n) {
  if (n === 0) {
    return head
  }
  let first = head
  let newHead = first
  let second = head
  for (let i = 0; i < n; i++) {
    second = second.next
  }

  while (second && second.next) {
    first = first.next
    second = second.next
  }
  first.next = first.next ? first.next.next : null
  return newHead
}
