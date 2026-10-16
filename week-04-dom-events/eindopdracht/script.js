let counter = document.getElementById('counter')
let amount = 0
let aantal = "task"
const button = document.getElementById('btn')



button.addEventListener('click', (e) => {
    e.preventDefault();
    const input = document.querySelector("#task-input").value.trim()
    let tasklist = document.querySelector("#tasks")

    const lijst = document.createElement('li')
    const deleteButton = document.createElement('button')
    deleteButton.textContent = "verwijderen"
    
    lijst.innerHTML += `${input} <input type="checkbox"> </input>   `
    tasklist.appendChild(lijst)
    lijst.appendChild(deleteButton)

    amount++
    counter.textContent = `${amount} task`

    deleteButton.addEventListener('click', () => {
    lijst.remove();
    amount--;

    counter.textContent = `${amount} task`
    })

})
// Selecteer het formulier, invoerveld, takenlijst en teller
// taakToevoegen() — maak een <li> aan met een checkbox en verwijderknop
// toonTaken() — werk de teller bij
// Voeg listeners toe aan het formulier en de taken
