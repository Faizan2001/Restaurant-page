import rMenuImage from "./assets/menuPageImage.jpg";

let pageLoadCounter = 0;

export default function () {
  const rHomePage = document.getElementById("content");
  rHomePage.innerHTML = "";

  //Create and Add image, headline and some text
  const menuImage = document.createElement("img");
  menuImage.src = rMenuImage;

  const headLine = document.createElement("h1");
  headLine.textContent = "Freshly Made from scratch, just for you.";

  const text = document.createElement("p");
  text.textContent = "Burgers, Fries, Shakes"


  // Add all the content

  rHomePage.appendChild(menuImage);
  rHomePage.appendChild(headLine);
  rHomePage.appendChild(text);

  console.log(`Menu page loaded ${++pageLoadCounter} time(s)`);

}
