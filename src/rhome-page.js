import rImage from "./assets/homePageImage.jpg";

let pageLoadCounter = 0;

export default function () {
  const rHomePage = document.getElementById("content");
  rHomePage.innerHTML = "";

  //Create and Add image, headline and some text
  const homeImage = document.createElement("img");
  homeImage.src = rImage;

  const headLine = document.createElement("h1");
  headLine.textContent = "Elegance, Cozy Dining, and Mouthwatering aromas await.";

  const text = document.createElement("p");
  text.textContent = "Welcome to a modern era of culinary excellence, served to you by the best chefs using only locally-produced ingredients"


  // Add all the content

  rHomePage.appendChild(homeImage);
  rHomePage.appendChild(headLine);
  rHomePage.appendChild(text);

  console.log(`Home page loaded ${++pageLoadCounter} time(s)`);

}
