// ### Task-5 
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return `Even`. If odd return `Odd

function odd_even (value){
    if(value%2===0){
        let result ='Odd'
        return result;
    }
    else{
       let result ='Even'
       return result;
    }
}

let value = 84;
let argument = odd_even(value)
console.log(argument)