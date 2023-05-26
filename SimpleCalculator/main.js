const displayScreen = document.querySelector('.placeP')
const buttons = document.querySelectorAll('button')

console.log(buttons)

let calculation = []
let accumalativeCalculation 

function calculate(button){
    const value = button.textContent
    if(value == 'CLEAR'){
        calculation = []
        displayScreen.textContent = '...'
    }else if(value === '=') {
        console.log(accumalativeCalculation)
        displayScreen.textContent = eval(accumalativeCalculation)
    }else{
        calculation.push(value)
        accumalativeCalculation = calculation.join('')
        displayScreen.textContent = accumalativeCalculation
    
    }

}  


//gets the buttons with the help of the function above
buttons.forEach(button => button.addEventListener('click', () => calculate(button) ))
