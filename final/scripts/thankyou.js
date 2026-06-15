const params = new URLSearchParams(window.location.search);

document.querySelector("#fullname").textContent =
    `${params.get("firstname")} ${params.get("lastname")}`;

document.querySelector("#email").textContent =
    params.get("email");

document.querySelector("#phone").textContent =
    params.get("phone");

document.querySelector("#style").textContent =
    params.get("style");

document.querySelector("#date").textContent =
    params.get("appointment");