function resultSum (number){
    let sum =0;
    for(let num of number){
        sum = sum+num
       
    }
    return sum;
}
let arryInput =[2,3,4,5,6]
let arry =resultSum(arryInput);
console.log(arry)