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
  console.log(passNumber , failNumber)
  if(passNumber.length>failNumber.length){
    return true;
  }
  else{
    return false;
  }
}


let arry =90
console.log(willSuccess(arry))