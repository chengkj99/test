/**
 * Initialize your data structure here.
 */
var MyLinkedList = function(val) {
  this.head = null
  this.length = 0
};

MyLinkedList.prototype.getNode = function(index) {
  if (index < 0 || index >= this.length) {
    return null
  }
  let cur = this.head
  let i = 0
  while(i !== index) {
    cur = cur.next
    i++
  }
  return cur
};
MyLinkedList.prototype.getLastNode = function() {
  let lastNode = this.head
  while (lastNode.next) {
    lastNode = lastNode.next
  }
  return lastNode
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
  let curNode = this.getNode(index)
  if (!curNode) {
    return -1
  }
  return curNode.value
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
  this.head = {
    value: val,
    next: this.head
  }
  this.length ++
}

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let newEndNode = {
      value: val,
      next: null
    }
    let lastNode = this.getLastNode()
    lastNode.next = newEndNode
    this.length ++
}

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
  if (index > this.length || index < 0) {
    return null
  }
  let newNode = {
    value: val,
    next: null
  }
  if (index === 0) {
    this.addAtHead(val)
    return null
  }
  if (index === this.length) {
    this.addAtTail(val)
    return null
  }
  if (0 < index < this.length) {
    let prevNode = this.getNode(index - 1)
    let currentIndexNode = this.getNode(index)
    prevNode.next = newNode
    newNode.next = currentIndexNode
    this.length ++
    return null
  }
  }

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
  if (index < 0 || index >= this.length) {
    return null
  }
  if (index === 0) {
    this.head  = this.head.next
    this.length --
    return
  }
  if ( 0 < index < this.length - 1) {
    let nextNode = this.getNode(index + 1)
    let prevNode = this.getNode(index - 1)
    prevNode.next = nextNode
    this.length --
    return null
  }
  if (index === this.length - 1) {
    let prevNode = this.getNode(index - 1)
    prevNode.next = null
    this.length --
    return null
  }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = Object.create(MyLinkedList).createNew()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */                          //,null,null,null,null,47                                &&,null,null,null,null,null                                             ??,null,66,null,null,null                                     **,null,null,null,56,null,null,null,null,null,null,null,null,null,null,null,56,null,null,null,null,null,null,48,null,48,null,24,null,19,16,null,99,null,null,null,null,null,null,null,null,null]
