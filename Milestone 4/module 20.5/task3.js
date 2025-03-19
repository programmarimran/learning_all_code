// ### Task 3

// Use a for...of loop to concatenate all the elements of an array into a single string.

// **Input:**
//***************************************** */
// var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

// let numberString =numbers.join('')

// let result = [numberString]
// console.log(result)
//******************************************** */
var names = ['Tom', 'Tim', 'Tin', 'Tik']
let result= '';
for(const name of names){
    result=result+name;
}
console.log(result)



// **Output:**

// `'TomTimTinTik'`