// how to create promises
const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
})

// consume promise

promiseOne.then(function(){
    console.log("Promise consumed");
    
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task two');
        resolve()
    },1000)
}).then(function(){
    console.log('Async two resolved');
    
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout( function(){
        resolve({
            username: "aniket",
            email: "aniket@gmail.com"
        })
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({
                username:"aniket",
                password: "123"
            })
        } else {
            reject('ERROR: Something went wrong')
        }
    },1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
    
}).catch((error) => {
    console.log(error);
    
})