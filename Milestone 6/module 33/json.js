


// const persons ={
//     name:"imran",
//     Id: 18,
//     status:false
// }
// console.log(persons)

// const newPerson =JSON.stringify(persons)
// console.log(newPerson)


// const transferPrePersons =JSON.parse(newPerson)
// console.log(transferPrePersons)

// const handleData=()=>{
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response=>response.json())
//     .then(achieve=>console.log(achieve))
//     .catch(err=>console.log(" error dorchi",err))
// }

// handleData()

// const handlePhoto =()=>{
//     fetch("https://jsonplaceholder.typicode.com/photos")
//     .then(res=>res.json())
//     .then(data=>{

//         dynamicShow(data)
//     })
// }


// const dynamicShow =(users)=>{
//     const container =document.getElementById("container")
//     for (let i=0;i<=5;i++){
//         const user =users[i]
//         console.log(user)
        
//         const div =document.createElement("div")
//         div.classList.add("style")

//         div.innerHTML=`
//         <h1>${user.
//             id
//             }</h1>
//         <h1>${user.
//             albumId
//             }</h1>
//         <h1>${user.title}</h1>
//         <h1>${user.
//             thumbnailUrl
//             }</h1>
//             <p>
// ${user.url}
// </p>

//         `
//         container.appendChild(div)
        


//     }
    
// }

// handlePhoto()
