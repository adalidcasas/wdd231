const this_year = document.querySelector("#currentyear");
const last_modified = document.querySelector("#lastModified");
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const title = document.getElementById('tittle-album');
const menuOptions = document.querySelectorAll('a');

let today = new Date();
let last_date = new Date(document.lastModified);

this_year.innerHTML = today.getFullYear();
last_modified.innerHTML = `Last Modified:  <span class="highlight">${last_date}</span>`;

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

navigation.addEventListener('click', function (e) {
    const clickedElement = e.target;
    title.textContent = clickedElement.textContent;
    menuOptions.forEach(element => {
        element.classList.remove('active')
    });
    clickedElement.classList.toggle('active');
})