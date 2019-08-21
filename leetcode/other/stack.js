/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = []
    this.length = 0
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x)
    this.length ++
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (this.length == 0) {
       return
    }
    this.stack.pop()
    this.length --
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if (this.length == 0) {
       return -1
    }
    return this.stack[this.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    if (this.length == 0) return -1
    return Math.min(...this.stack)
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

// EXAMPLE
// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

// Example 1:

// Input: "()"
// Output: true
// Example 2:

// Input: "()[]{}"
// Output: true
// Example 3:

// Input: "(]"
// Output: false
// Example 4:

// Input: "([)]"
// Output: false
// Example 5:

// Input: "{[]}"
// Output: true
/**
 * @param {string} s
 * @return {boolean}
 */

//  利用先入后出，也就是后进先出的思想，也就是栈的特性来做这道题
var isValid = function(s) {
  let map = {
      '(': -1,
      ')': 1,
      '[': -2,
      ']': 2,
      '{': -3,
      '}': 3
  }
  let stack = []
  for (let i = 0; i < s.length; i++) {
      if (map[s[i]] < 0) {
          stack.push(s[i])
      } else {
          let last = stack.pop()
          if (map[last] + map[s[i]] != 0) { return false }
      }
  }
  if (stack.length > 0) return false
  return true
};
