import { initMenuToggle } from './menu.mjs';
import { initNavigation } from './navigation.mjs';
import { setFooterInfo } from './footerinfo.mjs';
import { displayFourItems } from './allproducts.mjs';

document.addEventListener("DOMContentLoaded", () => {
    initMenuToggle();
    initNavigation();
    setFooterInfo();
    displayFourItems();

    const herobutton = document.querySelector('#call-to-action-button');
    herobutton.addEventListener('click', () => {
        window.location.href = 'store.html';
    });
});