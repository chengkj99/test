### 查询告警记录
请求包
```
GET <url?page=1&size=15>

{
  "SystemName": "fcm",
  "MetricName": "view_aliverate",
  "Endpoint": "^.*..com.*$",
  "Minlevel": 3,
  "Date": ""
}

```
返回包
```
[
  {
    "Id": 1,
    "Title": "",
    "SystemName": "fcm",
    "MetricName": "view_aliverate",
    "Endpoint": "^.*..com.*$",
    "Level": 3,
    "AlarmContent": "",
    "BaseValue": "",
    "FirstReportTime": "",
    "LastReportTime": "",
    "Value": "",
    "SubEndpoint": ""
  }
  ...
]
```

### 查询黑名单
请求包
```
GET <url>
```
返回包

```
[
  {
    "Endpoint":"https://stored.com/te/717",
    "Metric":"node_aliverate",
    "Period":"",
    "Reason":"",
    "SystemName":"fcm"
  }
  ...
]
```
### 增加黑名单

请求包
```
POST <url>
{
  "Endpoint":"https://stored.com/te/717",
  "Metric":"node_aliverate",
  "Period":"",
  "Reason":"",
  "SystemName":"fcm"
}

```
返回包
```
{
  code: 200,
  status: ok
}
```

### 删除黑名单

请求包
```
DELETE <url?Id=1>
```
返回包
```
{
  code: 200,
  status: ok
}
```
