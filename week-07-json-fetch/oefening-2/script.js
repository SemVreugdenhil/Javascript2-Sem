// Vul eerst movies.json met minimaal 4 films:
// [{"title":"","director":"","year":0,"genre":""}]

// Schrijf daarna de fetch zelf (zelfde patroon als oefening 1)

fetch('./movies.json')
  .then(response => response.json())
  .then(movies => {
    const list = document.querySelector('#films');
    movies.forEach(movies => {
      const li = document.createElement('li');
      li.textContent = `${movies.title} — ${movies.director}  — ${movies.year}  — ${movies.genre}`;
      list.appendChild(li);
    });
  })
  .catch(error => console.error('Fout:', error));
