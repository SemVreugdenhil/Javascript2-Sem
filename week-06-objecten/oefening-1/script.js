let output1 = document.querySelector("#output-1")
let output2 = document.querySelector("#output-2")
let output3 = document.querySelector("#output-3")

const car = {
  name: 'Golf',
  brand: 'Volkswagen',
  year: 2008,
  mileage: 145000,
  description() {
    // Vul in: geef een zin terug met this.name en this.brand via template literal
        return `${this.brand} ${this.name}`;
  },
  isOld() {
    // Vul in: geef true terug als het year voor 2010 is
     return this.year < 2010;
  },
  drive(km) {
    // Vul in: verhoog this.mileage met km en geef de nieuwe km-stand terug
    this.mileage += km
    return this.mileage
  },
};

// Toon de resultaten in de drie output-elementen
output1.innerHTML = `
${car.description()}
`
output2.innerHTML = car.isOld();

output3.innerHTML = `
${car.drive(100)}
`


