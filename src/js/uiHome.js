const blockCountryItems = document.querySelector(".block-country-items");

function uiHome(data) {
  blockCountryItems.innerHTML = `
        <div class="country-block">
            ${data
              .map(
                (element) =>
                  `<div class="country-item">
                    <div class="flag">
                        <img src='${element.flags.svg}' alt="Flag-Country">
                    </div>
                    <div class="country-body">
                        <h3 class="country-name">
                            Name: ${element.name.common}
                        </h3>
                        <h3 class="country-region">
                            Region: ${element.region}
                        </h3>
                        <h3 class="country-population">
                            Population: ${element.population}
                        </h3>
                    </div>
                    <a href='/about.html?name=${element.name.common}' class="country-item-link"></a>
                </div>`
              )
              .join("")}
        </div>
    `;
}

export default uiHome;
