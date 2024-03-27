// type conversion in js

let value="aniket"
//console.log(value);
let doubleValue= Number(value)
//console.log(typeof doubleValue);

let score= "33abc"
let scoreValue= Number(score)
//console.log(scoreValue);
//console.log(typeof scoreValue); // print NaN i.e. not a number

let input= true
let input1= false
let output1= Number(input1)
let output= Number(input)
//console.log(output1);
//console.log(output);

let isLogin= 1
let isLogout= Boolean(isLogin)
console.log(isLogout);

let name='aniket'
console.log(Boolean(name));

let no=""
console.log(Boolean(no));

/* 1=> true ; 0 => false;
    "" => false ; "aniket" => true */