export function viewGallery() {
    const gridbutton = document.querySelector("#grid");
    const listbutton = document.querySelector("#list");
    const display = document.querySelector("#gallery-cards");

    gridbutton.addEventListener('click', () => {
        display.classList.replace("gallery-list", "gallery-grid");
    });

    listbutton.addEventListener("click", () => {
        display.classList.replace("gallery-grid", "gallery-list");
    });
}
