// register service worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/my-sw-test/sw.js", { scope: "/my-sw-test/" })
    .then(function(reg) {
      if (reg.installing) {
        console.log("Service worker installing");
      } else if (reg.waiting) {
        console.log("Service worker installed");
      } else if (reg.active) {
        console.log("Service worker active");
      }
    })
    .catch(function(error) {
      // registration failed
      console.log("Registration failed with " + error);
    });
}


function postMessage() {
  // from page send message to serviceworker
  if ("serviceWorker" in window.navigator) {
    const [inputDom] = document.getElementsByClassName('value-input')
    let value = inputDom.value || '-'
    navigator.serviceWorker.controller &&
      navigator.serviceWorker.controller.postMessage(
        "this message is from page:" + value
      )
  }
}

if ("serviceWorker" in window.navigator) {
  // receive message from service worker
  navigator.serviceWorker.addEventListener('message', event => {
    console.log('receive message from service worker', event.data)
  })
}

window.onload = function() {
  console.log("onload done");
};
