const aboutImgBlock = document.querySelector(".about-img");
const aboutInfoTop = document.querySelector(".about-info-top");
const languagesBlock = document.querySelector(".languages-block");
const mapLink = document.querySelector(".map-link");
const currenciesBlock = document.querySelector(".currencies-block");
const borders = document.querySelector(".borders");
const bordersBlock = document.querySelector(".border-block");
const translationsBlock = document.querySelector(".translations-block");

function uiAbout(data) {
  // console.log(data)
  const aboutImg = document.createElement("img");
  aboutImg.src = data.flags.svg;
  aboutImg.alt = "About Single IMG";
  aboutImgBlock.append(aboutImg);

  const infoBlock = document.createElement("div");
  infoBlock.className = "info-block-inner";

  infoBlock.innerHTML = `
    <h2>Name: ${data.name.common}</h2>
    <h2>Capital: ${data.capital ? data.capital[0] : "NOT"}</h2>
    <h2>Region: ${data.region ? data.region : "NOT"}</h2>
    <h2>Population: ${data.population ? data.population : "NOT"}</h2>
    <h2>Fifa: ${data.fifa ? data.fifa : "NOT"}</h2>
  `;

  aboutInfoTop.append(infoBlock);

  let languagesArray;
  if (data.languages) {
    languagesArray = Object.entries(data.languages);
    languagesBlock.innerHTML = languagesArray
      .map(
        (lang) =>
          `
        <li>${lang[0]}: ${lang[1]}</li>
      `
      )
      .join("");
  }

  mapLink.setAttribute("href", data.maps.googleMaps);

  if (data.currencies) {
    const currenciesArray = Object.entries(data.currencies);
    currenciesBlock.innerHTML = currenciesArray
      .map(
        (currency) =>
          `
        <li>
          <span class="currency-name">${currency[0]}:</span>
          <span class="currency-info">
          ${currency[1].name} ____ ${currency[1].symbol} 
          </span> 
        </li>
      `
      )
      .join("");
  }

  if (data.borders) {
    borders.innerHTML = data.borders.map((border) => `<span>${border}</span>`).join(" ");
  } else {
    bordersBlock.style.display = "none"
  }

  const translationsArray = Object.entries(data.translations)

  if(translationsArray) {
    console.log(translationsArray)
    translationsBlock.innerHTML = translationsArray.map(translate => (

      `
        <li>
          ${translate[0]}: ${translate[1].official} ${translate[1].common}
        </li>
      `

    )).join("")
  }
}

export default uiAbout;
