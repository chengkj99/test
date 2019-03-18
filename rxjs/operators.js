import { Observable, of, from, interval } from "rxjs";
import { take } from 'rxjs/operators'
// 自定义一个操作符：

// function multiplyByten(input) {
//   let output = Observable.create(observer => {
//     input.subscribe({
//       next: v => observer.next(v * 10),
//       error: err => observer.error(err),
//       complete: () => observer.complete()
//     })
//   })
//   return output
// }

// let ob = from([1, 2, 3, 4])
// let output = multiplyByten(ob)
// output.subscribe(res => console.log('res', res))


// 实例操作符，指 Observable 实例上的方法
// 如果上面的 multiplyByTen 是官方提供的实例操作符，它看起来大致是这个样子的
// Observable.prototype.multiplyByTen = function multiplyByTen() {
//   var input = this;
//   return Observable.create(function subscribe(observer) {
//     input.subscribe({
//       next: (v) => observer.next(10 * v),
//       error: (err) => observer.error(err),
//       complete: () => observer.complete()
//     });
//   });
// }

// let observable = from([1, 2, 3, 4]).multiplyByTen();

// observable.subscribe(x => console.log(x));


// 静态操作符: 直接附加到 Observable 类上的。静态操作符在内部不使用 this 关键字，而是完全依赖于它的参数。
// 静态操作符是附加到 Observalbe 类上的纯函数，通常用来从头开始创建 Observalbe。
// 一个典型的静态操作符例子就是 interval 函数。它接收一个数字(非 Observable)作为参数，并生产一个 Observable 作为输出：

const numbers = interval(1000);
const takeFourNumbers = numbers.pipe(take(4));
takeFourNumbers.subscribe(res => console.log('!!', res));
