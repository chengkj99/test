
let GData = [
{
"id": 1,
"name": "test_group_1",
"chname": "",
"pop_id": 0,
"platform_id": 251,
"role": "edge",
"service_status": "",
"final_status": "online",
"comment": ""
},
{
"id": 31,
"name": "test_group_2",
"chname": "",
"pop_id": 0,
"platform_id": 251,
"role": "edge",
"service_status": "",
"final_status": "online",
"comment": ""
}
]

let RData = [
{
"id": 1,
"line_id": 1,
"view_id": 2,
"group_id": 1,
"weight": 0,
"ttl": 139,
"status": "online",
"group_status": "online",
"use_type": "self_use",
"comment": ""
},
{
"id": 11,
"line_id": 1,
"view_id": 4,
"group_id": 1,
"weight": 0,
"ttl": 139,
"status": "online",
"group_status": "online",
"use_type": "self_use",
"comment": ""
},
{
"id": 21,
"line_id": 1,
"view_id": 3,
"group_id": 1,
"weight": 0,
"ttl": 139,
"status": "online",
"group_status": "online",
"use_type": "self_use",
"comment": ""
},
{
"id": 31,
"line_id": 1,
"view_id": 2,
"group_id": 31,
"weight": 0,
"ttl": 139,
"status": "online",
"group_status": "online",
"use_type": "self_use",
"comment": ""
},
{
"id": 81,
"line_id": 1,
"view_id": 5,
"group_id": 1,
"weight": 0,
"ttl": 139,
"status": "online",
"group_status": "online",
"use_type": "self_use",
"comment": ""
},
{
"id": 111,
"line_id": 1,
"view_id": 41,
"group_id": 1,
"weight": 0,
"ttl": 139,
"status": "online",
"group_status": "online",
"use_type": "self_use",
"comment": ""
},
{
"id": 141,
"line_id": 1,
"view_id": 10,
"group_id": 1,
"weight": 0,
"ttl": 0,
"status": "",
"group_status": "online",
"use_type": "backup",
"comment": ""
},
{
"id": 181,
"line_id": 1,
"view_id": 1,
"group_id": 1,
"weight": 0,
"ttl": 139,
"status": "online",
"group_status": "online",
"use_type": "self_use",
"comment": ""
},
{
"id": 211,
"line_id": 1,
"view_id": 36,
"group_id": 31,
"weight": 0,
"ttl": 139,
"status": "online",
"group_status": "online",
"use_type": "self_use",
"comment": ""
},
{
"id": 221,
"line_id": 1,
"view_id": 54,
"group_id": 1,
"weight": 0,
"ttl": 139,
"status": "online",
"group_status": "online",
"use_type": "self_use",
"comment": ""
}
]

function divide() {
  let obj = {
    self: [],
    backup: []
  }
  RData.forEach((outit, outindex, outarr) => {
    GData.forEach((init, inindex, inarr) => {
      if (outit.use_type === 'self_use') {
        if(outit.group_id === init.id) {
          obj.self.push({'r': outit, 'g': init})
        }
      }
      if (outit.use_type === 'backup') {
        if(outit.group_id === init.id) {
          obj.backup.push({'r': outit, 'g': init})
        }
      }
    })
  })
  return obj
}

console.log(divide())
