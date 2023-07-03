function promisify(fn) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      fn(...args, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  };
}

/**
 * input:
 * const
 */

const getUserInfo = (params, callback) => {
  if (typeof params !== "object" || typeof callback !== "function") {
    callback("error", null);
    return
  }
  callback(null, "success");
};


// 原来的写法：
// getUserInfo({}, (err, res) => {
//   console.log('!!', err, res)
// })

// 使用promisify后的写法：
promisify(getUserInfo)({}).then(res => {
  console.log('##', res)
}).catch(err => {
  console.log('!!', err)
})
