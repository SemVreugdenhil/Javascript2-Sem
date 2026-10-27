let allArticles = [];

const showArticles = (articles) => {
   <article>
    <h3>${title}</h3>
    <p>${category}</p>
    <p>${summary}</p>
  </article>
  // Zet elk artikel om naar een <article> met map() en toon het in #articles
  // Toon de title, category en summary van elk artikel
};

fetch('./news.json')
  .then(r => r.json())
  .then(articles => {
    // Sla de artikelen op in allArticles
    // Roep showArticles() aan met allArticles
  })
  .catch(error => console.error('Fout bij laden:', error));

// Maak een eventlistener voor de #filter-alle button
// Roep showArticles() aan met allArticles

document.querySelector('#filter-alle').addEventListener('click', () => {
  showArticles(allArticles);
});

// Maak een eventlistener voor de #filter-stad button
// Filter allArticles op category 'Stad' en roep showArticles() aan

document.querySelector('#filter-stad').addEventListener('click', () => {
  const allArticles = allArticles.filter(article => article.category === 'Stad');
  showArticles(allArticlesArticles);
});

// Maak een eventlistener voor de #filter-technologie button
// Filter allArticles op category 'Technologie' en roep showArticles() aan

document.querySelector('#filter-technologie').addEventListener('click', () => {
});

// Maak een eventlistener voor de #filter-media button
// Filter allArticles op category 'Media' en roep showArticles() aan

document.querySelector('#filter-media').addEventListener('click', () => {
});
