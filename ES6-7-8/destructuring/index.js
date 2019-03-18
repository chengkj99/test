// 解构赋值

// 完全结构
let [a, b, c] = [1, 2, 3]  //模式匹配
let [foo, [[bar], baz]] = [1, [[2], 3]]; //模式匹配
let [head, ...tail] = [1, 2, 3, 4];
console.log(a, b, c);
console.log(foo, bar, baz);
console.log(head, tail);

// 不完全结构
let [e, [f], g] = [1, [2, 3], 4];
console.log(e, f, g);


// 报错
// let [foo] = 1;
// let [foo] = false;
// let [foo] = NaN;
// let [foo] = undefined;
// let [foo] = null;
// let [foo] = {};

// Set 结构也可以
let [x, y, z] = new Set(['a', 'b', 'c']);
console.log(x, y, z);

//** 只要某种数据结构具有 Iterator 接口，都可以采用数组形式的解构赋值。
