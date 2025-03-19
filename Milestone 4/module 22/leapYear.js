function learYear(year){
    if(year%100!==0 && year%4===0){
        let result ='Leap Year : true'; //eksate string and boolear rakha jai na ki?
        return result;
    }
    else{
        let result ='Lear Year : false';
        return result
    }
}
let year =2031;
const argument =learYear(year)
console.log(argument)