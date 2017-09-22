### 查询值班信息
请求包
```
GET <url>
{
  Date: ""
}
```
返回包
```
[
  {
    "Id":16,
    "Date":"",
    "Duty":"李宁宁",
    "Backup":"李宁宁",
    "Charge":"李宁宁"
  }
  ...
]
```
### 新增值班
请求包
```
POST <url>
{
  "Date":"",
  "Duty":"李宁宁",
  "Backup":"李宁宁",
  "Charge":"李宁宁"
}
```
返回包
```
{
  code: 200,
  status: ok
}
```
### 修改值班
请求包
```
PUT <url>
{
  "Id":16,
  "Duty":"李宁宁",
  "Backup":"李宁宁",
  "Charge":"李宁宁"
}
```
返回包
```
{
  code: 200,
  status: ok
}
```

### 删除值班
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
