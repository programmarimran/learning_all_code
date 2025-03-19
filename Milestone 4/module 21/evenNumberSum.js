/**
 * create a functon of return the even number and retur of sum the even number
 */


function sumEvenNumber (number){
    let sum =0;
    let evenArry =[];
    for(let i =0;i<number.length;i++){
        if(number[i]%2 == 0){
            sum+=number[i];
            evenArry.push(number[i])
        }
    }
    return evenArry;
}


let arry = [1,2,3,4,5,6];
let argument = sumEvenNumber(arry);
console.log(argument)