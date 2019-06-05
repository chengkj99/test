# WebGL

WebGL 使得网页在支持 HTML `<canvas>` 标签的浏览器中，不需要安装任何插件，便可以使用基于 OpenGL ES 2.0 的 API 在 canvas 中进行 3D 渲染. WebGL 程序由 javascript 的控制代码，和在计算机的图形处理单元（GPU, Graphics Processing Unit）中执行的特效代码(shader code，渲染代码) 组成. WebGL 元素可以和其他 HTML 元素混合, 并且会和页面的其他部分或页面背景相合成.

## WebGL 绘图上下文

WebGLRenderingContext 接口提供基于 OpenGL ES 2.0 的绘图上下文，用于在 HTML `<canvas>` 元素内绘图。

要获得这个接口的对象，可以通过在 `<canvas>` 元素上调用 getContext() 函数，调用时传入 “webgl” 参数：

```
var canvas = document.getElementById('myCanvas');
var gl = canvas.getContext('webgl');
```

当你获取到 canvas 元素的 WebGL 绘图上下文，你便可以在里面绘图。

## 准备 3D 渲染

```js
    function render() {
      let dom = document.getElementById("glcanvas");
      if (dom.getContext) {
        let gl = dom.getContext("webgl");
        if (!gl) {
          alert(
            "Unable to initialize WebGL. Your browser or machine may not support it."
          );
          return;
        }
        // Set clear color to black, fully opaque
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        // Clear the color buffer with specified clear color
        gl.clear(gl.COLOR_BUFFER_BIT);
      }
    }
```

我们所要做的第一件事就是是获取 canvas 的引用，把它保存在 ‘canvas’ 变量里。

当我们获取到 canvas 之后，我们会试着通过调用一个 getContext 的函数并传递给它一个"webgl"字符串来获取 WebGLRenderingContext。如果浏览器不支持 webgl,getContext 将会返回 null，我们就可以显示一条消息给用户然后退出。

如果 WebGL 上下文成功初始化，变量 ‘gl’ 会用来引用该上下文。在这个例子里，我们将清除色设为黑色，然后用该颜色清除上下文。（用背景颜色重绘 canvas）。
