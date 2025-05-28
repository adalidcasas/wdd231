import { initMenuToggle } from './menu.mjs';
import { initNavigation } from './navigation.mjs';
import { loadMembers } from './members.mjs';
import { viewGallery } from './viewgallery.mjs';
import { setFooterInfo } from './footerinfo.mjs';

document.addEventListener("DOMContentLoaded", () => {
    initMenuToggle();
    initNavigation();
    loadMembers();
    viewGallery();
    setFooterInfo();
});