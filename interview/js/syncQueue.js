function f1(cb) {
  setTimeout(function() {
    console.log('f1')
    cb()
  }, 3000)
}

function f2(cb) {
  setTimeout(function() {
    console.log('f2')
    cb()
  }, 1000)
}

function f3(cb) {
  setTimeout(function() {
    console.log('f3')
    cb()
  }, 2000)
}

function enque(list) {
  const len = list.length
  const tasks = list.slice()

  for(let i = 0; i < len; i++) {
      let fn = tasks.shift()
      let res = fn(() => console.log('done'))
//       console.log()
//       this.doWork(Promise.resolve(fn))
  }
}

function doWork(fn) {
  fn().then(
    () => doWork(fn)
  )
}

enque([f1, f2, f3])
//f1 f2 f3
