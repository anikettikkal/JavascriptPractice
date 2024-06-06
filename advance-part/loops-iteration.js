// loops (ITERATIONS)==============================================

for(i=0 ; i<=20 ; i++) {
    const element = i
    // console.log(element);
}

for(i=0 ; i<= 5 ; i++){
    console.log(`inner element i ${i}`);

    if(i==3){
        console.log(" the most lucky number three is found");
        }
    for(j=1 ; j<4 ; j++){
        console.log(`outer element j is ${j}`);
    }
}

//================= break and switch statement

const nameArray = ["aniket", "dhiraj","banti","Sheth"]

for(i=0 ; i<= 3 ; i++){
    const ele = nameArray[i]
    console.log(ele);
}

const numArr = [122,342,354,564,765,876,987]
console.log(numArr.length);
for(i=0;i<=4;i++){

    const outerSide = numArr[i]
    
    console.log(outerSide);
}

for(i=0 ; i<= 5 ; i++){
    console.log(`inner element i ${i}`);

    if(i==3){
        console.log(" the most lucky number three is found");
        break
        }
    for(j=1 ; j<4 ; j++){
        console.log(`outer element j is ${j}`);
    }
}

for(i=0 ; i<= 5 ; i++){
    console.log(`inner element i ${i}`);

    if(i==3){
        console.log(" the most lucky number three is found");
        continue
        }
    for(j=1 ; j<4 ; j++){
        console.log(`outer element j is ${j}`);
    }
}