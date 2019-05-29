self.addEventListener("install", function(event) {
  // 确保 Service Worker 不会在 waitUntil() 里面的代码执行完毕之前安装完成。
  event.waitUntil(
    caches.open("v1").then(cache => {
        return cache.addAll([
          "/my-sw-test/",
          "/my-sw-test/index.html",
          "/my-sw-test/app.js"
        ]);
      })
      .catch(error => {
        console.log("error", error);
      })
  );
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      // caches.match() always resolves
      // but in case of success response will have value
      if (response !== undefined) {
        console.log("###", response);
        return response;
      } else {
        console.log("!!!", response);
      }
    })
  );
});

// receive message from page
self.addEventListener('message', event => {
  console.log('message1...', event.data);
});

self.addEventListener('message', event => {
  console.log('message2...', event.data);
  // from serviceworker send message to page
  event.source.postMessage('this message is from sw.js, to page');
});
