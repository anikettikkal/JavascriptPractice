// type conversion in js

let value="aniket"
console.log(value);
let doubleValue= Number(value)
console.log(typeof doubleValue);

let score= "33abc"
let scoreValue= Number(score)
console.log(scoreValue);
console.log(typeof scoreValue); // print NaN i.e. not a number

let input= true
let input1= false
let output1= Number(input1)
let output= Number(input)
console.log(output1);
console.log(output);

let isLogin= 1
let isLogout= Boolean(isLogin)
console.log(isLogout);

let name='aniket'
console.log(Boolean(name));

let no=""
console.log(Boolean(no));

/* 1=> true ; 0 => false;
    "" => false ; "aniket" => true 
*/

//------------------------------------ Operations Starts---------------------------------------------------

console.log(2+2);
console.log(2*2);
console.log(2-2);
console.log(2/2);
console.log(2%2);
console.log(2**3);
console.log(2*2+4);
console.log("1" + 2+2); // output is 122
console.log(2+2+"4"); // output is 44

let str1= "hello"
let str2= "aniket"
let str3= str1+ str2
console.log(str3);

let addition= 234
console.log(++addition); // prefix 
console.log(addition++); // postfix

console.log(+true);
console.log(+false);
console.log(+"");
console.log(+"aniket"); // output is NaN