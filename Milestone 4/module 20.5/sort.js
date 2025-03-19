//************************** */

// const numbers = [1,2,3,4,5,6,7,8,9];
// let num_asending = numbers.sort();
// console.log(num_asending)
//************************************** */
const numbers = [1,2,3,4,5,6,12,18,7,8,9];
let num_asending =[...numbers].sort(function (a,b){return a-b});
let num_desending =[...numbers].sort(function (a,b){return b-a})
console.log(num_asending)
console.log(num_desending)