const weatherIcon = document.querySelector('#weather-icon');
const weatherDesc = document.querySelector('#weather-desc');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-16.49&lon=-68.12&units=metric&appid=2755dee7635a8a1a54c20016463edaf1';

async function apiFetch() {
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
apiFetch();

let temp = document.createElement('h3');
let desc = document.createElement('p');
let high = document.createElement('p');
let low = document.createElement('p');
let humi = document.createElement('p');
let sunr = document.createElement('p');
let suns = document.createElement('p');


function displayResults(data) {
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

const weatherFore = document.querySelector('#wheater-forecast');
const urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?lat=-16.49&lon=-68.12&cnt=24&appid=2755dee7635a8a1a54c20016463edaf1';
async function apiFetchForecast() {
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
apiFetchForecast();

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

const cards = document.querySelector('#section-members');
const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement('section');
        let name = document.createElement('h3');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('p');
        let logo = document.createElement('img');
        let mlevel = document.createElement('p');

        let levelst = "Level: Gold member";
        if (member.membership_level === 2) {
            levelst = "Level: Silver member";
        }

        name.textContent = `${member.name}`;
        address.textContent = `${member.address}`;
        phone.textContent = `${member.phone_number}`;
        website.textContent = `${member.website_url}`;
        mlevel.textContent = `${levelst}`;
        card.className = 'gallery-card';
        logo.setAttribute('src', `images/${member.image_file}`);
        logo.setAttribute('alt', `logo of ${member.name}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '340');
        logo.setAttribute('height', '440');

        card.appendChild(name);
        card.appendChild(logo);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(mlevel);

        cards.appendChild(card);
    })
}

async function getMembersData() {
    const response = await fetch('members.json');
    const data = await response.json();
    const datafiltered = data.members.filter(c => c.membership_level === 1 || c.membership_level === 2).slice(2);
    displayMembers(datafiltered);
}
getMembersData()