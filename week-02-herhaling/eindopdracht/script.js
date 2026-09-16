let amount = document.getElementById("amount");
let discount = document.getElementById("discount");
let submit = document.getElementById("submit");
let result = document.getElementById("result");

submit.addEventListener("click", function(e) {
    e.preventDefault();
      

    //ALS de input van amount leeg is OF de input van discount leeg is
    //result.textINput = "VUl een bedrag in"
    
    if (amount.value == "" || discount.value == "" ) {
    result.textContent = "discount leeg  " 
 } else {
     result.textContent = calculator(amount.value, discount.value);
 }
})


// Stap 1: Schrijf calculateTotal(bedrag, korting)
// Stap 2: Luister naar het submit-event, lees de invoervelden uit met .value en toon het resultaat
// Stap 3: Toon een foutmelding in #result als het bedrag of de korting leeg is
// Bonus:  Schrijf getKlantniveau(bedrag) en toon het niveau erbij
