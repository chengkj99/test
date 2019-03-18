<!-- 前世今生，看透编程 -->

# 问题

## 为什么会有 rxjs


## 什么是 rxjs

RxJS 是一个库，它通过使用 observable 序列来编写异步和基于事件的程序。它提供了一个核心类型 Observable，附属类型 (Observer、 Schedulers、 Subjects) 和受 [Array#extras] 启发的操作符 (map、filter、reduce、every, 等等)，这些数组操作符可以把异步事件作为集合来处理。

## 什么是 Observable

### 创建 Observables

```js
var observable = Rx.Observable.create(function (observer) {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  setTimeout(() => {
    observer.next(4);
    observer.complete();
  }, 1000);
});
```

### 订阅

```js
observable.subscribe(x => console.log(x));
```

### 执行

### 清理

## 什么是 Observer

## 什么是 Subscription

## 什么是 Operators

## 什么是 Scheduler
