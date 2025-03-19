// const handleusersere = async ()=>{
//     const response =await fetch("https://jsonplaceholder.typicode.com/posts")
//     console.log(response)
//     const data=await response.json()
//     console.log(data)
// }
// handleusersere()


const handleUsers =async ()=>{
   
      try{
        const response =await fetch("https://jsonplaceholder.typicode.com/posts")
    console.log(response)
    const data=await response.json()
    console.log(data)
      }
      catch(error){
        console.log("err dorsi",error)
      }
  
}
handleUsers()