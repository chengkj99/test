// const moment =  require("moment");

// console.log(moment().toDate());
// console.log(JSON.stringify(new Date(+moment({ hour: 6, minute: 59, seconds: 59 }))));

// console.log(moment.parseZone())

var date = new Date();
date.setHours(0);
date.setMinutes(59);
date.setSeconds(59);
date.setMilliseconds(59)

console.log(date)
