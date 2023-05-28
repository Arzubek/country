import CountryApi from "./countryApi";
const input = document.querySelector(".input-search");

const debounce = (callback) => {
  let timeout;

  return (argument) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => callback(argument), 400);
  };
};

const onInput = ({ target }) => {
  const search = target.value;
  CountryApi.getAllCountry(search);
};

const debouncedOnInput = debounce(onInput);
input.addEventListener("input", debouncedOnInput);
