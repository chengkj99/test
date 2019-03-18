/**
 * Created by MaxCheng on 2016/10/13.
 */


// 解构赋值：模式匹配



//以前
var a=1;
var b=2;


//数组的结构赋值
//now

var [a,b,c]=[1,2,3];
console.log(a);//1
console.log(b);//2
console.log(c);//3

let [aa,...args]=[1,2,3,4];
console.log(aa);//1
console.log(args);//[2,3,4]

// 如果解构不成功，变量的值就等于undefined

let [aaa,bbb]=[1];
console.log(aaa);//1
console.log(bbb);//undefined

//不完全解构
let [a1, [b1], d1] = [1, [2, 3], 4];
console.log(a1); // 1
console.log(b1);// 2
console.log(d1); // 4
//对象的结构赋值
//


