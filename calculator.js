const buttons = document.querySelectorAll('button');
const screenDisplay = document.querySelector('.screen');

// console.log(buttons);
let calculation = [];
let accumulativecalculation = '';

function calculate(button){
    const value = button.textContent
    if (value === "CLEAR"){
        calculation = []
        screenDisplay.textContent = '';
    } else if (value === "=") {
    try {
        const result = eval(accumulativecalculation);
        screenDisplay.textContent = result;

        calculation = [result.toString()];
        accumulativecalculation = result.toString();
    } catch {
        screenDisplay.textContent = "Error";
    }
    } else {
    calculation.push(value) 
    accumulativecalculation = calculation.join('')
    screenDisplay.textContent = accumulativecalculation
    }
}
    buttons.forEach(button => {
        button.addEventListener('click', () => calculate (button));
    });
