let a=200
const b = 300
var c = 400

if(true){
   var c= 500
//    console.log(b); 
}

// console.log(a);
// console.log(b);
// console.log(c);
user("aniket")

function user(anyObjectUser){
    console.log( `hello ${anyObjectUser} how are you?`);
    
    userName("tikkal")
    function userName(anyUser){
        console.log(`${anyObjectUser} and ${anyUser} user is only for this block i.e local scope`);
    }
    // userName("tikkal")
    // console.log(`${anyObjectUser} and ${anyUser} user is only for this block i.e local scope`);
}

// user("aniket")
