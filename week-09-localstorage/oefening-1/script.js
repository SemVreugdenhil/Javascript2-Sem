let input = document.querySelector('#input')
let save = document.querySelector('#save')
let retrieve = document.querySelector('#retrieve')
let result = document.querySelector('#result')

save.addEventListener('click', () => {
  let inputValue = input.value.trim()
  localStorage.setItem('input value', inputValue)
})

retrieve.addEventListener('click', () =>{
    let retrieve = localStorage.getItem('input value')
    if (retrieve === "") {
  result.textContent = "er is niks" 
   } else {
    result.textContent = retrieve
}
})
// Knop "Opslaan": gebruik localStorage.setItem() om de invoer op te slaan
// Knop "Ophalen": gebruik localStorage.getItem() om de waarde op te halen
// Null-check: toon een melding als er nog niets opgeslagen is
