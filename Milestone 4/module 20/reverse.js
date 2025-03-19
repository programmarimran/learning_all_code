const idea = 'i am a very good person ';

// // ***************way number 1 ***********************************
// let reverse = '|';
// for (const singularIdea of idea){
//     // console.log(singularIdea);
//     reverse = singularIdea + reverse;
    
// }console.log(reverse)

//*****************way number 2*************************

let reverse = '';
// for(let i = 0; i<=idea.length; i++){
//     // console.log(i)
//     const singularIdea = idea[i]
//     reverse = singularIdea + reverse;
    
// }console.log(reverse)

//************************************* */


const reversed = idea.split("").reverse().join('');
console.log(reversed)