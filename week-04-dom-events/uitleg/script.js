const button = document.getElementById('btn');
let songList = document.getElementById('songList');
const songInput = document.getElementById('songInput');

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
});
