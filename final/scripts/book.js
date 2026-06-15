const form =
document.querySelector("form");

if(form){

form.addEventListener("submit",()=>{

const name =

document.querySelector(

"[name='firstname']"

).value;

localStorage.setItem(

"customer",

name

);

});

}