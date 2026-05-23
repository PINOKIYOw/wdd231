const spotlightContainer =
    document.getElementById("spotlight-container");

async function getSpotlights() {

    const response =
        await fetch("data/members.json");

    const data = await response.json();

    displaySpotlights(data);
}

function displaySpotlights(members) {

    const qualified =
        members.filter(member =>
            member.membership >= 2
        );

    const shuffled =
        qualified.sort(() => 0.5 - Math.random());

    const selected =
        shuffled.slice(0, 3);

    selected.forEach(member => {

        const card = document.createElement("div");

        card.classList.add("spotlight-card");

        const level =
            member.membership === 3
            ? "Gold"
            : "Silver";

        card.innerHTML = `
            <img src="images/${member.image}"
                 alt="${member.name} logo">

            <h3>${member.name}</h3>

            <p>${member.phone}</p>

            <p>${member.address}</p>

            <p>
                Membership:
                <strong>${level}</strong>
            </p>

            <a href="${member.website}"
               target="_blank">
               Visit Website
            </a>
        `;

        spotlightContainer.appendChild(card);
    });
}

getSpotlights();