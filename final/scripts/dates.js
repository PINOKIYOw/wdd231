const year = document.querySelector("#year");

if(year){

year.textContent = new Date().getFullYear();

}

const modified = document.querySelector("#lastModified");

if(modified){

modified.textContent =
`Last Modified: ${document.lastModified}`;

}