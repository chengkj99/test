let _ = require('underscore')

function existy (x) {
  return x != null
}
console.log(existy(null))
console.log(existy(undefined))
console.log(existy({}.notHere))
console.log(existy(0))
