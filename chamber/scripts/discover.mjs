import { initMenuToggle } from './menu.mjs';
import { initNavigation } from './navigation.mjs';
import { displayitems } from './displayitems.mjs';
import { lastVisit } from './visitmessage.mjs';
import { setFooterInfo } from './footerinfo.mjs';

document.addEventListener("DOMContentLoaded", () => {
    initMenuToggle();
    initNavigation();
    setFooterInfo();
    displayitems();
    lastVisit();
});