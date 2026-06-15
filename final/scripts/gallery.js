const gallery = document.querySelector(".gallery-grid");

const modal = document.querySelector("#tattooModal");

const modalContent =
document.querySelector("#modalContent");

async function getTattoos(){

try{

const response =
await fetch("data/tattoos.json");

const tattoos =
await response.json();

displayTattoos(tattoos);

}

catch(error){

console.error(error);

gallery.innerHTML =

"<p>Unable to load tattoos.</p>";

}

}

function displayTattoos(tattoos){

tattoos.forEach(tattoo=>{

const card = document.createElement("div");

card.classList.add("card");

card.innerHTML=`

<img src="${tattoo.image}"

alt="${tattoo.name}"

loading="lazy">

<h3>${tattoo.name}</h3>

<p>${tattoo.style}</p>

<p>${tattoo.artist}</p>

<p>${tattoo.price}</p>

<button class="detailsBtn">

View Details

</button>

`;

card.querySelector(".detailsBtn")

.addEventListener("click",()=>{

modalContent.innerHTML=`

<h2>${tattoo.name}</h2>

<p>Artist:

${tattoo.artist}</p>

<p>Style:

${tattoo.style}</p>

<p>Price:

${tattoo.price}</p>

`;

modal.showModal();

});

gallery.appendChild(card);

});

}

document.querySelector("#closeModal")

.addEventListener("click",()=>{

modal.close();

});

getTattoos();