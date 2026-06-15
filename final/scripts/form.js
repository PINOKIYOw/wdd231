const timestamp =
document.querySelector("#timestamp");

if (timestamp) {

    timestamp.value =
    new Date().toLocaleString();

}


const year =
document.querySelector("#year");

if (year) {

    year.textContent =
    new Date().getFullYear();

}