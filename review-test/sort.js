
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

//
// var numbers =['1506787200000','1506700800000','1506873600000','1506960000000','1507132800000','1507219200000','1507046400000'];
// numbers.sort(function(a, b) {
//   return a - b;
// });
//








let data = [
{
"Id": 90,
"SystemName": "fcm",
"Metric": "cdn_node_view",
"Endpoint": "^.*..com.*$",
"Type": 1,
"OldType": 0,
"Period": [
"300",
"1200"
],
"Value": [
""
],
"TargetLevel": [
"5",
"7"
],
"UpdateTime": "0001-01-01T00:00:00Z",
"CreateTime": "0001-01-01T00:00:00Z"
},
{
"Id": 91,
"SystemName": "fcm",
"Metric": "auth_dns_node",
"Endpoint": "^.*..qnydns.net.*$",
"Type": 1,
"OldType": 0,
"Period": [
"300",
"1200"
],
"Value": [
""
],
"TargetLevel": [
"5",
"7"
],
"UpdateTime": "0001-01-01T00:00:00Z",
"CreateTime": "0001-01-01T00:00:00Z"
},
{
"Id": 93,
"SystemName": "fcm",
"Metric": "auth_dns_node",
"Endpoint": "^.*..com.*$",
"Type": 3,
"OldType": 0,
"Period": [
"180"
],
"Value": [
"2"
],
"TargetLevel": [
"5"
],
"UpdateTime": "0001-01-01T00:00:00Z",
"CreateTime": "0001-01-01T00:00:00Z"
},
{
"Id": 94,
"SystemName": "fcmV2",
"Metric": "cdn_node_viewV2",
"Endpoint": "^.*..qnydns.net.*$",
"Type": 2,
"OldType": 0,
"Period": [
""
],
"Value": [
"3",
"5"
],
"TargetLevel": [
"3",
"5"
],
"UpdateTime": "0001-01-01T00:00:00Z",
"CreateTime": "0001-01-01T00:00:00Z"
},
{
"Id": 95,
"SystemName": "fcm",
"Metric": "cdn_node_view",
"Endpoint": "^.*..qnydns.net.*$",
"Type": 3,
"OldType": 0,
"Period": [
"600"
],
"Value": [
"2"
],
"TargetLevel": [
"2"
],
"UpdateTime": "0001-01-01T00:00:00Z",
"CreateTime": "0001-01-01T00:00:00Z"
}
]


// data.sort(function(a, b) {
//   console.log(a.SystemName - b.SystemName)
//   return a.SystemName.localeCompare(b.SystemName)
// });

let obj = {}
for (var i = 0; i < data.length; i++) {
  key = data[i].SystemName
  if (!obj[key]) {
      var temp = [];
      temp.push(data[i]);
      obj[key] = temp;
  } else {
      obj[key].push(data[i])
  }
}


console.log('data====', data)
console.log('obj&&&&&', obj)
