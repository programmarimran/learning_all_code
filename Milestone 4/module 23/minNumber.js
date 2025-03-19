let height = [23,34,45,56,2,67,78,25,12,65];

function createminNumber (numbers){
    let minNumber =numbers[0];
    for(const num of numbers){ //why result 23 i created the min number.example 2 hote parto
        if(num<minNumber){
            minNumber=num
        }
       
    }
    console.log(minNumber)
    return minNumber;
}
 let argument =createminNumber(height)
 console.log(argument)