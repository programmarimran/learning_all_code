const person={name:"imran",age:20,status:"not",address:"Dhaka"}
const add=()=>{
    const convertString =JSON.stringify(person);
    console.log(convertString)
const addLocal=localStorage.setItem('person',convertString)
console.log(addLocal)
}


const getObject =localStorage.getItem("person");
console.log(getObject)
const converttoObject =JSON.parse(getObject)
console.log(converttoObject)

const remove =()=>{
    const removeData =localStorage.removeItem("person")
}