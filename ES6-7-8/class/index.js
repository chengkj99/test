/**
 * Created by MaxCheng on 2016/10/12.
 */


// 1.class 基本语法

//定义“类”的方法的时候，前面不需要加上function这个关键字，直接把函数定义放进去了就可以。
// 另外，方法之间不需要逗号分隔，加了会报错。

//
class point{
  constructor(x,y){
    this.x=x;
    this.y=y;
  }
  toString(){
    console.log(this.x+'||'+this.y);
  }
}

console.log(typeof point) //function

// prototype属性继续存在,事实上，类的所有方法都定义在类的prototype属性上面。

let p1=new point(100,200);
p1.toString();

//prototype对象的constructor属性，直接指向“类”的本身，这与ES5的行为是一致的。

console.log(point.prototype.constructor==point);

//类的属性不可枚举

var po=function () {

}
po.prototype.toString=function () {
  console.log('888')
}
po.prototype.toNubmber=function () {
  console.log(999)
}
console.log(Object.keys(po.prototype)) //["toString", "toNubmber"]


class poc{
  constructor(){

  }
  toString(){

  }
}
console.log(Object.keys(poc.prototype))//[] 类的属性不可枚举


// 类的属性名可以采用表达式

let className='chengkangjian';

class poc2{
  constructor(){

  }
  [className](){
    console.log('cheng');
  }
}
let ckj=new poc2();
ckj.chengkangjian();


//constructor方法
// new命令生成对象实例时，自动调用该方法。
//this默认指向类自身对象，必须通过new实例化才能执行。


// 2.class 基本语法


//通过extends这个关键字调用了父类的所有属性和方法。

//通过constructor构造函数，super()方法来继承父类的属性和方法，并新建父类的this对象。
class colorPoint extends point{
  constructor(x,y){
    super(x,y)
  }
  toStr(){
    return super.toString();
  }
}

let cp=new colorPoint('ee','uu');
cp.toStr();
console.log(cp instanceof colorPoint);//true

//3.类的_proto_和prototype

class parent{}


console.log(parent.prototype);
console.log(parent._proto_);

console.log('--');
class child extends parent{}

console.log(child.prototype);
console.log(child.prototype._proto_);












