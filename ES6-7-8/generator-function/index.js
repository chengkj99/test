/**
 * Created by MaxCheng on 2016/10/14.
 */

// generator function

//类似于一个状态机，记录函数的内部状态

// function关键字与函数名之间有一个星号；二是，函数体内部使用yield语句，定义不同的内部状态
//yield语句是暂停执行的标记，而next方法可以恢复执行。


function* gf() {
  yield'aaaaaa';
  yield'bbbbbb';
  yield'cccccc';
  yield'dddddd';
  return 'ending';
}
let gf1=gf();
console.log(gf1.next());
console.log(gf1.next());

