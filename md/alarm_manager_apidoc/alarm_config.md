### 获取来源系统监控项
请求包
```
GET <url>
```
返回包
```
[
  {
    "SystemName": "fcm",
    "SystemID": 1,
    "Metric": [
      {
        "MetricName": "view_aliverate",
        "Id": 1,
        "Describe": "",
        "UserGroup": ["fusion-sre", "fcm"],
        "Rule": [
          {
            "Endpoint": "^.*..com.*$",
            "Minute": "20",
            "Times": 10,
            "Type": 3
          },
          {
            "Endpoint": "^.*..com.*$",
            "Minute": "20",
            "Times": 10,
            "TargetLevel": 3
          }
        ]
      },
      ...
    ]
  }
]

```


### 新增告警来源系统
<!-- 新增的来源系统被添加到  <获取来源系统监控项> 接口数据中-->
请求包
```
POST <url>

{
  "Describe": "",
  "SystemName": ""
}
```

返回包
```
{
  code: 200,
  status: ok
}
```
### 删除来源系统

请求包
```
DELETE <url?SystemId=11>
```
返回包
```
{
  code: 200,
  status: ok
}
```
### 新增监控项
<!-- 新增监控项被添加到  <获取来源系统监控项> 接口数据中-->
请求包
```
POST <url>
{
  "SystemName": "fcm",
  "MetricName": "view_aliverate",
  "UserGroup": ["fusion-sre", "fcm"],
  "Describe": ""
}
```
返回包
```
{
  code: 200,
  status: ok
}
```
### 删除监控项

请求包
```
DELETE <url?MetricId=11>
```
返回包
```
{
  code: 200,
  status: ok
}
```
### 新增告警升级规则

请求包
```
POST <url>
{
  "SystemName":"fcm",
  "MetricName": "view_aliverate",
  "Endpoint": "^.*..com.*$",
  "Minute": "20",
  "Times": 10,
  "TargetLevel": 3
}
```
返回包
```
{
  code: 200,
  status: ok
}
```
### 修改监控项
请求包
```
PUT <url>
{
  "SystemName": "fcm",
  "MetricName": "view_aliverate",
  "UserGroup": ["fusion-sre", "fcm"],
  "Describe": ""
}
```
返回包
```
{
  code: 200,
  status: ok
}
```
 ----------------------------------------
### 查询用户
请求包
```
GET <url>
```
返回包
```
{
  "UserId":1,
  "Mail":"wanglei3@qiniu.com",
  "Name":"wanglei3",
  "Phone":"18500499977",
  "UserGroup": ["fusion-sre", "fcm"]
}
```
### 新增用户

请求包
```
POST <url>
{
  "Mail":"818181818@qq.com",
  "Name":"zhang",
  "Phone":"18018181818",
  "UserGroup": ["fusion-sre", "fcm"]
}
```
返回包
```
{
  code: 200,
  status: ok
}
```

### 删除用户
请求包
```
DELETE <url?UserId=1>
```
返回包
```
{
  code: 200,
  status: ok
}
```

### 查询用户组
请求包
```
GET <url>
```
返回包
```
[
  {
    "Describe":"",
    "Id":1,
    "Name":"fcm",
    "Mail": "fcm@qiniu.com"
  }
  ...
]

```

### 新增用户组

请求包
```
POST <url>
{
  "Describe":"",
  "Name":"fcm",
  "Mail": "fcm@qiniu.com"
}
```
返回包
```
{
  code: 200,
  status: ok
}
```

### 删除用户组

请求包
```
DELETE <url?GroupId=1>
```
返回包
```
{
  code: 200,
  status: ok
}
```

---------------------------------------
