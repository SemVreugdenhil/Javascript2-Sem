// Filter: toon alleen scores boven de 50 in #result-filtered
const toon = [12, 67, 45, 89, 23, 55, 71, 38, 94, 16];


const resultFiltered = toon.filter(s => s > 50);
document.getElementById("result-filtered").textContent = resultFiltered
console.log(resultFiltered);

// Map: verdubbel alle scores en toon in #result-map
const verdubbel = [12, 67, 45, 89, 23, 55, 71, 38, 94, 16];

const resultMap = verdubbel.map(n => n * 2);
document.getElementById("result-map").textContent = resultMap 
console.log(resultMap);

// Sort: sorteer van laag naar hoog en toon in #result-sorted
const sorteer = [12, 67, 45, 89, 23, 55, 71, 38, 94, 16];

const resultSorted = sorteer.sort((a, b) => a - b); 
document.getElementById("result-sorted").textContent = resultSorted
console.log(resultSorted)