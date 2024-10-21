import aboutPageImageFood from "./assets/aboutPageImage.jpg";

let pageLoadCounter = 0;

export default function () {
  const aboutPage = document.getElementById("content");
  aboutPage.innerHTML = "";

  const aboutPageImage = document.createElement("img");
  aboutPageImage.src = aboutPageImageFood;

  // create headline
  const headline = document.createElement("h1");
  headline.textContent = "Where fresh ingredients meet loving hands";

  // create some text
  const paraOne = document.createElement("p");
  paraOne.textContent =
    "Our Owners decided to open this restaurant out of pure love for burgers, fries and shakes but minus all the unhealthy ingredients";
  const paraTwo = document.createElement("p");
  paraTwo.textContent = "Our menu is thoughtfully curated just for you.";

  // Adding all the content
  aboutPage.appendChild(aboutPageImage);
  aboutPage.appendChild(headline);
  aboutPage.appendChild(paraOne);
  aboutPage.appendChild(paraTwo);

  console.log(`About page loaded ${++pageLoadCounter} time(s)`);
}
