const myInput = document.getElementById("myInput");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const mySubmit = document.getElementById("mySubmit");
const myResult1 = document.getElementById("myResult1");
let temperature;



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