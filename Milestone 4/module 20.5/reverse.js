//******************************************* */
// const numbers = [1,2,3,4,5,6,];
// let rev_numbers=[]
// for(const num of numbers){
//   rev_numbers.unshift(num)
// }
// console.log(numbers)
// console.log(rev_numbers)

//************************************************* */
// const numbers = [1,2,3,4,5,6]
// numbers.unshift('string')
// numbers.push('kisoekta')
// console.log(numbers)
//*********************************************** */

// let numbers = [1,2,3,4,5,6]
// let rev_numbers = []
// for (const singlenumber of numbers){
//  rev_numbers.unshift(singlenumber)
// }console.log(rev_numbers)
//****************************************************** */

// const numbers = [1,2,3,4,5,6]
// let rev_numbers = [];
// for(let n =0; n<numbers.length; n++){
//     if(numbers[n]){
//       rev_numbers.unshift(numbers[n])
//     }
// }console.log(rev_numbers)
//************************************************** */
// const numbers = [ 1,2,3,4,5,6];
// let rev_numbers = [];
// for (let n = 0; n<numbers.length; n++){
//   const num = numbers[n];
//   rev_numbers.unshift(num)
// }console.log(rev_numbers)
//********************************************* */
const numbers = [ 1,2,3,4,5,6];
let rev_numbers = [];
for (let n = numbers.length-1; n>=0; n--){
  const num = numbers[n];
  rev_numbers.push(num)
}console.log(rev_numbers)
