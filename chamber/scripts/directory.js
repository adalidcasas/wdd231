document.addEventListener("DOMContentLoaded", () => {
    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('.navigation');

    hamButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
        hamButton.classList.toggle('open');
    });

    navigation.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            document.querySelectorAll('.navigation a').forEach(el => el.classList.remove('active'));
            e.target.classList.add('active');
        }
    });

    const cards = document.querySelector('#gallery-cards');

    const displayMembers = (members) => {
        const fragment = document.createDocumentFragment();

        members.forEach(({ name, address, phone_number, website_url, membership_level, slogan, image_file }, index) => {
            const card = document.createElement('section');
            card.className = 'gallery-card';
            card.innerHTML = `
                <h3>${name}</h3>
                <p class="gallery-grid-only">${slogan}</p>
                <img src="images/${image_file}" alt="logo of ${name}" loading="lazy" width="340" height="440" class="gallery-grid-only">
                <p>${address}</p>
                <p>${phone_number}</p>
                <p>${website_url}</p>
                <p>${membership_level}</p>
            `;

            fragment.appendChild(card);
        });

        cards.appendChild(fragment);
    };


    async function getMembersData() {
        try {
            const response = await fetch("data/members.json");
            if (!response.ok) throw new Error("Error al cargar los datos.");
            const data = await response.json();
            displayMembers(data.members);
        } catch (error) {
            console.error("Ocurrió un error al cargar los miembros:", error);
        }
    }
    getMembersData();

    const gridbutton = document.querySelector("#grid");
    const listbutton = document.querySelector("#list");
    const display = document.querySelector("#gallery-cards");

    gridbutton.addEventListener('click', () => {
        display.classList.replace("gallery-list", "gallery-grid");
    });

    listbutton.addEventListener("click", () => {
        display.classList.replace("gallery-grid", "gallery-list");
    });

    const this_year = document.querySelector("#currentyear");
    const last_modified = document.querySelector("#lastModified");

    this_year.textContent = `©${new Date().getFullYear()} La Paz Chamber of Commerce`;
    last_modified.textContent = `Last Modified: ${document.lastModified}`;
});
