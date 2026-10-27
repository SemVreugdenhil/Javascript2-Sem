fetch('./books.json')
  .then(response => response.json())
  .then(books => {
    // Toon elk boek als een <li> in #books-list
    
    const list = document.querySelector('#books-list');
    books.forEach(books => {
      const li = document.createElement('li');
      li.textContent = `${books.title} — ${books.author}  — ${books.year}`;
      list.appendChild(li);
    });
  })
  .catch(error => console.error('Fout:', error));
