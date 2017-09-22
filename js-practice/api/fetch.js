
// Basic Request
fetch(url, options)
.then(
  response => response.json()
)
.then(
  result => console.log(result)
)

// Error
fetch(url).then(
  response => {
  if (response.ok) {
    return response
  } else {
    var error = new Error(response.statusText)
    throw error
  }
})

/**
* @param {string} url
* @param {object} [options]
* @param {bool} [parseBody=false]
*/

function fetch2(url, options, parseBody = false) {
  return fetch(url, options)
    .then(
      response => {
        if (!response.ok) {
          return Promise.reject({'code': response.status, 'message': response.statusText})
        }
        return res.json()
      }
    )
    .then(
      result => {
        if (!parseBody) {
          return result
        }
        if (result.code !== 200) {
          return Promise.reject(result)
        }
        return result.data
      }
    ).catch(
      e =>  Promise.reject(e)
    )
}
export default fetch2





// 1. 不关心HTTP请求是否成功，只关心从服务器发送请求和接收响应，如果响应失败需要我们自己抛出异常

fetch("/v1/user")
.then(
    if(res.ok) {
        return res.json()
    } else {
        return Promise.reject("error")
    }
)
// 2. 获取数据有两步，首先是发送请求Request，然后再调用`.json()` 方法获取响应Response。

fetch('/v1/object')
.then( res => {
    return res.json()
})
.then(
    data => {
      console.log(data)
    }
)
// 3. Fetch 请求默认是不带 cookie 的，需要设置 fetch(url, {credentials: 'include'})
// 4. 服务器返回 400，500 错误码时并不会 reject，只有网络错误这些导致请求不能完成时，fetch 才会被 reject


// 改良后

// code...

// 原生 fetch 接口的一致性
  // 如果有的业务线 data 字段不叫 data 字段怎么办
  // 返回的error信息含有多种情况
