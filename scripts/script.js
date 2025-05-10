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

const select_all = document.querySelector('#btn-all');
const all_courses = document.querySelectorAll('.course');
select_all.addEventListener('click', () => {
    all_courses.forEach(element => {
        element.classList.remove('active-course');
        element.classList.toggle('active-course');
    })
});

const select_cse = document.querySelector('#btn-cse');
const cse_courses = document.querySelectorAll('.cse');
select_cse.addEventListener('click', () => {
    all_courses.forEach(element => {
        element.classList.remove('active-course');
    })
    cse_courses.forEach(element => {
        element.classList.toggle('active-course');
    })
});

const select_wdd = document.querySelector('#btn-wdd');
const wdd_courses = document.querySelectorAll('.wdd');
select_wdd.addEventListener('click', () => {
    all_courses.forEach(element => {
        element.classList.remove('active-course');
    })
    wdd_courses.forEach(element => {
        element.classList.toggle('active-course');
    })
});