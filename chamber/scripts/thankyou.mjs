import { initMenuToggle } from './menu.mjs';
import { initNavigation } from './navigation.mjs';
import { setFooterInfo } from './footerinfo.mjs';
import { showRegistrationSummary } from './registrationinfo.mjs';

document.addEventListener("DOMContentLoaded", () => {
    initMenuToggle();
    initNavigation();
    setFooterInfo();
    showRegistrationSummary();
});