function  calculateSleepTime( times ) {
 if(Array.isArray(times)==false){
    return "Invalid"
 }
 for(const i of times){
    if(typeof i!=="number"){
        return "Invalid"
    }
 }

let sum =0;
for(const index of times){
    sum +=index
}



//hours = Math. floor(given_seconds / 3600);
//  minutes = Math. floor((given_seconds - (hours * 3600)) / 60);
//  seconds = given_seconds - (hours * 3600) - (minutes * 60);
//  timeString = hours



const hours =Math.floor(sum/3600);
const minutes =Math.floor((sum-(hours*3600))/60);
const seconds =Math.floor(sum-(hours*3600+minutes*60))

const output ={Hours:hours,Minutes:minutes,Seconds:seconds};

return output;

}










console.log(calculateSleepTime([100, 3800, "90" ]))