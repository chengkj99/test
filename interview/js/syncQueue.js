function f1() {
  setTimeout(function() {
    console.log('f1')
  }, 3000)
}

function f2() {
  setTimeout(function() {
    console.log('f2')
  }, 1000)
}

function f3() {
  setTimeout(function() {
    console.log('f3')
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
