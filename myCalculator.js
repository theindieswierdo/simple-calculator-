const result = document.getElementById('result');
const buttons = document.querySelectorAll('.btn');
//let buttons = Array.from(document.getElementsByClassName("btn"));

let currentInput = '';//current input entered by user
let operator = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'AC') {
        currentInput = '';
        operator = '';
        result.textContent = '0';
      //this next line of code is a backspace function but it displays the backspace symbol on the screen which annoys me
    } else if (value === '⌫') { //it doesn't delete the last user input on the calculator screen
        operator = '';
        currentInput = currentInput.slice(0,-1);//removes last element in the string 
        result.textContent = currentInput;//shows new contents in the string
    } else if (value === '=') {
      try {
        const calculation = eval(currentInput);
        result.textContent = calculation;
        currentInput = calculation.toString();
      } catch (error) {
        result.textContent = 'Error';
      }
    } else if (['+', '-', '*', '/', '%', '^'].includes(value)) {
        operator = value;
        currentInput += value;
    } else {
      currentInput += value;
      result.textContent = currentInput;
    }
  });
});
