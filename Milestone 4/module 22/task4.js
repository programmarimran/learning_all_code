// ### Task-4: 
// Write a function to find the longest word in a given string.

// sample-input: 
// I am learning Programming to become a programmer

// sample-output: Programming

//***************************************************** */
// ### Task-4: 
// Write a function to find the longest word in a given string.

function findLongWordInString (string){
    let arry =string.split(' ')
    
    let output ='';
    
    for(let nam of arry){
     if(nam.length > output.length){
        output=nam;
     }
    }
    return output;
}

let string ='I  am learning Programming to become a programmer';
const argument = findLongWordInString(string)
console.log(argument)



//************************************************ */
// just example
// let kiso =['kisoekta','slo']

// console.log(kiso[0].length + kiso[1].length)