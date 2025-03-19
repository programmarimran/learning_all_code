// ### Task -1: 
// Find the lowest number in the array below.
// <br>
{/* `const heights2 = [167, 190, 120, 165, 137];` */}
const heights2 = [167, 190, 120, 165, 137];
function LowestNumber (arry){
    let min =arry[0];
    for(const number of arry){
        if(min>number){
            min=number;
        }
    }
    return min;
}
let argumant =LowestNumber(heights2)
console.log(argumant)