// 封装 ajax 请求

function fetch(method, param) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest()
    xhr.open(method, param.url, true)

  }) 
}
