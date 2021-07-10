let date = new Date();

console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());
console.log(date.getTime());

date.setHours(0);
date.setMinutes(0);
date.setSeconds(0);
date.setMilliseconds(0);
console.log(date);
