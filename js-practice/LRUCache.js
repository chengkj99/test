// class LRUCache {}

// 1.指定缓存容量
// 2.get(key),put(key, value)
// 3.时间复杂度o(1)
// 4.缓存策略

// const c = new MyCache(2);
// c.put(1, 1);// 1-1
// c.put(1, 2);// 1-2
// c.put(2, 2);// 2-2, 1-2
// c.put(3, 3);// 3-3, 2-2
// c.get(2); // 2 | 2-2, 3-3
// c.put(4,, 4);// 4-4, 2-2

class LRUCache {

  constructor(num) {
    this.num = num
    this.store = new Map()
  }

  put(key, value) {
    if(this.store.size === this.num) {}
    this.num++
    this.store.set(key, value)
  }

  get(key) {
    return this.store.get(key)
  }
}

const lruc = new LRUCache(3)
lruc.put(1,'111')
lruc.put(2,'222')
console.log(lruc.get(1))
console.log(lruc.get(2))


/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity
    this.cache = new Map()
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    let item = this.cache.get(key)
    if (item) {
        this.cache.delete(key)
        this.cache.set(key, item)
    }
    return item || -1
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    const isExist = this.cache.has(key)
    const isMaxCapacity = this.cache.size === this.capacity
    if (isExist) {
        this.cache.delete(key)
    } else if (isMaxCapacity) {
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
