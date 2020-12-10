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
