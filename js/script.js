document.addEventListener("DOMContentLoaded", () => {
    const celsiusInput = document.getElementById("celsius");
    const fahrenheitInput = document.getElementById("fahrenheit");
    const kelvinInput = document.getElementById("kelvin");
    const resetButton = document.getElementById("reset");
    const themeToggle = document.getElementById("theme-toggle");
    const errorMessage = document.getElementById("error-message");

    // Convert Celsius to Fahrenheit
    celsiusInput.addEventListener("input", () => {
        const celsius = parseFloat(celsiusInput.value);
        if (!isNaN(celsius)) {
            fahrenheitInput.value = ((celsius * 9) / 5 + 32).toFixed(2);
            kelvinInput.value = (celsius + 273.15).toFixed(2);
        } else {
            fahrenheitInput.value = "";
            kelvinInput.value = "";
        }
    });

    // Convert Fahrenheit to Celsius
    fahrenheitInput.addEventListener("input", () => {
        const fahrenheit = parseFloat(fahrenheitInput.value);
        if (!isNaN(fahrenheit)) {
            celsiusInput.value = ((fahrenheit - 32) * 5 / 9).toFixed(2);
            kelvinInput.value = (celsius + 273.15).toFixed(2);
        } else {
            celsiusInput.value = "";
            kelvinInput.value = "";
        }
    });

    // Conver Kelvin to Celsius and Fahrenheit
    kelvinInput.addEventListener("input", () => {
        const kelvin = parseFloat(kelvinInput.value);
        if (!isNaN(kelvin) && kelvin >= 0) {
            celsiusInput.value = (kelvin + 273.15).toFixed(2);
            fahrenheitInput.value = ((celsius * 9) / 5 + 32).toFixed(2);
        } else if (kelvin < 0) {
            errorMessage.textContent = "Kelvin cannot be negative!";
            errorMessage.classList.remove("hidden");
            celsiusInput.value = "";
            fahrenheitInput.value = "";
        } else {
            errorMessage.classList.add("hidden");
            celsiusInput.value = "";
            fahrenheitInput.value = "";
        }
    })

    // Reset both input fields
    resetButton.addEventListener('click', () => {
        celsiusInput.value = "";
        fahrenheitInput.value = "";
        kelvinInput.value = "";
        errorMessage.classList.add("hidden");
    });

    // Toggle Theme
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
    });
});