import { Observable, from, of } from 'rxjs'

let s = of('foo', 'bar')

// let a = from([1,2,3])
let a = of([1,2,3])

// let ob = Observable.create(observer => {
//   observer.next('1')
//   observer.next('2')
//   observer.next('3')
//   setTimeout(() => {
//     observer.next('4')
//     observer.complete()
//   }, 1000)
// })

s.subscribe({
  next: x => { console.log(x) },
  error: err => { console.log('err', err) },
  complete: () => { console.log('complete') }
})

// var button = document.querySelector('button')
// var rate = 1000
// var lastClick = Date.now()
// button.addEventListener('click', () => {
//   if (Date.now() - lastClick >= rate) {
//     console.log('click');
//     lastClick = Date.now()
//   }
// })

// var button = document.querySelector('button')
// Observable.fromEvent(button, 'click')
// .throttleTime(1000)
// .scan(count => count + 1, 0)
// .subscribe(count => {console.log(count)})

// -------------------------------------------------------------------------------------------------------

// 什么是 Observable: 创建  订阅  执行  清理

// 1.创建 Observables
// var observable = Rx.Observable.create(function (observer) {
//   observer.next(1);
//   observer.next(2);
//   observer.next(3);
//   setTimeout(() => {
//     observer.next(4);
//     observer.complete();
//   }, 1000);
// });



// 2.订阅 Observables
// observable.subscribe(x => console.log(x));

// 3.执行 Observables
// Observable.create(function subscribe(observer) {...}) 中...的代码表示 “Observable 执行”
// var observable = Rx.Observable.create(function subscribe(observer) {
//   observer.next(1);
//   observer.next(2);
//   observer.next(3);
//   observer.complete();
// });

// 4.清理 Observables
// var observable = Rx.Observable.from([10, 20, 30]);
// var subscription = observable.subscribe(x => console.log(x));
// // 稍后：
// subscription.unsubscribe();


// 什么是 Observer: 观察者是由 Observable 发送的值的消费者
// 定义：
// var observer = {
//   next: x => console.log('Observer got a next value: ' + x),
//   error: err => console.error('Observer got an error: ' + err),
//   complete: () => console.log('Observer got a complete notification'),
// };
// 使用时，需要把它提供给 Observable 的 subscribe 方法：
// observable.subscribe(observer);



// 什么是 Subscription: Subscription 是表示可清理资源的对象，通常是启动 “Observable 执行”的一种方式

// var observable = Rx.Observable.interval(1000);
// var subscription = observable.subscribe(x => console.log(x));
// // 稍后：
// // 这会取消正在进行中的 Observable 执行
// // Observable 执行是通过使用观察者调用 subscribe 方法启动的
// subscription.unsubscribe();

// 什么是 subject: 是一种特殊类型的 Observable，它允许将值多播给多个观察者，所以 Subject 是多播的，而普通的 Observables 是单播的
// 见 ./subject.js


// 什么是 Operators: 操作符是 Observable 类型上的方法，比如 .map(...)、.filter(...)、.merge(...)，等等。当操作符被调用时，它们不会改变已经存在的 Observable 实例。相反，它们返回一个新的 Observable ，它的 subscription 逻辑基于第一个 Observable 。



// 什么调度器:


