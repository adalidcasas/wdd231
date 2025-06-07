import { initMenuToggle } from './menu.mjs';
import { initNavigation } from './navigation.mjs';
import { setFooterInfo } from './footerinfo.mjs';
import { apiCurrentWeather } from './currentweather.mjs';
import { apiWeatherForecast } from './weatherforecast.mjs';

document.addEventListener("DOMContentLoaded", () => {
    initMenuToggle();
    initNavigation();
    apiCurrentWeather();
    apiWeatherForecast();
    setFooterInfo();
});