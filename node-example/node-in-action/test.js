const bytes = require ('pretty-bytes');
const obj = {} ;
for (let i =0;i < 2048; i++) {
  obj[i] ={
    [Math.random()]: Math.random ()
  }
}
console.time('serialise') ;
const jsonString = JSON .stringify(obj) ;
console.timeEnd('serialise');

console.log('Serialised Size ', bytes(Buffer.byteLength(jsonString)));
console.log('Serialised Size ',Math.random().toString(), bytes(Buffer.byteLength(Math.random().toString())));

console.time('deserialise');
const obj2 = JSON.parse(jsonString);
console.timeEnd('deserialise');
