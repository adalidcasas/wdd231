function displayMembers(members) {
    const cards = document.querySelector('#gallery-cards');
    const fragment = document.createDocumentFragment();

    members.forEach(({ name, address, phone_number, website_url, membership_level, slogan, image_file }) => {
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
}

export async function loadMembers(highlevel = false) {
    try {
        const response = await fetch("data/members.json");
        if (!response.ok) throw new Error("Error al cargar los datos.");
        const data = await response.json();
        if (highlevel) {
            const datafiltered = data.members.filter(c => c.membership_level === 1 || c.membership_level === 2).slice(2);
            displayMembers(datafiltered);
        }
        else {
            displayMembers(data.members);
        }

    } catch (error) {
        console.error("Ocurrió un error al cargar los miembros:", error);
    }
}
