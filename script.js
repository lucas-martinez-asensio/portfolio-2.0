// navigator menu

const menu = document.querySelector(".nav_button-container");
const openMenuButton = document.querySelector(".open-menu");
const closeMenuButton = document.querySelector(".close-menu");

function toggleMenu() {
  menu.classList.toggle("menu_opened");
}

openMenuButton.addEventListener("click", toggleMenu);
closeMenuButton.addEventListener("click", toggleMenu);

const aboutMeBtn = document.querySelector(".about-me");
const skillsBtn = document.querySelector(".skills");
const reposBtn = document.querySelector(".repos");
const socialBtn = document.querySelector(".social");

aboutMeBtn.addEventListener("click", toggleMenu);
skillsBtn.addEventListener("click", toggleMenu);
reposBtn.addEventListener("click", toggleMenu);
socialBtn.addEventListener("click", toggleMenu);

// Circulo

const circles = document.querySelectorAll(".logo");
const center = document.querySelector(".logo-center");

const n = 7; // numero de circulos
const r = 120; // radio

let angulo = 0;
let originX = circles[0].offsetLeft;
let originY = circles[0].offsetTop;

setInterval(() => {
  angulo += 0.01;
  circles.forEach((element, i) => {
    element.style.left = `${
      originX + r * Math.cos(angulo + ((2 * Math.PI) / n) * i)
    }px`;
    element.style.top = `${
      originY + r * Math.sin(angulo + ((2 * Math.PI) / n) * i)
    }px`;
  });
}, 50);
