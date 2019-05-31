<!-- 学习 canvas -->
## 渲染上下文

`<canvas>` 元素创造了一个固定大小的画布，它公开了一个或多个渲染上下文，其可以用来绘制和处理要展示的内容。其他种类的上下文也许提供了不同种类的渲染方式；比如， WebGL 使用了基于 OpenGL ES 的 3D 上下文 ("experimental-webgl") 。

canvas起初是空白的。为了展示，首先脚本需要找到渲染上下文，然后在它的上面绘制。`<canvas>` 元素有一个叫做 getContext() 的方法，这个方法是用来获得渲染上下文和它的绘画功能。getContext()只有一个参数(上下文的格式)。

```
var canvas = document.getElementById('tutorial');
var ctx = canvas.getContext('2d');
```

## 检查支持性

替换内容是用于在不支持 `<canvas>` 标签的浏览器中展示的。通过简单的测试 getContext() 方法的存在，脚本可以检查编程支持性。上面的代码片段现在变成了这个样子：
```
var canvas = document.getElementById('tutorial');

if (canvas.getContext){
  var ctx = canvas.getContext('2d');
  // drawing code here
} else {
  // canvas-unsupported code here
}
```
