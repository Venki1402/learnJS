const textbox = document.getElementById("input");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelcius = document.getElementById("toCelcius");
const result = document.getElementById("result");
let temp;

function convert(){
    if(toFahrenheit.checked){
        temp = Number(textbox.value);
        temp = (temp * 9)/5  +  32;
        result.innerText = `Hello`;
    }
    else if(toCelcius.checked){

    }
    else{
        result.textContent = " Select A Unit";
    }
}