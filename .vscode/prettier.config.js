module.exports = {
  // tab缩进大小,默认为2
  tabWidth: 2,
  // 使用 tab 缩进，默认 false
  useTabs: false,
  // 使用分号, 默认 true
  semi: true,
  // 使用单引号, 默认 false (在jsx中配置无效, 默认都是双引号)
  singleQuote: true,
  // 行尾逗号,默认 none,可选 none|es5|all
  // es5 包括 es5 中的数组、对象
  // all 包括函数对象等所有可选
  trailingComma: 'none',
  // 对象中的空格 默认 true
  // true: { foo: bar }
  // false: {foo: bar}
  bracketSpacing: true,
  // 箭头函数参数括号 默认 avoid 可选 avoid|always
  // avoid 能省略括号的时候就省略 例如 x => x
  // always 总是有括号
  arrowParens: 'avoid'
};
