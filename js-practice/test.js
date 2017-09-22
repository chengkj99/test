
doWork( () => {
  console.log('call me when done');
})

function doWork(cb){
   setTimeout( () => {
     cb();
   }, 3000)
}
