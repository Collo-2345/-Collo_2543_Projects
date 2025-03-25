//Declare our const var
const mytext = document.getElementById("mytext");
const tocelsius = document.getElementById("tocelsius");
const tofahrenheit = document.getElementById("tofahrenheit");
//const convert = document.getElementById("convert");
const result = document.getElementById("result");
const collo = document.getElementById("collo");


let temp,final;

function calculate(){

    if(tofahrenheit.checked){
        temp = Number(mytext.value);
        temp = (temp * 9/5) + 32;
        final = temp.toFixed(1);
        result.textContent =`Display:${final} ℉`;
    }
    else if(tocelsius.checked){
        temp = Number(mytext.value);
        temp = (temp - 32) * (5/9);
        final = temp.toFixed(1);
        result.textContent = `Display:${final} ℃`;
    }
    else{
        result.textContent = "Select unit";
    }
}
function resetForm(){
   // reset input field
   mytext.value = "0";

   //uncheck the radio buttons
   tocelsius.checked = false;
   tofahrenheit.checked = false;

   //clear result text
   result.textContent = "";
}