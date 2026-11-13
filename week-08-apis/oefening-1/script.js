fetch('https://rickandmortyapi.com/api/character')
  .then(r => r.json())
  .then(data => {
    console.log(data); // Bekijk de structuur

    const container = document.querySelector('#characters');

  for (let character of data.results) {
    container.innerHTML += `
      <article>
        <h3>${character.name}</h3>
        <img src="${character.image}" alt="${character.name}" width="100">
      </article>
      `;
    }
  })
    // De karakters zitten in data.results
    // Elk karakter heeft een 'name' en 'image' property
    // Toon de naam en afbeelding van elk karakter als <article> in #characters
  .catch(error => console.error('Fout:', error));
