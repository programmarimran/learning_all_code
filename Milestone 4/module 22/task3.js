// ### Task-3: 
// Write a function to count the number of vowels in a string.

function countVowelWord (string){
    let vowel ='aeiou';
    let store =[]
    for(let nam of string){
        if(vowel.includes(nam.toLowerCase())){
            store.push(nam)
        }
    }
    let result = store.length
    return result;
}
let string ='arioAjhe'
let argument= countVowelWord(string)
console.log(argument)















//*************************************************** */
// function countVowel (string){
//     let store =[];
//     let vowel ='aeiou';
//     for(let num of string){
//         if(vowel.includes(num.toLowerCase())){
//             store.push(num)
//         }
        
//     }
//     let result = store.length;
//     return result;
// }

// let argument = countVowel('staAkaiousegt')
// console.log(argument)