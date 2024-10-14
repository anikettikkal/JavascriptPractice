// generate a random color

const randomColor = function () {
    const hex = '123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
};

console.log(randomColor());

let intervalId;
const startChangingColor = function () {
    if(!intervalId){
        intervalId = setInterval(changeBgColor, 2000);
    }

    //another method
    // intervalId = setInterval(changeBgColor, 2000)

    function changeBgColor() {
        document.body.style.backgroundColor = randomColor();
    }

    // background color changes
    // document.body.style.backgroundColor = randomColor();
}

const stopChangingColor = function () {
    clearInterval(intervalId);
    intervalId=null;
}



document.querySelector('#stop').addEventListener('click', stopChangingColor)
document.querySelector('#start').addEventListener('click', startChangingColor)