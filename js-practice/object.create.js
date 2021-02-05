// Shape - 父類別
function Shape() {
  this.x = 0;
  this.y = 0;
}

// 父類別的方法
Shape.prototype.move = function(x, y) {
  this.x += x;
  this.y += y;
  console.info('Shape moved.');
};

// Rectangle - 子類別
function Rectangle() {
  Shape.call(this); // call super constructor.
}

// 子類別擴展(extends)父類別
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;
console.log('Rectangle.prototype!!!', Rectangle.prototype);
console.log('Rectangle.prototype.constructor!!!', Rectangle.prototype.constructor);

var rect = new Rectangle();

console.log('Is rect an instance of Rectangle?', rect instanceof Rectangle);// true
console.log('Is rect an instance of Shape?', rect instanceof Shape);// true
// rect.move(1, 1); // Outputs, 'Shape moved.'
