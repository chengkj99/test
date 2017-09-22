
(function() {
  let arr = [
    [1,2,3],[1,2,3],[1,2,3]
  ]
  console.log(NewArr(arr));
})()
function NewArr (arr) {
  var newArray = arr[0].map(function(col, i) {
      return arr.map(function(row) {
      return row[i];
     })
  })
  return newArray
}
