let firstNum = null;
let secondNum = null;
let displayNum = "0";
let firstOperator = null;
let secondOperator = null;
let buttons = document.querySelectorAll('button')
let resultDisplayed = false;



const displayElement = document.getElementById('display');



// Update the display
function updateDisplay() {
    displayElement.innerText = displayNum;
}



// Reset the calculator
function resetCalculator() {
    firstNum = null;
    secondNum = null;
    displayNum = "0";
    firstOperator = null;
    secondOperator = null;
    resultDisplayed = false;
    updateDisplay();
}



document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('calcNums')) {
            inputNum(button.value);
        } else if (button.classList.contains('Operator')) {
            inputOperator(button.value);
        } else if (button.classList.contains('equals')) {
            inputEquals();
        } else if (button.classList.contains('clear')) {
            resetCalculator();
        }
    });
});



// function startup() {
    

//     for (let i = 0; i < buttons.length; i++){
//         buttons[i].addEventListener('click', () => {
//             //console.log(buttons[i].getAttribute('value'));
//             if (buttons[i].classList.contains('calcNums')) {
                
//                 inputNum(buttons[i].value);
//                 //
//             } else if (buttons[i].classList.contains('Operator')) {
//                 inputOperator(buttons[i].value)
//             } else if (buttons[i].classList.contains('equals')) {
//                 inputEquals()
//             }
//         });
//     }
// }

// startup()



function inputNum(num) {
    if (resultDisplayed) {
        displayNum = num;
        resultDisplayed = false;
    } else {
        displayNum = displayNum === '0' ? num : displayNum + num;
    }
    updateDisplay();
}



// Function to handle operator input
function inputOperator(operator) {
    if (!firstNum || resultDisplayed) {
        firstNum = displayNum;
        resultDisplayed = false;
    } else if (firstNum && firstOperator && !resultDisplayed) {
        inputEquals();
        firstNum = displayNum;
    }
    firstOperator = operator;
    displayNum = '0';
}



function inputEquals() {
    if (firstOperator && firstNum !== null && displayNum !== '0' && !resultDisplayed) {
        secondNum = displayNum;
        displayNum = operate(Number(firstNum), Number(secondNum), firstOperator).toString();
        updateDisplay();
        firstNum = displayNum;
        resultDisplayed = true;
    }
}



function operate(a, b, op) {
    if (op == '+') {
        return a + b;
    } else if (op == '-'){
        return a - b;
    } else if (op == '*') {
        return a * b;
    } else if (op == '/') {
        if (b == 0) {
            return "Tut Tut";
        } return a / b;
    }  else {
        return 0;
    }
     // Default return in case of an unexpected operator
    return Math.round(result * 1000000) / 1000000; // Rounds to 6 decimal places
}




updateDisplay();