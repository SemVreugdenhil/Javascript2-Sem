// Selecteer alle vakken met querySelectorAll als houvast
let divs = document.querySelectorAll("div")
// Loop met een for of loop door elk vak en voeg aan elk vak een click-event toe dat de klasse 'active' wisselt
for (let div of divs) {
    div.addEventListener("click", () => {
        div.classList.toggle('active')
    })
}