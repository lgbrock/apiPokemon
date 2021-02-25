const form = document.getElementsByTagName("form")[0];
const input = document.getElementsByTagName("input")[0];
const button = document.getElementsByTagName("button")[0];
const img = document.getElementsByTagName("img")[0];

form.addEventListener("submit", event => {
  event.preventDefault();

  const pokemonName = input.value.toLowerCase();

  if (pokemonName === "") return;

  button.innerHTML = "Searching...";

  fetch(`//pokeapi.co/api/v2/pokemon/${pokemonName}`).then(response => {
    if (response.status === 404) {
      button.innerHTML = "Nothing found!";
      return;
    }

    response.json().then(pokemonData => {
      img.src = pokemonData.sprites.front_default;
      button.innerHTML = "Search";
    });
  });
});