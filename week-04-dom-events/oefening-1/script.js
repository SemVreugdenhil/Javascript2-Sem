const button = document.getElementById('add');
const songInput = document.getElementById('input');
const songList = document.getElementById('list');

button.addEventListener('click', () => {
    const input = songInput.value.trim()

    const lijst = document.createElement('li')
    lijst.textContent = input

    const deleteButton = document.createElement('button')
    deleteButton.textContent = "verwijderen"

    lijst.appendChild(deleteButton)

    deleteButton.addEventListener('click', () => {
        lijst.remove();
    })
    songList.appendChild(lijst)
    songInput.value = ""
})
// Voeg een event listener toe aan de knop
// Maak een <li> element aan met de tekst uit het invoerveld
// Voeg een verwijderknop toe aan elk <li> element
    