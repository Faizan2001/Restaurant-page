import loadHomePage from "./rhome-page.js";
import loadMenuPage from "./rMenu-page.js";
import loadAboutPage from "./rAbout-page.js";
import "./styles.css"

const homeButton = document.getElementById("homeButton");
const menuButton = document.getElementById("menuButton");
const aboutButton = document.getElementById("aboutButton");

loadHomePage();

homeButton.addEventListener('click', () => loadHomePage());
menuButton.addEventListener('click', () => loadMenuPage());
aboutButton.addEventListener('click', () => loadAboutPage());
