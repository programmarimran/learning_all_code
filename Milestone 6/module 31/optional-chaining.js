//***********************Optional Chaining (?) tarnary er moton arki *********************************** */
// jemon eita jodi true hoi taile porerta hobe . notoba undifined =mane pacce na arki .

const person ={
    name :"imran",
    id:301129,
    father:{
        id:2021,
        details: {
            kiso:{
                ekta:`as"''"as`,
            }
        },
       
    },
    details:{
        job:true,
        married:false
    }
}

// console.log(person?.father?.details?.kiso?.ekta)

//************Dot notation and bracket notation*********************************** */

const yamaha={
    brand:true,
    '1no':false,
    'name-1234':true,

}
// console.log(yamaha["name-1234"])
// console.log(yamaha.brand);