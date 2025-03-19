// ### Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function ifMultyDivide (number){
    if(number%2===0){
        return number*2;
    }
    else{
        return number/2;
    }
}

let userInput =32;
let argument =ifMultyDivide(userInput)
console.log(argument)