// ### Task-4  
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.


function count_zero (strings){
    let count =0;
   for(let n=0;n<strings.length;n++){
    if(strings[n]==='0'){
        count++
    }
   }
    return count;
}

let strin ='1000110';
let argument =count_zero(strin)
console.log(argument)
//******************************************* */

function count_zero (number){
    let zero =[];
    for(let n=0; n<number.length;n++){
        if(number[n]==='0'){
            zero.push(number[n])
            
        }
    }
    let result = zero.length
    return result;
    
}

let binary ='1000000110';
let argumen = count_zero(binary)
console.log(argumen)