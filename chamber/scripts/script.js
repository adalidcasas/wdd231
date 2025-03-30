const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const this_year = document.querySelector("#currentyear");
const last_modified = document.querySelector("#lastModified");

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

let today = new Date();
let last_date = new Date(document.lastModified);

this_year.innerHTML = today.getFullYear();
last_modified.innerHTML = `Last Modified:  <span class="highlight">${last_date}</span>`;


//const members = 'members.json';
const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('p');
        let logo = document.createElement('img');
        let mlevel = document.createElement('p');
        let slogan = document.createElement('p');

        portrait.setAttribute('src', member.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name}`); /
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');
    })
}

async function getMembersData() {
    const response = await fetch('members.json');
    const data = await response.json();
    console.table(data.members);
}
getMembersData()