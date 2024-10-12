const myInput = document.getElementById("myInput");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const mySubmit = document.getElementById("mySubmit");
const myResult1 = document.getElementById("myResult1");
let temperature;

function handleInput(event) {
    let input = event.target;
    let value = input.value;
    let cursorPosition = input.selectionStart;
  
    // Allow only numbers, one decimal point, and limit to 2 decimal places
    let newValue = value
      .replace(/[^0-9.]/g, '') // Allow only numbers and one decimal point
      .replace(/(\..*?)\..*/g, '$1'); // Ensure only one decimal point
  
    // Prevent leading zero issue (but allow "0." for decimal input)
    if (newValue !== "0" && newValue.startsWith("0") && !newValue.startsWith("0.")) {
      newValue = newValue.replace(/^0+/, ''); // Remove leading zeros, but keep "0."
    }
  
    // Limit to 2 decimal places if a decimal exists
    if (newValue.includes('.')) {
      let parts = newValue.split('.');
      parts[1] = parts[1].slice(0, 2); // Limit decimal part to 2 digits
      newValue = parts.join('.');
    }
  
    // Update the input value only if it's different
    if (value !== newValue) {
      input.value = newValue;
  
      // Adjust cursor position if necessary
      if (cursorPosition > newValue.length) {
        cursorPosition = newValue.length;
      }
      input.setSelectionRange(cursorPosition, cursorPosition);
    }
  }

function convert() {
    temperature = Number(myInput.value);

    if ((temperature >= -1000) && (temperature <= 1000)) {

        if (toFahrenheit.checked) {
            temperature = temperature * (9 / 5) + 32;
            myResult1.textContent = temperature.toFixed(1) + "°F";
        }
        else if (toCelsius.checked) {
            temperature = (temperature - 32) * (5 / 9);
            myResult1.textContent = temperature.toFixed(1) + "°C";
        }
        else {
            myResult1.textContent = "Please select a unit";
        }
    }
    else {
        myResult1.textContent = "Please enter a valid temperature!";
    }
}