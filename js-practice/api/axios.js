


/**
* @param {string} url
* @param {object}  config
*/

// const cnfig = {
//   url: '/v1/user',
//   method: 'get',
//   headers: {},
//   params: {},
//   data: {},
//   timeout: 1000
//   ...
// }


// Basic Request & axios API
axios(config)
axios(url[, config])

// one
axios.get(url, config).then(
  response => console.log(response)
).catch(
  error => console.log(error)
)
// two
axios(config).then(
  response => console.log(response)
).catch(
  error => console.log(error)
)


// Concurrency Request
axios.all()
axios.spread(callback)

axios.all([axios(url1),axios(url2),axios(url3)])
.then(
  axios.spread((u1Res, u2Res, u3Res) => {
    console.log(u1Res)
    console.log(u2Res)
    console.log(u3Res)
  })
)
//？？ promise 区别

// Interceptors
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
})

axios.interceptors.response.use(function (response) {
  // Do something with response data
  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});



// Cancellation
var CancelToken = axios.CancelToken;
var source = CancelToken.source();

axios.get('/user/12345', {
  cancelToken: source.token
}).catch(function(thrown) {
  if (axios.isCancel(thrown)) {
    console.log('Request canceled', thrown.message);
  } else {
    // handle error
  }
});

// cancel the request (the message parameter is optional)
source.cancel('Operation canceled by the user.');
