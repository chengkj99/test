
// insert sort 0-1

  function insertSort (array) {
    let len = array.length
    for (var i = 0; i < len; i++) {
      for (var j = i; j > 0; j--) {
        if (array[j] > array[j+1]) {
          let temp = array[j]
          array[j] = array[j+1]
          array[j+1] = temp
        }
      }
    }
    return array
  }

    // bubble sort
    function bubbleSort (array) {
      let len = array.length
      for (var i = 0; i < len; i++) {
        for (var j = 0; j < len; j++) {
          if (array[j] < array[j+1]) {
            let temp = array[j]
            array[j] = array[j+1]
            array[j+1] = temp
          }
        }
      }
      return array
    }
  (function(){
    let array = [1,4,6,3,2,5,78,8,43,2,1]
    console.log(insertSort(array))
    console.log(bubbleSort(array))
  })()
