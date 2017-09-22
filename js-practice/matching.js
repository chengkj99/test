let obj = {
  "code": 200,
  "data": [
    {
      "id": 1,
      "domain": "",
      "chname": "下载",
      "zone": "qnydns.com",
      "platform_id": 1,
      "comment": ""
    },
    {
      "id": 11,
      "domain": "",
      "chname": "下载线路",
      "zone": "qnydns.com",
      "platform_id": 1,
      "comment": ""
    },
    {
      "id": 21,
      "domain": "",
      "chname": "上传线路",
      "zone": "qnydns.com",
      "platform_id": 1,
      "comment": ""
    },
    {
      "id": 31,
      "domain": "",
      "chname": "",
      "zone": "qnydns.com",
      "platform_id": 1,
      "comment": ""
    },
    {
      "id": 41,
      "domain": "",
      "chname": "",
      "zone": "qnydns.com",
      "platform_id": 1,
      "comment": ""
    },
    {
      "id": 71,
      "domain": "",
      "chname": "上传线路",
      "zone": "qnydns.com",
      "platform_id": 1,
      "comment": ""
    },
    {
      "id": 81,
      "domain": "",
      "chname": "qqq",
      "zone": "qnydns.com",
      "platform_id": 1,
      "comment": ""
    },
    {
      "id": 91,
      "domain": "",
      "chname": "哈哈线路",
      "zone": "qnydns.com",
      "platform_id": 21,
      "comment": ""
    },
    {
      "id": 101,
      "domain": "",
      "chname": "嘿嘿线路",
      "zone": "qnydns.com",
      "platform_id": 21,
      "comment": ""
    },
    {
      "id": 111,
      "domain": "",
      "chname": "呵呵线路",
      "zone": "qnydns.com",
      "platform_id": 21,
      "comment": ""
    },
    {
      "id": 121,
      "domain": "",
      "chname": "直播线路",
      "zone": "qnydns.com",
      "platform_id": 31,
      "comment": ""
    }
  ]
}


function getPlatLine(pid) {
  let data = obj.data.filter((it, index, arr) => {
    if(it.platform_id === pid) {
      return it
    }
  })
  return data
}

console.log(getPlatLine(0))
