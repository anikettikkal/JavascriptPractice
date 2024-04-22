const score = 200
const balance= new Number(200)
console.log(score);
console.log(balance);

// methods for number ************************************

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber= 123.476
console.log(otherNumber.toPrecision(4));

const hundreds= 1000000
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-In'));

// *******************************methods for maths ************************************************

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.abs(4));

console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));

console.log(Math.min(3,7,34,9,6,4));
console.log(Math.max(3,6,85,9,5,78,9,));

console.log(Math.random());  // print a number between 0 to 1 randomly

console.log((Math.random()*10)+1);  

const min = 10
const max = 20

console.log(Math.floor(Math.random()* (max-min+1)+min));