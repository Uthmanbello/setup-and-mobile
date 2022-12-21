const navIcon = document.querySelector(".nav-icon");
const navMenu = document.querySelector(".nav-menu");
const header = document.querySelector("header");

navIcon.addEventListener("click", () => {
    navIcon.classList.toggle("active");
    navMenu.classList.toggle("active");
    header.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    navIcon.classList.remove("active");
    navMenu.classList.remove("active");
    header.classList.remove("active");
}))