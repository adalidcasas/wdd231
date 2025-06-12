function getFormDataFromURL() {
    const params = new URLSearchParams(window.location.search);
    const firstname = params.get("firstname");
    const lastname = params.get("lastnoame");
    const email = params.get("emailaddress");
    const phone = params.get("mobilephone");
    const businessname = params.get("businessname");
    const membership = params.get("membership");
    return { firstname, lastname, email, phone, businessname, membership };
}

export function showRegistrationSummary() {
    const { firstname, lastname, email, phone, businessname, membership } = getFormDataFromURL();

    const levels = {
        0: "Non Profit",
        1: "Bronze",
        2: "Silver",
        3: "Gold"
    };

    const summaryDiv = document.querySelector(".registration-summary");
    summaryDiv.innerHTML = `
        <p><strong>Name:</strong> ${firstname} ${lastname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile number:</strong> ${phone}</p>
        <p><strong>Business Name:</strong> ${businessname}</p>
        <p><strong>Membership level:</strong> ${levels[membership]}</p>
        <br>
    `;
}
