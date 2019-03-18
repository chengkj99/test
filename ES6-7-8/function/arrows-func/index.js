/**
 * Created by MaxCheng on 2016/9/27.
 */
//函数的拓展
// 箭头函数
  // 参数 => 操作以及返回值


  //一个参数的情况
var f = v => v;
console.log(f(8));//8

  //不需要参数或者需要多个参数,就用括号括起来他们
var f1= () => 6;
console.log(f1());//6

var sum = (n1,n2) => n1+n2;
console.log(sum(5,6));//11

var f3 = id => ({id:id,name:temp}); //返回值是一个对象时，需要加上括号。因为大括号默认被认为是代码块。


   //如果箭头函数的代码块部分多于一条语句，就要使用大括号将它们括起来，并且使用return语句返回。

var f4=v=>{
  if(v<5){
    v*=v;
  }else{
    v+=v;
  }
  return v;
}
console.log('f4(3):',f4(3));
console.log('f4(8):',f4(8));

  // 用箭头函数写两个工具函数也是很简洁
const division = n => n/2;
const multi = n => n*n;
console.log(division(100));
console.log(multi(5));


  // 箭头函数能够简化回调函数

// 正常函数写法
[1,2,3].map(function (x) {
  return x * x;
});
//es6
console.log([1,2,3].map( x => x*x)); //[1,4,9]

  // 结合reset参数
const arg=(...nums) => nums;
console.log(arg(1,2,3,4,5,6)); //[1, 2, 3, 4, 5, 6]


//箭头函数没有自己的this,以下三个变量在箭头函数之中也是不存在的。
// 所以当然也就不能用call()、apply()、bind()这些方法去改变this的指向


function foo() {
  return () => {
    return () => {
      return () => {
        console.log('id:', this.id);
      };
    };
  };
}

var f = foo.call({id: 1});

var t1 = f.call({id: 2})()(); // id: 1
var t2 = f().call({id: 3})(); // id: 1
var t3 = f()().call({id: 4}); // id: 1


//指向外层函数的对应变量：arguments、super、new.target

function argumentsFunc() {
  setTimeout(()=>{
    console.log('args:',arguments)
  },1000)
}
argumentsFunc(9,8,7,6,5);



// JavaScript语言的this对象一直是一个令人头痛的问题，在对象方法中使用this，必须非常小心。
// 箭头函数”绑定”this，很大程度上解决了这个困扰。



