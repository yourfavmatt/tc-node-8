const APP_ID = "54f0MhTKuI2nxwD9nhEvN4ifNwephcpz";
const GIPHY_URL = "https://api.giphy.com/v1/gifs/translate";

let form = document.querySelector("form");
let input = document.querySelector("input");
let gif = document.querySelector("#gif");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let search = input.value;

  fetch(`${GIPHY_URL}?s=${search}&api_key=${APP_ID}`)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      console.log(result);
      gif.src = result.data.images.original.url;
      gif.alt = result.data.title;
    })
    .catch((err) => {
      console.error(err);
    });

  input.value = "";
});
