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




let argument =validProposal( { name: "mitu", gender: "male", age: 32 }, "Mizan"  )
console.log(argument)