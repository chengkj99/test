
function f() {
  console.log('hello world')
}

const queue = [f,f,f]

function invokeJob() {
  const f = queue.shift()
  f && f()
  setTimeout(() => {
    if (queue.length) {
      invokeJob()
    }
  }, 2000)
}

invokeJob()
