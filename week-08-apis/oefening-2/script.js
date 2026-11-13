let allPokemon = [];
let pokemonList = document.querySelector('#pokemon-list')
let searchBar = document.querySelector('#search-bar')
let counter = document.querySelector('#counter')


// De API geeft een object terug met een 'results' array
// Elk item heeft een 'name' property
// Gebruik console.log(data) om de structuur te bekijken

// De afbeelding van een Pokémon staat op:
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{id}.png
// Sla het id op via de index bij het laden: { ...pokemon, id: index + 1 }

fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  .then(response => response.json())
  .then(data => {
    console.log(data); // Bekijk de structuur
allPokemon = data.results.map((pokemon, index) => {
  return { ...pokemon, id: index + 1 }
})
showPokemon(allPokemon)
    // Sla data.results op in allPokemon, voeg het id toe via de index
    // Toon alle Pokémon in #pokemon-list met naam en afbeelding
    // Toon het aantal in #counter
  })

  .catch(error => console.error('Fout:', error));

  function showPokemon(allPokemon) {
    pokemonList.innerHTML = "";
      counter.textContent = allPokemon.length
    for (let pokemon of allPokemon) {
    pokemonList.innerHTML += `
      <article>
        <h2>${pokemon.name}</h2>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"
        alt="${pokemon.name}" width="100">
 
      </article>
      `;
    }
  }

  showPokemon(allPokemon)

searchBar.addEventListener('input', ()=> {
  let search = searchBar.value;
  let filteredPokemon = allPokemon.filter(pokemon => {
    return pokemon.name.includes(search)
  })
  showPokemon(filteredPokemon)
})


// Voeg een event listener toe aan #search-bar
// Filter allPokemon op naam en herrender de lijst
