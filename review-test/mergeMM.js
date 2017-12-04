const ruleD = [
{
"Id": 28,
"SystemName": "system",
"Metric": "memory_used",
"Endpoint": "wtf",
"Type": 1,
"OldType": 0,
"Period": [
"3600"
],
"Value": [
"10"
],
"TargetLevel": [
"7"
],
"UpdateTime": "0001-01-01T00:00:00Z",
"CreateTime": "0001-01-01T00:00:00Z"
},
{
"Id": 36,
"SystemName": "pppppp",
"Metric": "asdvf",
"Endpoint": "cccz",
"Type": 3,
"OldType": 0,
"Period": [
"120"
],
"Value": [
"1"
],
"TargetLevel": [
"2"
],
"UpdateTime": "0001-01-01T00:00:00Z",
"CreateTime": "0001-01-01T00:00:00Z"
},
{
"Id": 47,
"SystemName": "pppppp",
"Metric": "asdvf",
"Endpoint": "ewwwew",
"Type": 1,
"OldType": 0,
"Period": [
"180"
],
"Value": [
""
],
"TargetLevel": [
"3"
],
"UpdateTime": "0001-01-01T00:00:00Z",
"CreateTime": "0001-01-01T00:00:00Z"
},
{
"Id": 48,
"SystemName": "pppppp",
"Metric": "asdvf",
"Endpoint": "sassdd",
"Type": 3,
"OldType": 0,
"Period": [
"180"
],
"Value": [
"5"
],
"TargetLevel": [
"3"
],
"UpdateTime": "0001-01-01T00:00:00Z",
"CreateTime": "0001-01-01T00:00:00Z"
},
{
"Id": 49,
"SystemName": "pppppp",
"Metric": "asdvf",
"Endpoint": "sad",
"Type": 3,
"OldType": 0,
"Period": [
"180"
],
"Value": [
"2"
],
"TargetLevel": [
"7"
],
"UpdateTime": "0001-01-01T00:00:00Z",
"CreateTime": "0001-01-01T00:00:00Z"
},
{
"Id": 50,
"SystemName": "pppppp",
"Metric": "asdvf",
"Endpoint": "asdada",
"Type": 3,
"OldType": 0,
"Period": [
"120"
],
"Value": [
"2"
],
"TargetLevel": [
"7"
],
"UpdateTime": "0001-01-01T00:00:00Z",
"CreateTime": "0001-01-01T00:00:00Z"
},
{
"Id": 51,
"SystemName": "pppppp",
"Metric": "asdvf",
"Endpoint": "assda",
"Type": 3,
"OldType": 0,
"Period": [
"120"
],
"Value": [
"2"
],
"TargetLevel": [
"2"
],
"UpdateTime": "0001-01-01T00:00:00Z",
"CreateTime": "0001-01-01T00:00:00Z"
},
{
"Id": 52,
"SystemName": "pppppp",
"Metric": "as",
"Endpoint": "asdasa",
"Type": 3,
"OldType": 0,
"Period": [
"120"
],
"Value": [
"2"
],
"TargetLevel": [
"3"
],
"UpdateTime": "0001-01-01T00:00:00Z",
"CreateTime": "0001-01-01T00:00:00Z"
},
{
"Id": 54,
"SystemName": "fcm",
"Metric": "view-avi",
"Endpoint": "http://www.a.com/100",
"Type": 3,
"OldType": 0,
"Period": [
"120"
],
"Value": [
"2"
],
"TargetLevel": [
"2"
],
"UpdateTime": "0001-01-01T00:00:00Z",
"CreateTime": "0001-01-01T00:00:00Z"
},
{
"Id": 55,
"SystemName": "fcm",
"Metric": "view-avi",
"Endpoint": "http://www.n.com",
"Type": 1,
"OldType": 0,
"Period": [
"120"
],
"Value": [
""
],
"TargetLevel": [
"3"
],
"UpdateTime": "0001-01-01T00:00:00Z",
"CreateTime": "0001-01-01T00:00:00Z"
}
]


const MonitorD = {
"view": [
{
"system": "pppppp",
"metrics": [
{
"metric_name": "asdvf",
"desc": "sadvs",
"groups": [
{
"Id": 162,
"Name": "fusion",
"Describe": "38941289y",
"Mail": ""
},
{
"Id": 163,
"Name": "qweww",
"Describe": "edcsa",
"Mail": ""
}
]
},
{
"metric_name": "qq",
"desc": "ee",
"groups": [
{
"Id": 162,
"Name": "fusion",
"Describe": "38941289y",
"Mail": ""
}
]
},
{
"metric_name": "xxz",
"desc": "zx",
"groups": [
{
"Id": 163,
"Name": "qweww",
"Describe": "edcsa",
"Mail": ""
}
]
},
{
"metric_name": "as",
"desc": "assa",
"groups": [
{
"Id": 162,
"Name": "fusion",
"Describe": "38941289y",
"Mail": ""
}
]
}
]
},
{
"system": "fcm",
"metrics": [
{
"metric_name": "view-avi",
"desc": "adsdads",
"groups": [
{
"Id": 162,
"Name": "fusion",
"Describe": "38941289y",
"Mail": ""
},
{
"Id": 173,
"Name": "fusion-sre",
"Describe": "asd",
"Mail": ""
}
]
}
]
},
{
"system": "sada",
"metrics": []
},
{
"system": "asdasd",
"metrics": []
}
]
}

// console.log('..', ruleD)
// console.log('--', MonitorD)
function isEmpty (val) {
  let type
  let isEmptyObj = function (obj) {
    for (let name in val) {
      return false
    }
    return true
  }
  type = Object.prototype.toString.call(val).slice(8, -1)
  switch (type) {
    case 'Array':
      return !val.length
    case 'String':
      return !val.trim()
    case 'Object':
      return isEmptyObj(val)
    case 'Null':
      return true
    case 'Undefined':
      return true
    default:
      return false
  }
}
function MergeMonitorAndMetricData (RuleD, MonitorD) {
  // let MonitorD = JSON.parse(JSON.stringify(state.MonitorData))
  // let RuleD = state.RuleData
  if (isEmpty(MonitorD)) {
    return
  }
  MonitorD.forEach(it => {
    if (!isEmpty(it.metrics)) {
      it.metrics.forEach(v => {
        v['rule'] = []
        if (!isEmpty(RuleD)) {
          for (let val of RuleD) {
            if (v.metric_name === val.Metric) {
              console.log('--', v.metric_name, val.Metric)
              v['rule'].push(val)
            }
          }
        }
      })
    }
  })
  console.log('===', MonitorD)
  return MonitorD
}
MergeMonitorAndMetricData(ruleD, MonitorD.view)
