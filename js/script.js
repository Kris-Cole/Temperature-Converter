document.addEventListener("DOMContentLoaded", () => {
    const celsiusInput = document.getElementById("celsius");
    const fahrenheitInput = document.getElementById("fahrenheit");
    const resetButton = document.getElementById("reset");

    // Convert Celsius to Fahrenheit
    celsiusInput.addEventListener("input", () => {
        const celsius = parseFloat(celsiusInput.value);
        if (!isNaN(celsius)) {
            fahrenheitInput.value = ((celsius * 9) / 5 + 32).toFixed(2);
        } else {
            fahrenheitInput.value = "";
        }
    });

    // Convert Fahrenheit to Celsius
    fahrenheitInput.addEventListener("input", () => {
        const fahrenheit = parseFloat(fahrenheitInput.value);
        if (!isNaN(fahrenheit)) {
            celsiusInput.value = ((fahrenheit - 32) * 5 / 9).toFixed(2);
        } else {
            celsiusInput.value = "";
        }
    });

    // Reset both input fields
    resetButton.addEventListener('click', () => {
        celsiusInput.value = "";
        fahrenheitInput.value = "";
    });
});