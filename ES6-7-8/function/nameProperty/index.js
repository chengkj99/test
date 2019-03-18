/**
 * Created by MaxCheng on 2016/9/27.
 */
//函数的拓展
  //箭头函数

//返回名字
function add() {}
console.log(add.name);

// 匿名函数，es5返回'',es6返回函数名
var func1 = function () {};
console.log(func1.name)

//具名函数

const func2 =function me() {}
console.log(func2.name)  //me

//构造函数

let nameFunc=(new Function).name;
console.log(nameFunc)// "anonymous"

//bind函数
let bindFuncName=func1.bind({}).name;
console.log(bindFuncName);//bound func1



