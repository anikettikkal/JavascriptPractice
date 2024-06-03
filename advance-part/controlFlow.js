//========================= if statment ===================================

const score= 200

if(score>100){
    console.log("score is greater than 100");
}
console.log("score is always greater than 100");

//========================== if-else statement ========================================

const marks= 90

if(marks >= 100){
    console.log("marks not valid : there is some issue in marks");
} else{
    console.log("marks valid and student pass");
}

//-------------------------------- operators is js --------------------------------
// (< , > , <= , >= , == , != , === )

// ************************* implicit scope ***************************

const balance = 3000 
if(balance == 3000) console.log("your AC balance is maximum") , console.log("your AC balance is minimum");

// ++++++++++++++++++++++++++++++ else-if statement ++++++++++++++++++++++++++++++++

const percentage =90

if(percentage < 90){
    console.log("student need to study hard");
} else if(percentage < 80){
    console.log("student need to study hard and hard");
} else if(percentage== 90){
    console.log("congratulations student you got a good marks");
} else{
    console.log("student is in distinctions");
}