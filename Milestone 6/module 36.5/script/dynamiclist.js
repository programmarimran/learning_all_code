
// const btn=document.getElementById("btn")
// .addEventListener("click",()=>{
//     const name =document.getElementById("name").value;
//     const quantity =document.getElementById("quantity").value;


//   setTolocalStorage(name,quantity)
  

//  document.getElementById("name").value=``
//  document.getElementById("quantity").value=``
 
// })


// const setTolocalStorage =(name,quantity)=>{
//     const cards =getFromLocalStorage()
//     cards[name]=quantity
//     const card=JSON.stringify(cards)
//     localStorage.setItem("card",card)
// }



// const getFromLocalStorage =()=>{
//     let card ={}
//     const getLocalCard =localStorage.getItem("card")
//     if(getLocalCard){
//         card =JSON.parse(getLocalCard)
//     }
//     return card
// }
//***************************************************************** */
const addbtn =document.getElementById("btn")
.addEventListener("click",()=>{
    const name =document.getElementById("name").value;
    const price =document.getElementById("price").value;
    
    setTolocalStorage(name,price)
    displayCard()

   document.getElementById("name").value=``
   document.getElementById("price").value=``
})

const displayCard =()=>{
    const container =document.getElementById("container")
    const cards =getFromLocalStorage()
    for(const card in cards){
    const li =document.createElement("li")
    li.innerText=`${card} : ${cards[card]}`
    container.appendChild(li)

    }

}
const setTolocalStorage=(name,price)=>{
    const cards=getFromLocalStorage()
    cards[name]=price;
    const card=JSON.stringify(cards)
    localStorage.setItem("card",card)
}

const getFromLocalStorage=()=>{
    let cards ={}
    const getcards =localStorage.getItem("card")
    if(getcards){
        cards=JSON.parse(getcards)
    }
    return cards
}