// 异步执行
function later() {
  const now = () => {
    return 21;
  };
  const later = () => {
    answer = answer * 2;
    console.log("Meaning of life:", answer);
  };
  let answer = now();
  setTimeout(later, 1000); // Meaning of life: 42
}

// eventLoop 简单的模型
const eventLoop = () => {
  // 维护一个事件队列
  let eventLoop = [];
  let event;
  // 永远执行
  while (true) {
    // 一次 tick
    if (eventLoop.length > 0) {
      // 拿到下一个事件
      event = eventLoop.shift();
      // 执行下一个事件
      try {
        event();
      } catch (err) {
        throw new Error(err);
      }
    }
  }
};

(function() {
  // eventLoop();
})();
