function calculateVAT( price ) {
    if(typeof price!=="number" || price<0){
        return "Invalid"
    }
   const result = price*7.5/100;
   return result;
}

function  validContact( contact ) {
    if(typeof contact!=="string"){
     return "Invalid";
    }
 
    if(contact.startsWith('01')==false || contact.includes(' ') || contact.length!==11){
     return false;
    }
    else{
     return true;
    }
 }


 function  willSuccess( marks ) {
    if(Array.isArray(marks)==false){
        return "Invalid"
    }
    for(const num of marks){
        if(typeof num!=="number"){
            return "Invalid 2.0"
        }
    }
  const passNumber =[];
  const failNumber =[];
  for(const num of marks){
    if(num>=50){
        passNumber.push(num)
       }
       else{
        failNumber.push(num)
       }
  }
 
  if(passNumber.length>failNumber.length){
    return true;
  }
  else{
    return false;
  }
}


function  validProposal( person1 , person2 ) {
    if(typeof person1!=="object" || Array.isArray(person1) || typeof person2!=="object" || Array.isArray(person2)){
        return "Invalid"
    }


 if(person1.gender!==person2.gender && Math.abs(person1.age-person2.age)<=7){
    return true;
 }
 else{
    return false;
 }
}


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
   
   
   const hours =Math.floor(sum/3600);
   const minutes =Math.floor((sum-(hours*3600))/60);
   const seconds =Math.floor(sum-(hours*3600+minutes*60))
   
   const output ={Hours:hours,Minutes:minutes,Seconds:seconds};
   
   return output;
   
   }