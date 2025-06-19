import { places } from '../data/places.mjs';
const showHere = document.querySelector("#allplaces");

export function displayitems() {
    places.forEach(x => {
        //build the card element
        const thecard = document.createElement('div');
        //build the photo element
        const thephoto = document.createElement('img');
        thephoto.src = `images/${x.photo}`;
        thephoto.alt = x.name;
        thecard.appendChild(thephoto);
        //build the title element
        const thetitle = document.createElement('h2');
        thetitle.innerText = x.name;
        thecard.appendChild(thetitle);
        //build the address element
        const theaddress = document.createElement('address');
        theaddress.innerText = x.address;
        thecard.appendChild(theaddress);
        //build the description element
        const thedesc = document.createElement('p');
        thedesc.innerText = x.description;
        thecard.appendChild(thedesc);

        showHere.appendChild(thecard);
    });
}