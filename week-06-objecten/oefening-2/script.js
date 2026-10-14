const origineel = document.getElementById('origineel')
const kopie = document.getElementById('kopie')

const people = [
  { name: 'Lisa', age: 28, city: 'Amsterdam' },
  { name: 'Mark', age: 34, city: 'Rotterdam' },
  { name: 'Sara', age: 22, city: 'Utrecht' },
];

// 1. Toon in #origineel de originele lijst met alleen namen en steden.
//    Gebruik destructuring in je .map().

for(let person of people){
    const {name, age, city} = person
    //destructuring
    origineel.innerHTML += `
    <h2>${name}</h2>
    <h3>${age}</h3>
    <p>${city}</p>
    `
}
// 2. Maak met .map() en de spread operator een nieuwe array waarin
//    de stad van elke persoon is gewijzigd naar 'Den Haag'.
//    De originele people-array moet onveranderd blijven.

const newPeople = people.map((person) => {
    return {...person, city: 'Den Haag'}
})

for(let person of newPeople){
    const {name, age, city} = person
    //destructuring
    kopie.innerHTML += `
    <h2>${name}</h2>
    <h3>${age}</h3>
    <p>${city}</p>
    `
}

// 3. Toon deze nieuwe lijst in #kopie, ook met destructuring.