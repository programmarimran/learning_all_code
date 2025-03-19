// ### Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg (arrays){
    let sum =0;
    for(const singlearry of arrays){
        sum +=singlearry
       
    }
    return sum/arrays.length;
}


let arry =[1,2,3.5,4];
let argument= make_avg(arry)
console.log(argument)
