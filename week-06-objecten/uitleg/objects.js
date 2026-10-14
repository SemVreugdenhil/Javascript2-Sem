const container = document.getElementById('container');
 
const rekening = {
  eigenaar: 'Herman de Vries',
  saldo: 100,
  rekeningnummer: 'NL10INGB1231234123',
  geblokkeerd: false,
};


 
const rekeningen = [
  {
    eigenaar: 'Sanne de Vries',
    saldo: 100,
    rekeningnummer: 'NL10INGB1231234123',
    geblokkeerd: false,
  },
  {
    eigenaar: 'Ahmed Yilmaz',
    saldo: 2500,
    rekeningnummer: 'NL10INGB1231234123',
    geblokkeerd: false,
  },
  {
    eigenaar: 'Lisa Bakker',
    saldo: 0,
    rekeningnummer: 'NL10INGB1231234123',
    geblokkeerd: true,
  },
  {
    eigenaar: 'Tom Jansen',
    saldo: 750,
    rekeningnummer: 'NL10INGB1231234123',
    geblokkeerd: false,
  },
];

for(let rekening of rekeningen){
    const {eigenaar, saldo} = rekening
    //destructuring
    container.innerHTML += `
    <h2>${eigenaar}</h2>
    <h3>${saldo}</h3>
    `
}

//spread
const kopie = {...rekening}
kopie.eigenaar = "Herman brood"
kopie.saldo = "1000"
console.log(kopie)

const newName = {...rekening, eigenaar: "Herman de Jong"}
console.log(newName)

const nieuweRekeningen = rekeningen.map((rekening) => {
    return {...rekening, saldo: 100}
})

const verkort =  rekening.map(rekening => ({...rekening, saldo: 100}))

console.log(nieuweRekeningen)

