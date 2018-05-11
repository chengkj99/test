Object.create() 和 new Object() 的区别

Object.create()的实现
```
function(obj) {
  let F = function() {}
  F.prototype = obj
  return new F()
}
```
new Object() 的实现


