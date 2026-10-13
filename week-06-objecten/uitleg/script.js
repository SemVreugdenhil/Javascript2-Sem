const container = document.getElementById('container')

const rekening = {
    //properties aka eigenschappen
    eigenaar: "Jayden de Vries",
    saldo: 20,
    rekeningnummer: "NL01ABN10786584",
    geblokkeerd: false,
    pincode: "9052",
    dagLimiet: 500,
    transacties: [],
    toonSaldo(){
        return this.saldo
    },

    changeSaldo(amount){
        this.saldo += amount

        this.transacties.push(amount)
        return 'Het bedrag $(amount) is toegevoegd aan uw rekening'
    }
}
console.log(rekening.transacties)

rekening.changeSaldo(1000)

console.log(rekening.toonSaldo())

console.log(rekening.saldo)
console.log(rekening.rekeningnummer)

container.innerHTML = `
<h2>${rekening.eigenaar}</h2>
<h3>${rekening.saldo}</h3>
<p>${rekening.rekeningnummer}</p>
<p>${rekening.changeSaldo(2000)}</p>
`