import "../styles/home.scss";
import "./countryApi";
import "./searchCountry";

import LogoCountry from "../assets/logo.png";
const logoImg = document.querySelector(".span-logo-img");

const image = document.createElement("img");
image.src = LogoCountry;
image.alt = "Logo-Country";

logoImg.append(image);

// Header

const header = document.querySelector(".header");

window.addEventListener("scroll", (e) => {
  if (window.pageYOffset >= 900) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

