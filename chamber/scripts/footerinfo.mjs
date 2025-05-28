export function setFooterInfo() {
    const this_year = document.querySelector("#currentyear");
    const last_modified = document.querySelector("#lastModified");

    this_year.textContent = `©${new Date().getFullYear()} La Paz Chamber of Commerce`;
    last_modified.textContent = `Last Modified: ${document.lastModified}`;
}