
celsius = document.getElementById('celsius');
fahrenheit = document.getElementById('fahrenheit');
kelvin = document.getElementById('kelvin');

const roundNumber = num => Math.round(num * 100) / 100;

const convertCelsius = () => {
    const celsiusTemp = parseFloat(celsius.value);
    const fahrenheitTemp = (celsiusTemp * (9/5)) + 32;
    const kelvinTemp = celsiusTemp + 273.15;

    fahrenheit.value = roundNumber(fahrenheitTemp);
    kelvin.value = roundNumber(kelvinTemp);
};

const convertFahrenheit = () => {
    const fahrenheitTemp = parseFloat(fahrenheit.value);
    const kelvinTemp = (fahrenheitTemp + 459.67) * 5/9;
    const celsiusTemp = (fahrenheitTemp - 32) * 5/9;

    kelvin.value = roundNumber(kelvinTemp);
    celsius.value = roundNumber(celsiusTemp);
};

const convertKelvin = () => {
    const kelvinTemp = parseFloat(kelvin.value);
    const celsiusTemp = kelvinTemp - 273.15;
    const fahrenheitTemp = kelvinTemp * 9/5 - 459.76;

    celsius.value = roundNumber(celsiusTemp);
    fahrenheit.value = roundNumber(fahrenheitTemp);
};

const main = () => {
    celsius.addEventListener('input', convertCelsius);
    fahrenheit.addEventListener('input', convertFahrenheit);
    kelvin.addEventListener('input', convertKelvin);
}

main();