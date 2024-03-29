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

console.table([id,score,isLogedIn,scoreValue,userEmail,userId,value]);