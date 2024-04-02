/*there are two types of datatypes i.e. primitive or non-primitive
    they are divided according to way of accesing data from memory
*/

// primitive (call by value) => 7 Category => string , number , boolean, null, undefined, symbol, Bigint

// examples of primitive data types

const id= 123
const score= 234.5
const isLogedIn= false
const scoreValue= null
let userEmail;

const userId= Symbol('345')
const compare= Symbol('345')
console.log(userId===compare);

const value=2345832094582

//console.table([id,score,isLogedIn,scoreValue,userEmail,userId,value]);

// Non-primitive(call by rereference)=> array , object, functions

const heroes=["aniket", "akash", "avishkar", "mukesh"]

/*const myFuntions = funtion(){
    console.log("hello world");
}
*/

let myObj = {
    name:"aniket",
    age:22.
}

console.log(typeof myObj);
console.log(typeof heroes);

//note=> if we are cheacking the data types of non primitive it always show function type

//************************************************************************************************************* */

// memory allocations in js

// primitive type => call by value

let myName="aniket"
let anotherName = myName

anotherName= "Dhiraj"

console.log(myName);
console.log(anotherName);

// non-primitive => call by reference

let userOne = {
    email: "aniket@gmail.com",
    upi: "abcd"
}

let userTwo = userOne

//userTwo.email= "anikettikkal@gmail.com"

console.log(userOne);
console.log(userTwo);