//------------------ defining a function ---------------//
function sayMyName () {
    console.log("A");
    console.log("N");
    console.log("I");
    console.log("K");
    console.log("E");
    console.log("T");
}
sayMyName()

// -----------addition of two numbers ----------------//

function addTwoNumbers(number1,number2) {
    console.log(number1+number2);
}
addTwoNumbers(3,4)

function addTwonum(num1,num2){
    return num1+num2
    console.log("aniket"); // cant print anything after return statement
}
const result = addTwonum(5,7)
console.log(result);

//===================== different ways to adding a parameter ===================//

function loginUserMessage(userName) {
    return `${userName} just logged in`
}

const ans = loginUserMessage("aniket")
console.log(ans);

//========== how to add multiple values in function============//

function calculateCardPrise(val1,val2,...num1){
    return num1
}
console.log(calculateCardPrise(100,200,3900,3483,3643,4564,34,356))

//============= handling of objects ==============//

const user ={
    userName:"aniket",
    price:978
}

function handleObjects(anyObject) {
    console.log(`username is ${anyObject.userName} and price of their course is ${anyObject.price}`);
}

handleObjects(user)

// const userArr = [{
//     courseType:"java"
// },
// {
//     courseDuration: "oneweek"
// }]

// function getValues(anyValue) {
//     console.log(`we are getting an value i.e ${anyValue.courseDuration} and ${courseType}`);
// }
// getValues(userArr)