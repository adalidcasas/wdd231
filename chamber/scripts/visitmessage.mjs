export function lastVisit() {
    const messageEl = document.querySelector("#visitMessage");
    const lastVisit = localStorage.getItem("lastVisit");
    const now = new Date();

    if (lastVisit) {
        const lastDate = new Date(lastVisit);
        const diffTime = now - lastDate;
        const diffDays = Math.floor(diffTime / 86400000);

        messageEl.textContent = diffDays === 0 ? "Back so soon! Awesome!" : `You last visited ${diffDays} days ago.`;
    } else {
        messageEl.textContent = "Welcome! Let us know if you have any questions.";
    }

    //save the date of last visit
    localStorage.setItem("lastVisit", now.toISOString());
}
