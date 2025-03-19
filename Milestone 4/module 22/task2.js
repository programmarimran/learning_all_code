// ### Task-2: 
// You are given an array of numbers. Count how many times the a number is repeated in the array. 

// sample-input: 
// numbers = [5,6,11,12,98, 5]
// find: 5
// output: 2
// <br/>
// sample-input: 
// numbers = [5,6,11,12,98, 5]
// find: 25
// output: 0
function countTimesOfNumber (arry){
    let repeatedNumber = [];
    for(let num of arry){
       if(!repeatedNumber.includes(num)){
        repeatedNumber.push(num)
       }
    }

    return arry.length-repeatedNumber.length;
}
let argument = countTimesOfNumber([1,5,5,5,3,2,3,5,3,5,6,4,8,5])
console.log(argument)
