// 总结字符串对象方法

var s = " hello world ";

// 获取长度
console.log("获取长度:", s.length);

// 字符串检索
console.log("字符串检索:", s[1]);

// 在字符串中查找字符串
console.log("在字符串中查找字符串indexOf:", s.indexOf("hell"));
console.log("在字符串中查找字符串indexOf:", s.indexOf("chengkj"));

// 返回最后一次出现的字符串
console.log("在字符串中查找字符串lastIndexOf:", s.lastIndexOf("hell"));
console.log("在字符串中查找字符串lastIndexOf:", s.lastIndexOf("chengkj"));

// 提取字符串
console.log("提取字符串slice,0-2:", s.slice(0, 2));
console.log("提取字符串slice,0-end:", s.slice(0));

console.log("提取字符串substring,0-2", s.substring(0, 2));
console.log("提取字符串substring,0-2", s.substring(0));

// 根据某一个字符分隔字符串
console.log("根据某一个字符分隔字符串:", s.split(" "));

// 转换大小写
console.log("转换小写:", s.toLowerCase());
console.log("转换大写:", s.toUpperCase());

// 替换字符串
console.log("替换字符串:", s.replace("world", "chengkj"));

// 匹配字符串
console.log("匹配字符串match:", s.match("hello"));

// 返回索引值对应的字符
console.log("charAt:", s.charAt(1));

// 返回索引值对应的 Unicode value
console.log("charAt:", s.charCodeAt(1));

// 连接
console.log("concat:", s.concat("! I am chengkj!"));

// 去空格
console.log("去空格trim", s.trim());
