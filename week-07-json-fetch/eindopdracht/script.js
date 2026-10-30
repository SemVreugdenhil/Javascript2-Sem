let allArticles = [];

const showArticles = (articles) => {
  let container = document.querySelector("#articles")
  container.innerHTML = "";
  for(let article of articles) {
container.innerHTML += `
  <article>
    <h3>${article.title}</h3>
    <p>${article.category}</p>
    <p>${article.summary}</p>
  </article>
`;
  }
  
}
  // Maak #articles eerst leeg, loop dan met for...of over de artikelen
  // en voeg elk artikel als <article> toe met innerHTML +=
  // Toon de title, category en summary van elk artikel

fetch('./news.json')
  .then(response => response.json())
  .then(articles => {
    allArticles = articles
    showArticles(allArticles);
    // Sla de artikelen op in allArticles
    // Roep showArticles() aan met allArticles
  })
  .catch(error => console.error('Fout bij laden:', error));

document.querySelector('#filter-alle').addEventListener('click', () => {
  showArticles(allArticles);
});

// Maak een eventlistener voor de #filter-alle button
// Roep showArticles() aan met allArticles
let filterstadbutton = document.querySelector('#filter-stad')
filterstadbutton.addEventListener('click', () => { 
  showArticles(allArticles.filter(artikel => artikel.category === 'Stad'));
});

// Maak een eventlistener voor de #filter-stad button
// Filter allArticles op category 'Stad' en roep showArticles() aan

document.querySelector('#filter-technologie').addEventListener('click', () => {
  const technologieArticles = allArticles.filter(article => article.category === 'Technologie');
  showArticles(technologieArticles);
});

// Maak een eventlistener voor de #filter-technologie button
// Filter allArticles op category 'Technologie' en roep showArticles() aan

document.querySelector('#filter-media').addEventListener('click', () => {
  const mediaArticles = allArticles.filter(article => article.category === 'Media');
  showArticles(mediaArticles);
});

// Maak een eventlistener voor de #filter-media button
// Filter allArticles op category 'Media' en roep showArticles() aan maak deze