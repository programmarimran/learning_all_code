
// Feedback given successfully!
// OK  
// My Submission

// Submitted At: 03:27 AM, 18th Feb - 2025

// Re Submitted At: 05:48 PM, 18th Feb - 2025

function cashOut(money) {

if(typeof money=="number" && money>=0){

const moneyCharge =money*1.75/100;

return moneyCharge;

}

else{

return "Invalid"

}


}

function validEmail( email ) {

if(typeof email!=="string"){

return "Invalid"

}

const finalInput =email.trim();

console.log(finalInput);

let notIcon =".-_+@";

for(const singleIcon of notIcon){

if(finalInput.startsWith(singleIcon)){

return false;

}

}

let checkAtdarate =finalInput.includes("@");

if(checkAtdarate==false){

return false;

}

else if(finalInput.includes(" ")){

return false;

}

else if(finalInput.endsWith(".com")===false){

return false;

}

else{return true;}

}

function electionResult( votes ) {

if(Array.isArray(votes)==false){

return "Invalid";

}

let partyMango = [];

let partyBanana =[];

for(const party of votes){

if(party=='mango'){

partyMango.push(party)


}

else if(party=='banana'){

partyBanana.push(party)

}

}

if(partyMango.length>partyBanana.length){

return "Mango";

}

else if(partyMango.length==partyBanana.length){

return "Draw";

}

else{

return "Banana";

}


}

function isBestFriend( f1 , f2 ) {

if(typeof f1!=="object" || Array.isArray(f1) ){

return "Invalid";

}

else if( typeof f2!=="object" || Array.isArray(f2)){

return "Invalid";

}

if(f1.bestFriend==f2.roll && f1.roll==f2.bestFriend){

return true;

}

else{

return false;

}

}

function calculateWatchTime( times ) {


if(Array.isArray(times)==false){

return "Invalid";

}

for(const index of times){

if(typeof index!=="number"){

return "Invalid";

}

}

let sum =0;

for(const value of times){

sum +=value;

}

const hours = Math. floor(sum / 3600);

const minutes = Math. floor((sum - (hours * 3600)) / 60);

const seconds = Math.floor(sum - (hours * 3600) - (minutes * 60));


const object ={

hour:hours,

minute:minutes,

second:seconds

}

return object;


}

let check =validEmail("mdimrahh.com")
console.log(check)