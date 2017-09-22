let data = {
    "Metric": {
"bwMonitor": [
{
"Id": 29,
"SystemName": "bwMonitor",
"MetricName": "bw_out",
"Describe": "",
"ConfirmState": false
},
{
"Id": 31,
"SystemName": "bwMonitor",
"MetricName": "bw_in",
"Describe": "",
"ConfirmState": false
}
],
"dnsmon": [
{
"Id": 25,
"SystemName": "dnsmon",
"MetricName": "cname",
"Describe": "",
"ConfirmState": false
},
{
"Id": 27,
"SystemName": "dnsmon",
"MetricName": "validip",
"Describe": "",
"ConfirmState": false
}
],
"fcm": [
{
"Id": 3,
"SystemName": "fcm",
"MetricName": "view_aliverate",
"Describe": "",
"ConfirmState": true
},
{
"Id": 7,
"SystemName": "fcm",
"MetricName": "node_aliverate",
"Describe": "",
"ConfirmState": true
},
{
"Id": 17,
"SystemName": "fcm",
"MetricName": "dns_available",
"Describe": "",
"ConfirmState": true
},
{
"Id": 21,
"SystemName": "fcm",
"MetricName": "task_available",
"Describe": "",
"ConfirmState": true
},
{
"Id": 33,
"SystemName": "fcm",
"MetricName": "test_metric",
"Describe": "",
"ConfirmState": false
},
{
"Id": 37,
"SystemName": "fcm",
"MetricName": "auth_dns_ip",
"Describe": "",
"ConfirmState": false
},
{
"Id": 41,
"SystemName": "fcm",
"MetricName": "cdn_node_view",
"Describe": "",
"ConfirmState": true
},
{
"Id": 43,
"SystemName": "fcm",
"MetricName": "auth_dns_node",
"Describe": "",
"ConfirmState": true
},
{
"Id": 45,
"SystemName": "fcm",
"MetricName": "web_node",
"Describe": "",
"ConfirmState": false
}
],
"kuaishoulog": [
{
"Id": 35,
"SystemName": "kuaishoulog",
"MetricName": "slow-ratio-interface",
"Describe": "",
"ConfirmState": true
}
],
"zabbix": [
{
"Id": 23,
"SystemName": "zabbix",
"MetricName": "memory_used",
"Describe": "",
"ConfirmState": false
}
]
},
    "GroupMetric": [
{
"GroupId": 1,
"GroupName": "fcm",
"SysMetrics": {
"fcm": [
"task_available",
"cdn_node_view"
]
}
},
{
"GroupId": 3,
"GroupName": "fusion-sre",
"SysMetrics": {
"fcm": [
"cdn_node_view"
]
}
},
{
"GroupId": 5,
"GroupName": "dnsmon",
"SysMetrics": {
"dnsmon": [
"cname",
"validip"
]
}
},
{
"GroupId": 11,
"GroupName": "sched",
"SysMetrics": {
"bwMonitor": [
"bw_in",
"bw_out"
]
}
},
{
"GroupId": 15,
"GroupName": "kuaishou",
"SysMetrics": {
"kuaishoulog": [
"slow-ratio-interface"
]
}
},
{
"GroupId": 17,
"GroupName": "qndns",
"SysMetrics": {
"fcm": [
"auth_dns_node"
]
}
}
],
    "RuleMetric": [
{
"Id": 157,
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
"Id": 159,
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
}
]
}


let dm = data.Metric
let dgroupm = data.GroupMetric
let drulem = data.RuleMetric
// console.log("..", dm)
// console.log("**", droupm)
// console.log("--", droupm)

function f () {
  Object.keys(dm).forEach( (dmit) => {
    dm[dmit].forEach( (mit) => {
      drulem.forEach( (rit) => {
        if (rit.Metric === mit.MetricName ) {
          mit.rule = rit
        } else {
          mit.rule = null
        }
      })
      mit["group"] = []

      dgroupm.forEach( (git) => {
          for (let val in git.SysMetrics) {
            git.SysMetrics[val].forEach( (gmit) => {
              if (gmit == mit.MetricName) {
                // mit.group.push(git)
                mit["group"].push(git.GroupName)
              }
            })
          }
      })
    })
  })
  console.log("!!!!", dm)
  console.log('**************************************************')
  for (let x in dm) {
    console.log(dm[x])
  }
}
f()
