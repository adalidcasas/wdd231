import { initMenuToggle } from './menu.mjs';
import { initNavigation } from './navigation.mjs';
import { setFooterInfo } from './footerinfo.mjs';

document.addEventListener("DOMContentLoaded", () => {
    initMenuToggle();
    initNavigation();
    setFooterInfo();
});