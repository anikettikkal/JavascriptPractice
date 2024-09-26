const form = document.querySelector("form");
// this usecase will give you empty values
// const height = parseInt(document.querySelector('#height').value)


form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    const finalresults = document.querySelector('#finalresults')


    if(height=== '' || height< 0 || isNaN(height)){
        results.innerHTML= "please enter a valid height"
    } else if(weight=== '' || weight< 0 || isNaN(weight)){
        results.innerHTML= "please enter a valid weight"
    } else {
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        // show the results
        results.innerHTML = `<span>${bmi}</span>`

        // show final results
        if(bmi< 18.6){
            finalresults.innerHTML = "you are under weight"
        }
        else if(bmi>=18.6 && bmi<=24.9){
            finalresults.innerHTML= "you are in normal range"
        } else if(bmi>25){
            finalresults.innerHTML= "you are overweighted"
        } else{
            finalresults.innerHTML="there is no need to explain you anything"
        }
    }

    
})