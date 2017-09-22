
### 结构

- Element
  - 初始化变量
  - markToken
  - bind

选择dom
找到差值表达式

markToken： 替换为带标识符的 span dom

bind：
移除标识符
通过defineProperty添加get 和 set 方法
初始化赋值


有个问题：怎么找到带标识符的span，进行一一操作处理？
  一方面：使用document.querySelectorAll方法
  另一方面：bindings[variable] 的 {} 来承载dom 和数据
