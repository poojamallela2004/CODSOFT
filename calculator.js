// script.js

// Function to append values to the display
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to calculate the result
function calculateResult() {
    const display = document.getElementById('display');
    try {
        // Evaluate the expression
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}
