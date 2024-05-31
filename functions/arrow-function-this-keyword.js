const user={
    name: "aniket",
    prise: 999 ,
    welcomeMessage : function (){
        console.log(`${user.name} , welcome to our website`);
    }
}
// console.log(user);
// user.name="dhiraj"
console.log(user.welcomeMessage());
user.name="hitesh"
console.log(user);