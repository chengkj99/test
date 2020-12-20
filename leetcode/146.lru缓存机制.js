/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU缓存机制
 */

// @lc code=start
/**
 * @param {maxber} capacity
 */
var LRUCache = function (max) {
  this.max = max
  this.cache = new Map()
};

/**
 * @param {maxber} key
 * @return {maxber}
 */
LRUCache.prototype.get = function (key) {
  let item = this.cache.get(key)
  if (item) {
    this.cache.delete(key)
    this.cache.set(key, item)
  }
  return item || -1
};

/**
 * @param {maxber} key
 * @param {maxber} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.cache.has(key)) {
    this.cache.delete(key)
  } else if (this.cache.size === this.max) {
    this.cache.delete(this.cache.keys().next().value)
  }
  this.cache.set(key, value)
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
