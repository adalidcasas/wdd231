import { initMenuToggle } from './menu.mjs';
import { initNavigation } from './navigation.mjs';
import { setFooterInfo } from './footerinfo.mjs';
import { apiCurrentWeather } from './currentweather.mjs';
import { apiWeatherForecast } from './weatherforecast.mjs';
import { displayDetails } from './membershipmodals.mjs';

document.addEventListener("DOMContentLoaded", () => {
    initMenuToggle();
    initNavigation();
    apiCurrentWeather();
    apiWeatherForecast();
    setFooterInfo();
    displayDetails();

    const timestampField = document.getElementById("timestamp");
    const now = new Date();
    timestampField.value = now.toISOString();
});