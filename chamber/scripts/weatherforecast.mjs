const weatherFore = document.querySelector('#wheater-forecast');
const urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?lat=-16.49&lon=-68.12&cnt=24&appid=2755dee7635a8a1a54c20016463edaf1';

export async function apiWeatherForecast() {
    try {
        const response = await fetch(urlForecast);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // testing only
            displayResultsForecast(data); // uncomment when ready
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

let weather_today = document.createElement('p');
let weather_day2 = document.createElement('p');
let weather_day3 = document.createElement('p');

function displayResultsForecast(data) {
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    weather_today.innerHTML = `Today: ${data.list[0].main.temp}&deg;F`;
    weatherFore.appendChild(weather_today);

    let unixTimestamp = data.list[8].dt;
    let date = new Date(unixTimestamp * 1000);
    let day = weekday[date.getDay()];

    weather_day2.innerHTML = `${day}: ${data.list[8].main.temp}&deg;F`;
    weatherFore.appendChild(weather_day2);

    let unixTimestamp2 = data.list[16].dt;
    let date2 = new Date(unixTimestamp2 * 1000);
    let day2 = weekday[date2.getDay()];

    weather_day3.innerHTML = `${day2}:${data.list[16].main.temp}&deg;F`;
    weatherFore.appendChild(weather_day3);
}