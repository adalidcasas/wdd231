function getFormDataFromURL() {
    const params = new URLSearchParams(window.location.search);
    const firstname = params.get("firstname");
    const lastname = params.get("lastname");
    const email = params.get("emailaddress");
    const phone = params.get("mobilephone");
    const businessname = params.get("businessname");
    const membership = params.get("membership");
    const timestamp = params.get("timestamp");

    return { firstname, lastname, email, phone, businessname, membership, timestamp };
}

export function showRegistrationSummary() {
    const { firstname, lastname, email, phone, businessname, membership, timestamp } = getFormDataFromURL();
    const levels = {
        0: "Non Profit",
        1: "Bronze",
        2: "Silver",
        3: "Gold"
    };
    const formatted = new Date(timestamp).toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
    const summaryDiv = document.querySelector(".registration-summary");
    summaryDiv.innerHTML = `
        <p><strong>Name:</strong> ${firstname} ${lastname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile number:</strong> ${phone}</p>
        <p><strong>Business Name:</strong> ${businessname}</p>
        <p><strong>Membership level:</strong> ${levels[membership]}</p>
        <p><strong>Date submitted:</strong> ${formatted}</p>
        <br>
    `;
}
