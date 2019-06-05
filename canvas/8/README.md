<!-- 学习 canvas -->

## 圆弧

绘制圆弧或者圆，我们使用 arc()方法。当然可以使用 arcTo()，不过这个的实现并不是那么的可靠，所以我们这里不作介绍。

`arc(x, y, radius, startAngle, endAngle, anticlockwise)`

画一个以（x,y）为圆心的以 radius 为半径的圆弧（圆），从 startAngle 开始到 endAngle 结束，按照 anticlockwise 给定的方向（默认为顺时针）来生成。

`arcTo(x1, y1, x2, y2, radius)`

根据给定的控制点和半径画一段圆弧，再以直线连接两个控制点。

这里详细介绍一下 arc 方法，该方法有六个参数：x,y 为绘制圆弧所在圆上的圆心坐标。radius 为半径。startAngle 以及 endAngle 参数用弧度定义了开始以及结束的弧度。这些都是以 x 轴为基准。参数 anticlockwise 为一个布尔值。为 true 时，是逆时针方向，否则顺时针方向。

> 注意：arc()函数中表示角的单位是弧度，不是角度。角度与弧度的js表达式: `弧度=(Math.PI/180)*角度。`
