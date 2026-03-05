const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {

sections.forEach(section => {

const top = section.getBoundingClientRect().top;
const screen = window.innerHeight;

if(top < screen - 100){
section.classList.add("show");
}

});

});