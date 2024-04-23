let myDate= new Date()
console.log(myDate.toString());
console.log(myDate.getDate());
console.log(myDate.getDay());
console.log(myDate.getFullYear());
console.log(myDate.getHours());
console.log(myDate.getMilliseconds());
console.log(myDate.getMinutes());
console.log(myDate.getMonth());
console.log(myDate.getSeconds());
console.log(myDate.getTime());
console.log(myDate.getTimezoneOffset());

let newDate= new Date()

newDate.toLocaleString('default',{
    weekday: "long",
    second: "2-digit"
})