import { initMenuToggle } from './menu.mjs';
import { initNavigation } from './navigation.mjs';
import { setFooterInfo } from './footerinfo.mjs';

document.addEventListener("DOMContentLoaded", () => {
    initMenuToggle();
    initNavigation();
    setFooterInfo();

    const timestampField = document.getElementById("timestamp");
    const now = new Date();
    timestampField.value = now.toISOString();
});