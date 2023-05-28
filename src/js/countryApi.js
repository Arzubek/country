import uiHome from "./uiHome";
import ErrorNotFound from "../assets/error-404.jpg";

const homeSpinner = document.querySelector(".home-spinner");
const errorBlock = document.querySelector(".error-block");
const errorMessage = document.querySelector(".error-message");
const imageBlock = document.querySelector(".image-block");
const blockCountryItems = document.querySelector(".block-country-items");

class CountryApi {
  static async getAllCountry(search = "") {
    try {
      homeSpinner.classList.add("active");
      const response = await fetch(
        search
          ? `https://restcountries.com/v3.1/name/${search}`
          : "https://restcountries.com/v3.1/all"
      );
      const data = await response.json();

      if (response.status === 404) {
        const image = document.createElement("img");
        image.src = ErrorNotFound;
        image.alt = "Error-image :(";
        imageBlock.append(image);
        throw new Error("Not found...");
      }

      if (response.status === 200) {
        errorBlock.classList.remove("active");
        errorMessage.innerHTML = "";
        blockCountryItems.classList.remove("hide");
        uiHome(data);
      }
    } catch (error) {
      errorBlock.classList.add("active");
      blockCountryItems.classList.add("hide");
      errorMessage.innerHTML = `${error.message} :( !!!!`;
    } finally {
      homeSpinner.classList.remove("active");
    }
  }
}

CountryApi.getAllCountry();

export default CountryApi;
