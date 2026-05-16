const membersContainer = document.getElementById("members");

async function getMembers() {

    const response = await fetch("data/members.json");

    const data = await response.json();

    displayMembers(data);
}

function displayMembers(members) {

    members.forEach(member => {

        const card = document.createElement("div");

        card.classList.add("member-card");

        card.innerHTML = `
            <img src="images/${member.image}" alt="${member.name}">
            <h2>${member.name}</h2>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">
                Visit Website
            </a>
        `;

        membersContainer.appendChild(card);
    });
}

getMembers();

document.getElementById("gridBtn")
.addEventListener("click", () => {

    membersContainer.classList.add("grid");
    membersContainer.classList.remove("list");
});

document.getElementById("listBtn")
.addEventListener("click", () => {

    membersContainer.classList.add("list");
    membersContainer.classList.remove("grid");
});