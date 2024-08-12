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
    } else if (value === '⌫') {
        operator = '';
        currentInput = currentInput.slice(0,-1);
        result.textContent = currentInput;
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
