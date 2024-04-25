// declaration of objects

const myObj = {
    name: "aniket",
    age: 21,
    location: "Ahilyanagar",
    email: "aniket@gmail.com",
    isLogedIn: false,
    lastLogedIn: ["monday","friday"]
}

// console.log(myObj);
// console.log(myObj["age"]);
// console.log(myObj["lastLogedIn"]);

// interview ask que ==> hpw to add symbol values in objects

const symKey = Symbol('key1')

const userObj = {
    name: "aniket",
    [symKey] : 1234,
    age: 21,
    location: "Ahilyanagar",
    email: "aniket@gmail.com",
    isLogedIn: false,
    lastLogedIn: ["monday","friday"]
}
// console.log(userObj);
// console.log(typeof userObj[symKey]);

// how to change values

// console.log(userObj.email="aniket03@gmail.com");
// console.log(userObj);

// how to lock or freeze the values in objects

// Object.freeze(userObj)
userObj.age=23
// console.log(userObj);

// adding functions in objects

userObj.greeting = function() {
    console.log("hello JsUser");
}

userObj.greetingTwo = function() {
    console.log(`hello jsUser ${this.name}... Good Morning!`);
}

console.log(userObj.greeting());
console.log(userObj.greetingTwo());