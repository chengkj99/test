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
  // TODO
}
enque([f1, f2, f3]) // f1, f2 ,f3
