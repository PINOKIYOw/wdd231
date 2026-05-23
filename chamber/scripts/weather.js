const apiKey = "8727cd9fc0d29bc58e71587f192e2f0a";

const lat = -33.9249;
const lon = 18.4241;

const url =
`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

async function getWeather() {

    const response = await fetch(url);

    const data = await response.json();

    displayWeather(data);
}

function displayWeather(data) {

    const currentTemp =
        data.list[0].main.temp;

    const description =
        data.list[0].weather[0].description;

    document.getElementById("current-temp").innerHTML =
        `<strong>Temperature:</strong> ${currentTemp}°C`;

    document.getElementById("weather-desc").innerHTML =
        `<strong>Condition:</strong> ${description}`;

    const forecast = document.getElementById("forecast");

    forecast.innerHTML = "";

    for (let i = 8; i < 32; i += 8) {

        const dayTemp = data.list[i].main.temp;
        const date = new Date(data.list[i].dt_txt);

        forecast.innerHTML += `
            <p>
                ${date.toLocaleDateString("en-US", { weekday: "short" })}:
                ${dayTemp}°C
            </p>
        `;
    }
}

getWeather();