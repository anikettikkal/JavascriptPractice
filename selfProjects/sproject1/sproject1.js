const theme = document.querySelector('#themebutton')
const form = document.querySelector('.login-box')

theme.addEventListener('click', function(e){
    console.log(e);
    console.log(e.target);
    
    
    if(e.target.id===themebutton){
        form.style.backgroundColor= "green";
    }
})
