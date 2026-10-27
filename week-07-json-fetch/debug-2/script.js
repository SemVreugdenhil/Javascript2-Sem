// Fout gevonden: _______________ de komma achter de laatste zin in products.json 
// Oplossing: _______________ de komma achter de laatste zin in products.json weggehaald

fetch('./products.json')
  .then(r => r.json())
  .then(products => {
    const list = document.querySelector('#results');
    products.forEach(product => {
      const li = document.createElement('li');
      li.textContent = `${product.name} — €${product.price}`;
      list.appendChild(li);
    });
  })
  .catch(error => console.error('Fout:', error));
