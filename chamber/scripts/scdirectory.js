
const cards = document.querySelector('#gallery-cards');
const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement('section');
        let name = document.createElement('h3');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('p');
        let logo = document.createElement('img');
        let mlevel = document.createElement('p');
        let slogan = document.createElement('p');

        card.className = 'gallery-card';
        slogan.className = 'gallery-grid-only';
        logo.className = 'gallery-grid-only';

        name.textContent = `${member.name}`;
        address.textContent = `${member.address}`;
        phone.textContent = `${member.phone_number}`;
        website.textContent = `${member.website_url}`;
        mlevel.textContent = `${member.membership_level}`;
        slogan.textContent = `${member.slogan}`;

        logo.setAttribute('src', `images/${member.image_file}`);
        logo.setAttribute('alt', `logo of ${member.name}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '340');
        logo.setAttribute('height', '440');

        card.appendChild(name);
        card.appendChild(slogan);
        card.appendChild(logo);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);

        cards.appendChild(card);
    })
}

async function getMembersData() {
    const response = await fetch('members.json');
    const data = await response.json();
    console.table(data.members);
    displayMembers(data.members);
}
getMembersData()

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#gallery-cards");

gridbutton.addEventListener('click', () => {
    display.classList.add("gallery-grid");
    display.classList.remove("gallery-list");
});

listbutton.addEventListener("click", () => {
    display.classList.remove("gallery-grid");
    display.classList.add("gallery-list");
});

