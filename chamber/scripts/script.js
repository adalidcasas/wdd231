const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const this_year = document.querySelector("#currentyear");
const last_modified = document.querySelector("#lastModified");
const menu_options = document.querySelectorAll('.navigation a');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

navigation.addEventListener('click', function (e) {
    const clickedElement = e.target;
    menu_options.forEach((element) => {
        element.classList.remove('active');
    });
    clickedElement.classList.toggle('active');
});

let today = new Date();
let last_date = new Date(document.lastModified);

this_year.innerHTML = today.getFullYear();
last_modified.innerHTML = `Last Modified:  <span class="highlight">${last_date}</span>`;