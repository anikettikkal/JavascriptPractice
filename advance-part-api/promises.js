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