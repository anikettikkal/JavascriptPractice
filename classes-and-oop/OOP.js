// Object Literal
const user = {
    username: "Aniket",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        // console.log(`Username: ${this.loginCount}`);
        
        console.log(this);
    }

}



console.log(user.username)
// console.log(user.getUserDetails());
console.log(this);

