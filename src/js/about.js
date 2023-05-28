import uiAbout from "./uiAbout";
import "../styles/about.scss";

const search = window.location.search;
const region = new URLSearchParams(search);
const name = region.get("name");

const aboutLoader = document.querySelector(".about-spinner");

async function getCountry(name) {
  try {
    aboutLoader.classList.add("active");
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    const data = await response.json();

    if (response.status === 200) {
      uiAbout(data[0]);
    }
  } catch (error) {
  } finally {
    aboutLoader.classList.remove("active");
  }
}

getCountry(name);
