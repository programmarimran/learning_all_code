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


let input ="345678900"

console.log(validContact(input))
