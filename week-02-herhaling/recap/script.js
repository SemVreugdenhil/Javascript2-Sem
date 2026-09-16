let input = document.getElementById("input");
let output = document.getElementById("output");
let btn = document.getElementById("btn");

let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let buttonCalc = document.getElementById('btnCalc');
let outputCalc = document.getElementById('outputCalc');

buttonCalc.addEventListener('click', function(){
    outputCalc.textContent = calculator(input1.value, input2.value)
})

function calculator(a, b){
    return a * b
}

btn.addEventListener('click', function(){
    btn.style.backgroundColor = "green"

    output.textContent = input.value
    output.style.color = "green"
    input.value = ""
})
