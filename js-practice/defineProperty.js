var obj = {
  a: 'a'
}

Object.defineProperty(obj, 'name', {
  value: 'cheng',
  writable: true
})

console.log('...', Object.getOwnPropertyDescriptor(obj, "name"))
// {value: "cheng", writable: true, enumerable: false, configurable: false}

obj.name = "kangjian"

console.log('...', Object.getOwnPropertyDescriptor(obj, "name"))
// {value: "kangjian", writable: true, enumerable: false, configurable: false}


// Object.defineProperty(dom, 'translateX', {
// set: function(value) {
//          var transformText = 'translateX(' + value + 'px)';
//         dom.style.webkitTransform = transformText;
//         dom.style.transform = transformText;
// }
// //这样再后面调用的时候, 十分简单
// dom.translateX = 10;
// dom.translateX = -10;
// //甚至可以拓展设置如scale, originX, translateZ,等各个属性，达到下面的效果
// dom.scale = 1.5;  //放大1.5倍
// dom.originX = 5;  //设置中心点X
// }
