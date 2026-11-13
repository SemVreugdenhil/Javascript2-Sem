let allPokemon = [];
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

const saveFavorites = () => {
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

const showItems = (items) => {
  const results = document.querySelector('#results');

  results.innerHTML = items.map((pokemon, index) => {
    const isFavorite = favorites.includes(pokemon.name);

    return `
      <article>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="${pokemon.name}">
        <h2>${pokemon.name}</h2>
        <button class="favorite-btn" data-index="${index}">
          ${isFavorite ? 'Verwijder favoriet' : 'Favoriet'}
        </button>
      </article>
    `;
  }).join('');

  // Zet elk item om naar een <article> met map() en toon het in #results
  // Toon de afbeelding en naam van elke Pokémon
  // Voeg een <button class="favorite-btn"> toe per kaartje
  // Gebruik includes() om te checken of de naam al in favorites staat
  // Geef de knop een andere tekst als de Pokémon al een favoriet is

  // Voeg daarna een click event listener toe aan elke .favorite-btn
  // De index i vertelt je welke Pokémon bij welke knop hoort: items[i].name
  document.querySelectorAll('.favorite-btn').forEach((btn, i) => {
    btn.addEventListener('click', () => {
      const name = items[index].name;

      if (favorites.includes(name)) {
        favorites = favorites.filter((favorite) => favorite !== name);
      } else {
        favorites.push(name);
      }

      saveFavorites();
      showItems(items);
    });
  });
};

  // Voeg items[i].name toe aan favorites
  // Roep saveFavorites() aan
  // Roep showItems(items) opnieuw aan

document.querySelector('#loading').textContent = 'Laden...';

fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  .then((r) => r.json())
  .then((data) => {
    document.querySelector('#loading').textContent = '';

    allPokemon = data.results.map((pokemon, index) => ({
      ...pokemon,
      id: index + 1,
    }));

    showItems(allPokemon)
    // Sla data.results op in allPokemon, voeg het id toe via de index
    // Roep showItems() aan met allPokemon
  })
  .catch((error) => {
    document.querySelector('#loading').textContent = 'Er is iets misgegaan.';
    console.error('Fout:', error);
  });

const showButton = document.getElementById('show-all');
showButton.addEventListener('click', () => {
  showItems(allPokemon);
});

// Maak een eventlistener voor de #show-all button
// Roep showItems() aan met allPokemon

const showFavo = document.querySelector('#show-favorites');
showFavo.addEventListener('click', () => {
  const favoritePokemon = allPokemon.filter((pokemon) => favorites.includes(pokemon.name));
  showItems(favoritePokemon);
});

// Maak een eventlistener voor de #show-favorites button
// Filter allPokemon op namen die in favorites staan (gebruik includes())
// Roep showItems() aan met het gefilterde resultaat