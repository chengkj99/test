# 内部调度-原型接口对接

## 所需接口

### 获取所有平台

由平台管理提供


### 获取内部调度线路

问题：接口暂未提供

建议：提供接口

建议数据结构：
```
200 OK
{
  "code": 200,
  "data": [
    {
      "id": 1,
      "name": "group1",
      "chname": "服务器"
    }
    ...
}
```
### 获取所有view

由外部调度提供

### 查询解析记录

问题：
数据结构需要满足树形展示和列表展示。
- 树形展示缺少解析记录的相关数据。
- 列表展示缺少区域和缓存组的层级关系。
- 缺少列表展示查询条件中的： ip、运行状态

建议：数据结构不适合原型展示，按照外部调度结构体的实现即可
注意：根据缓存组条件查询时，需要把该缓存组所在地区相关缓存组的解析数据返回

建议数据结构：
```
200 OK
{
  "code": 200,
  "data": [
    {
      "chname": "cdnadmin.test",
      "comment": "cdnadmin",
      "id": 1,
      "name": "cdnadmin.test.qnydns.com",
      "platform_id": 1,
      "view_list": [
        {
          "id": 35,
          "parent_id": 10,
          "view": "河北联通",
          "view_level": 3,
          "vip_count": 2,
          "group_record_list": [
            {
              "vip_count": 2,
              "record_info": {
                "final_status": "auto_online",
                "group_status": "online",
                "record_id": 28,
                "status": "online",
                "ttl": 139,
                "use_type": "self_use",
                "weight": 0,
              },
              "group_info": {
                "id": 16,
                "name": "cnc-hbts-ts",
                "chname": "唐山联通-10G（接信安设备）",
                "pop_id": 0,
                "platform_id": 1,
                "role": "cluster",
                "service_status": "online",
                "final_status": "online",
                "comment": "",
                "vip_list": [
                  {
                    "id": 31,
                    "ip": "60.2.148.206",
                    "group_id": 16,
                    "mode": "auto",
                    "final_status": "online",
                    "monitor_status": "online",
                    "monitor_update_time": 0,
                    "is_in_monitor": true,
                    "comment": ""
                  },
                  {
                    "id": 32,
                    "ip": "60.2.148.207",
                    "group_id": 16,
                    "mode": "auto",
                    "final_status": "online",
                    "monitor_status": "online",
                    "monitor_update_time": 0,
                    "is_in_monitor": true,
                    "comment": ""
                  }
                ]
              }
            }
            ...
          ]
        }
        ...
      ]
    }
    ...
  ]
}

```

### 新建解析记录

问题：接口和原型字段不对应、少辅助接口
- 原型上没有字段：（缓存组状态） GroupStatus，（缓存组权重） GroupStatus
- 缓存组仅展示父层缓存组，暂无获取这类缓存组的接口

建议：

- 原型上没有GroupStatus和GroupStatus的输入区，如果不重要，可不提供该字段的输入。

- 提供`根据平台获取父层缓存组接口`，包含父层缓存组状态等信息。

### 删除解析记录

问题：原型展示缺少提供解析删除原因，需要提供删除解析原因交互窗口。

建议：在删除提示的交互界面上，加一块输入删除原因的输入框区域。


### 获取平台下的父层缓存组列表
问题：接口暂未提供

建议：提供接口

建议数据结构:

```
{
  "code": 200,
  "data": [
    {
     "id": 1,
     "name": "cnc-gddg-dg",
     "chname": "东莞联通-10G",
     "platform_id": 1,
     "role": "cluster",
     "final_status": "online",
   },
   {
     "id": 2,
     "name": "tel-gzfs-pz",
     "chname": "佛山平洲-20G",
     "platform_id": 1,
     "role": "cluster",
     "service_status": "online",
     "final_status": "online",
   },
   {
     "id": 3,
     "name": "mob-gdgz-gz",
     "chname": "广州南方基地-10G",
     "platform_id": 1,
     "role": "cluster",
     "service_status": "online",
     "final_status": "online",
   }
   ...
 ]
}

```
