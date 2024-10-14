// generate a random color

const randomColor = function(){
    const hex = '123456789ABCDEF'
    let color = '#'
    for(let i=0 ; i< 6; i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
};

console.log(randomColor());

const stopChangingColor = function(){

}

const startChangingColor = function(){

}

document.querySelector('#stop').addEventListener('click', stopChangingColor)
document.querySelector('#start').addEventListener('click', startChangingColor)