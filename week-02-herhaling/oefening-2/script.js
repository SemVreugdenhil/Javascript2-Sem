// ============================================================
//  Week 2 — Oefening 2: Basis DOM-manipulatie
// ============================================================

// 1. Selecteer #title met querySelector en verander de tekst
//    naar iets anders met textContent
document.querySelector('#title').textContent = 'Hoi'; 


// 2. Voeg een click event listener toe aan #toggle-btn.
//    Bij klik wisselt de tekstkleur van #message tussen rood en zwart.
//    Gebruik een variabele om bij te houden of de tekst nu rood is.
    isRed = false
document.querySelector('#toggle-btn').addEventListener('click', function() {
   document.querySelector('#toggle-btn').style.color = "red"

   let message = document.querySelector("#message");

    if(isRed){        
        message.style.color = "red"
        isRed = false
    }else {
        message.style.color = "black"
        isRed = true
    }
})

 





// 3. Voeg een click event listener toe aan #greet-btn.
//    Lees de waarde van #name-input uit en toon 'Hallo, <naam>!' in #greeting.
document.querySelector('#greet-btn').addEventListener("click", function(){
    const name = document.querySelector('#name-input').value;

    document.querySelector('#greeting').textContent = "Hallo mijn naam is " + name;

})