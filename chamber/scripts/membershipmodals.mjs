const npMembershipTitle = document.querySelector('#np-membership-title');
const npMembershipModal = document.querySelector('#np-membership-details');
const bronzeTitle = document.querySelector('#bronze-title');
const bronzeModal = document.querySelector('#bronze-details');
const silverTitle = document.querySelector('#silver-title');
const silverModal = document.querySelector('#silver-details');
const goldTitle = document.querySelector('#gold-title');
const goldModal = document.querySelector('#gold-details');

export function displayDetails() {
    npMembershipTitle.addEventListener('click', () => {
        displayModal(npMembershipModal);
    });
    bronzeTitle.addEventListener('click', () => {
        displayModal(bronzeModal);
    });
    silverTitle.addEventListener('click', () => {
        displayModal(silverModal);
    });
    goldTitle.addEventListener('click', () => {
        displayModal(goldModal);
    });
}

function displayModal(modal) {
    const closeButtons = modal.querySelectorAll('.closeModal');
    modal.showModal();

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            modal.close();
        });
    });
}
