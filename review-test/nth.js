// function nth (a， index) {
//   if (!_.isNumber(index)) {
//     fail('Expected a number as the index')
//   }
// }

function fail (thing) {
  throw new Error(thing)
}
function warn (thing) {
  console.log(["WARNING:", thing].join(" "))
}
function note (thing) {
  console.log(["NOTE:", thing].join(" "))
}

function func1 () {
  let arr = [1,2,3,-1]
  let res = arr.sort( (x, y) => {
    return x <= y
  })
  console.log(res)
}

function func2 () {
  let str = `
  name, age, hair
  marble, 35, red
  Bob, 66, blonde
  `
  function lameCSV (str) {
    let newArr = str.split('\n').map((it, index, arr) => {
      if (it) {
        return it.trim()
      }
    })
    console.log('newArr:', newArr)
    return newArr
  }
  return lameCSV(str)
}
{
  func2()
}
