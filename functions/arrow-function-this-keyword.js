const user={
    name: "aniket",
    prise: 999 ,
    welcomeMessage : function (){
        // console.log(`${user.name} , welcome to our website`);
         console.log(`${this.name} , welcome to our website`);

    }
}
// console.log(user.welcomeMessage());
user.name="hitesh"
console.log(user);

//=============================== declared arrow function================================

const chai= () => {
    console.log(`hello everyone this is an arrow function`);
}
chai()

//===================== implicit way to declare arrow functions==================

// const addTwoNumbers = (num1,num2)=>{
//     return num1+num2
// }
// console.log(addTwoNumbers(4,2))

const addTwoNumbers = (num1,num2)=> (num1+num2)
console.log(addTwoNumbers(4,2))

//===================== immediately invoked function expression (IIFE)=================

(function Code () {
    console.log(`DB connected`);
})();

( (name) => {
    console.log(`DB connected two ${name}`);
} )("aniket")