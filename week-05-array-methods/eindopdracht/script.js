const products = [
  'Laptop Pro',
  'Draadloze muis',
  'USB-C hub',
  'Bureaulamp',
  'Notitieboek',
  'Pennenset',
  'Koptelefoon',
  'Bluetooth speaker',
  'Webcam HD',
  'Muismat XL',
  'Monitor 27"',
  'Desk organizer',
];

let searchTerm = '';
let sorting = '';

const showProducts = (list) => {
  // Toon elke productnaam als een <article> in #products
  // Laat in #counter de hoeveelheid producten zien
let producten = document.querySelector("#products")
let counter = document.querySelector("#counter")

producten.textContent = "";

for (let product of list) {
  producten.innerHTML  += `<article> ${product} </article>`
}

counter.innerHTML = list.length   + "producten"
};

const filterProducts = () => {
  // Maak een variabele 'filtered' aan door de products array te filteren op searchTerm
  // Gebruik hiervoor filter() en includes() en toLowerCase()

  let filtered = products.filter(product => product.toLowerCase().includes(searchTerm.toLowerCase()))

  // Sorteer hier op sorting:
  if (sorting === 'az') {
    filtered.sort((a, b) => a.localeCompare(b))
  }

  if (sorting === 'za') {
    filtered.sort((a, b) => b.localeCompare(a))
  }
  // als sorting 'az' is, sorteer van A naar Z
  // als sorting 'za' is, sorteer van Z naar A

  showProducts(filtered);
};


// Maak een eventlistener voor de #search-bar input
// Sla de waarde op in de searchTerm variabele en roep filterProducts() aan
document.querySelector('#search-bar').addEventListener('input', (event) => {
  searchTerm = event.target.value;
  filterProducts();
});

document.querySelector('#sort-az').addEventListener('click', () => {
  sorting = "az"
  filterProducts();
});

document.querySelector('#sort-za').addEventListener('click', () => {
  sorting = "za"
  filterProducts();
});

// Maak een eventlistener voor de #sort-az button
// Zet sorting op 'az' en roep filterProducts() aan

// Maak een eventlistener voor de #sort-za button
// Zet sorting op 'za' en roep filterProducts() aan

filterProducts();