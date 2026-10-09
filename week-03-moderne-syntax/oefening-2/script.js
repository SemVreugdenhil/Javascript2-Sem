// Voeg een event listener toe aan elke knop
// Knop 1: voeg tekst toe aan #message
// Knop 2: voeg een <li> toe aan #list met een tekst
// Knop 3: wissel de klasse 'active' op #message

const button = document.querySelector("#btn-1");
const message = document.querySelector("#message");

button.addEventListener("click", () => {
  message.textContent = "Knop 1!";
});

const button2 = document.querySelector("#btn-2");
const list = document.querySelector("#list");

button2.addEventListener("click", () => {
  const list = document.createElement('li');
  list.textContent = "Knop 2!";
});
