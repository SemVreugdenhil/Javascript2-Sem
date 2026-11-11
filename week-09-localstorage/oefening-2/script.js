const user = { name: 'Anna', age: 28, city: 'Amsterdam' };
let zonderJson = document.querySelector('#zonder-json')
let metJson = document.querySelector('#met-json')

localStorage.setItem('gebruikerData', user); 
let retrieve = localStorage.getItem('gebruikerData')

localStorage.setItem('userData', JSON.stringify(user));


const opgehaald = JSON.parse(localStorage.getItem('userData'));
zonderJson.textContent = retrieve
metJson.innerHTML += `${opgehaald.name}, ${opgehaald.age}, ${opgehaald.city}`
// Stap 1: sla het object op zonder JSON.stringify en lees het terug — wat zie je?
// Stap 2: sla het object op MET JSON.stringify en lees het terug met JSON.parse
// Stap 3: toon het resultaat van beide methoden op de pagina
