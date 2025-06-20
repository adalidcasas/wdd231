import { products } from '../data/products.mjs';
const showHere = document.querySelector(".products-cards ");

export function displayitems() {
    selectProducts(products, showHere);
}

export function displayFourItems() {
    let maxItems = 4;
    if (window.innerWidth <= 512) {
        maxItems = 2;
    } else if (window.innerWidth <= 1024) {
        maxItems = 3;
    }
    const randomProducts = products
        .sort(() => 0.5 - Math.random())
        .slice(0, maxItems);
    selectProducts(randomProducts, showHere);
}

function selectProducts(arrayProducts, showHere) {
    arrayProducts.forEach(x => {
        const thecard = document.createElement('div');
        const thephoto = document.createElement('img');
        thephoto.src = `images/${x.photo}`;
        thephoto.alt = x.name;
        thecard.appendChild(thephoto);

        const thetitle = document.createElement('h2');
        thetitle.classList.add('product-name');
        thetitle.innerText = x.name;
        thecard.appendChild(thetitle);

        const theprice = document.createElement('p');
        theprice.classList.add('product-price');
        theprice.innerHTML = `<strong>Price: </strong>BOB ${x.price}`;
        thecard.appendChild(theprice);

        const thebutton = document.createElement('button');
        thebutton.classList.add('product-button');
        thebutton.innerText = "See Datails";
        thecard.appendChild(thebutton);

        const modal = document.querySelector('#products-detail');
        thebutton.addEventListener('click', () => {
            displayModal(modal, x);
        });

        showHere.appendChild(thecard);
    });
}

function displayModal(modal, x) {
    modal.innerHTML = "";

    const modalButton = document.createElement('button');
    modalButton.classList.add('closeModal');
    modalButton.innerHTML = '❌';
    modal.appendChild(modalButton);

    const modalTitle = document.createElement("h3");
    modalTitle.classList.add('dialog-title');
    modalTitle.innerText = x.name;
    modal.appendChild(modalTitle);

    const modalBody = document.createElement('div');
    modalBody.classList.add('dialog-body');
    modal.appendChild(modalBody);

    const modalphoto = document.createElement('img');
    modalphoto.src = `images/${x.photo}`;
    modalphoto.alt = x.name;
    modalBody.appendChild(modalphoto);

    const modalDetails = document.createElement('div');
    modalDetails.classList.add('dialog-details');
    modalBody.appendChild(modalDetails);

    const modalDescription = document.createElement("p");
    modalDescription.innerText = x.description;
    modalDetails.appendChild(modalDescription);

    const modalPrice = document.createElement("p");
    modalPrice.innerHTML = `<strong>Price: </strong>BOB ${x.price}`;
    modalDetails.appendChild(modalPrice);

    const modalStock = document.createElement("p");
    modalStock.innerHTML = `<strong>Stock: </strong> ${x.stock} und.`;
    modalDetails.appendChild(modalStock);

    modal.showModal();

    modalButton.addEventListener('click', () => {
        modal.close();
    });
}