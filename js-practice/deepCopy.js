//
// let obj1 = {
//   a: 1,
//   b: 2
// }

// let obj2 = obj1
//
// obj2.b = 3
//
// console.log(obj1);
// console.log(obj1 === obj2);



// let obj3 = JSON.parse(JSON.stringify(obj1))
// obj3.b = 5
//
// console.log(obj1);  //{ a: 1, b: 2 }
// console.log(obj1 === obj3);  //false


// ------------------------------------------------

let obj1 = {
  a: '1',
  b: '2',
  c: {
    d: '3'
  },
  d: function aa () {}
}

// let obj4 = JSON.parse(JSON.stringify(obj1))
//
// console.log(obj4) //{ a: '1', b: '2' }




function cloneObj (obj) {
  let temp = obj.constructor === Array ? [] : {}

  for (let val in obj) {
    if (obj.hasOwnProperty(val)) {
      temp[val] = typeof obj[val] === 'object' ? cloneObj(obj[val]) : obj[val]
    }
  }
  return temp
}

  // function cloneObject (obj) {
  //   let temp = obj.constructor === Array ? [] : {}
  //   for (let val in obj) {
  //     temp[val] = typeof obj[val] == 'object' ? cloneObject(obj[val]) : obj[val]
  //   }
  //   return temp
  // }

 cloneObject = function(obj) {
    if(typeof obj === "object") {
        if(obj.constructor === Array) {
            var newArr = [];
            for(var i = 0; i < obj.length; i++) newArr.push(obj[i]);
            return newArr;
        } else {
            var newObj = {};
            for(var key in obj) {
                newObj[key] = this.cloneObject(obj[key]);
            }
            return newObj;
        }
    } else {
        return obj;
    }
  }



console.log(cloneObject(obj1));
