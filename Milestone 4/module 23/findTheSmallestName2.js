// ### Task -2: 
// Find the friend with the smallest name.
// <br>
// `const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];`
const heights2 = ['rahim', 'robin', 'rafi','f', 'ron', 'rashed'];
function smallestName (arry){
    let small = arry[0];
    for(const name of arry){
        if(small.length>name.length){
            small=name;
        }
    }
    return small;
}
const argumant=smallestName(heights2)
console.log(argumant)