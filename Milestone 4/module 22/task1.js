// ### Task-1: 
// Write a function to convert temperature from Celsius to Fahrenheit.

function celciusToFarenheit (celcious){
   let farenhait = (celcious * 9/5) + 32;
   return farenhait;
}

let celcious = 32;
let argument =celciusToFarenheit(celcious)
console.log(celcious,"C","=",argument,'F')
