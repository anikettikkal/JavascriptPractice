// Syntax
// switch(key) {
//     case value;
//     break;
//     defalut ;
//     break;
// }

const month = 3
 switch(month){
    case 1 :
        console.log("january");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break;
    default:
        console.log("does not match");
        break;

 }

//  const month = "june"
//  switch(month){
//     case "jan" :
//         console.log("january");
//         break;
//     case "feb":
//         console.log("feb");
//         break;
//     case "march":
//         console.log("march");
//         break;
//     default:
//         console.log("does not match");
//         break;

//  }

//+++++++++++++++++++++++++++++++++++++++ truthy & falsy values ++++++++++++++++++++++++++++

const userEmail = "0"
if(userEmail){
    console.log("got user email");
} else {
    console.log("dont have user email");
}

// falsy values ==>> false , 0 , -0 , BigInt 0n , "" , null , undefined ,NaN
// truthy values ==>> "0" , "false" , " " , {} , [] , function(){} => empty function

// how to cheack array & object in controlflow statements

const user = []

if(user.length===0){
    console.log("Array is empty");
}

const userObj = {}
if(Object.keys(userObj).length===0){
    console.log("object is empty");
}

//++++++++++++++++++++++++++++++ nulish coalescing operator (??) : nul and undefined++++++++++++++++++++++

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1= undefined ?? 15
val1= null ?? 10 ?? 23 ?? 45
console.log(val1);


//++++++++++++++++++++++++++ ternary operator +++++++++++++++++++++++++++

// condition ? true : false

const iceTeaPrice = 100

iceTeaPrice >= 50 ? console.log("greater than 50"): console.log("less than 50");