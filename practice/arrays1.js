// declartion of array
// first method

const myArr= [2,34,5,7,4,6]
console.log(myArr);

// second method

const myArrOne= new Array(3,5,6,7,8,34,5,6)
console.log(myArrOne);

// methods of array

myArrOne.push(45)
myArrOne.pop()
myArrOne.unshift(9)
myArrOne.shift()
console.log(myArrOne);

console.log(myArrOne.includes(5));
console.log(myArrOne.indexOf(34));

const newArr = myArrOne.join()
console.log(newArr);
console.log(typeof(newArr));

// slice and splice

console.log("a", myArrOne);
const mya1 = myArrOne.slice(1,3)
console.log(mya1);
console.log("b",myArrOne);

const mya2= myArrOne.splice(1,3)
console.log(mya2);
console.log("c",myArrOne);

