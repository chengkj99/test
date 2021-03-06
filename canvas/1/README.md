<!-- 学习 canvas -->
## Canvas
Canvas 是 HTML5 新增的元素，可用于通过使用JavaScript中的脚本来绘制图形。例如，它可以用于绘制图形，制作照片，创建动画，甚至可以进行实时视频处理或渲染。

### `<canvas>`元素

`<canvas>`看起来和 `<img>` 元素很相像，唯一的不同就是它并没有 src 和 alt 属性。实际上，`<canvas>` 标签只有两个属性—— width和height。这些都是可选的，并且同样利用 DOM properties 来设置。当没有设置宽度和高度的时候，canvas会初始化宽度为300像素和高度为150像素。

### </canvas> 标签不可省

与 `<img>` 元素不同，`<canvas>` 元素需要结束标签(`</canvas>`)。如果结束标签不存在，则文档的其余部分会被认为是替代内容，将不会显示出来。

### 替换内容

我们只是在 `<canvas>` 标签中提供了替换内容。不支持 `<canvas>` 的浏览器将会忽略容器并在其中渲染后备内容。而支持 `<canvas>` 的浏览器将会忽略在容器中包含的内容，并且只是正常渲染canvas。
