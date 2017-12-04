// b.js
// import {foo} from './a.js';
// export function bar() {
//   if (Math.random() > 0.5) {
//     foo();
//   }
// }
//
// b -> a:foo() -> b:bar()
//
// a -> b:foo() -> a:foo()


import { a } from './a.js'
console.log(a)
// setTimeout(a = 20, 1000)
// console.log('b.js..', a)
