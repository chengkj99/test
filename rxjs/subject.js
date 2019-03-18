import { Subject, from, of, BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs'

// let sub = new Subject()
// sub.subscribe(res => {
//   console.log('sub A', res)
// })
// sub.subscribe(res => {
//   console.log('sub B', res)
// })


// // sub.next(1)
// // sub.next(2)

// // 因为Subject 是观察者， Subject 可以作为参数传给任何 Observable 的 subscribe 方法

// let ob = from([1,2,3])
// // 单播的 Observable
// ob.subscribe(res => {
//   console.log(res);
// })

// // 通过 Subject 将单播的 Observable 执行转换为多播的，Subjects（Subject：BehaviorSubject、ReplaySubject 和 AsyncSubject） 也是将任意 Observable 执行共享给多个观察者的唯一方式。
// ob.subscribe(sub)

// --------------------------------------------------- BehaviorSubject
// var subject = new BehaviorSubject(0); // 0是初始值

// subject.subscribe({
//   next: (v) => console.log('observerA: ' + v)
// });

// subject.next(1);
// subject.next(2);

// subject.subscribe({
//   next: (v) => console.log('observerB: ' + v)
// });

// subject.next(3);


// ------------------------------------------------------ ReplaySubject

// var subject  = new ReplaySubject(3)
// subject.subscribe(res => {
//   console.log('observer A', res);
// })

// subject.next(1)
// subject.next(2)
// subject.next(3)
// subject.next(4)

// subject.subscribe(res => {
//   console.log('observer B', res);
// })

// subject.next(5)
// subject.next(6)

// 12233445566 error
// 12342345566 right

// ------------------------------------------------------ AsyncSubject
// 等待 complete 通知，以发送一个单个值

var subject = new AsyncSubject();

subject.subscribe({
  next: (v) => console.log('observerA: ' + v)
});

subject.next(1);
subject.next(2);
subject.next(3);
subject.next(4);

subject.subscribe({
  next: (v) => console.log('observerB: ' + v)
});

subject.next(5);
subject.complete();

// 5 5
