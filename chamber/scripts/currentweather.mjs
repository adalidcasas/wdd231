const weatherIcon = document.querySelector('#weather-icon');
const weatherDesc = document.querySelector('#weather-desc');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-16.49&lon=-68.12&units=metric&appid=2755dee7635a8a1a54c20016463edaf1';

export async function apiCurrentWeather() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // testing only
            displayResults(data); // uncomment when ready
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

let temp = document.createElement('h3');
let desc = document.createElement('p');
let high = document.createElement('p');
let low = document.createElement('p');
let humi = document.createElement('p');
let sunr = document.createElement('p');
let suns = document.createElement('p');


export function displayResults(data) {
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    temp.innerHTML = `${data.main.temp}&deg;C`;
    desc.innerHTML = toSentenceCase(data.weather[0].description);
    high.innerHTML = `High: ${data.main.temp_max}&deg;`;
    low.innerHTML = `Low: ${data.main.temp_min}&deg;`;
    humi.innerHTML = `Humidity: ${data.main.humidity}%`;
    const unixTimestamp = data.sys.sunrise;
    const date = new Date(unixTimestamp * 1000);
    const formattedTime = date.toLocaleTimeString("en-US");
    sunr.innerHTML = `Sunrise: ${formattedTime}`;
    const unixTimestamp2 = data.sys.sunset;
    const date2 = new Date(unixTimestamp2 * 1000);
    const formattedTime2 = date2.toLocaleTimeString("en-US");
    suns.innerHTML = `Sunset: ${formattedTime2}`;

    weatherDesc.appendChild(temp);
    weatherDesc.appendChild(desc);
    weatherDesc.appendChild(high);
    weatherDesc.appendChild(low);
    weatherDesc.appendChild(humi);
    weatherDesc.appendChild(sunr);
    weatherDesc.appendChild(suns);
}

function toSentenceCase(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}