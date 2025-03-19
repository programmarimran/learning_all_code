document.getElementById("addbtn").addEventListener("click",()=>{
    let name =document.getElementById("name").value;
    let quantity =document.getElementById("quantity").value;
     
    localStorage.setItem("name",name)
    localStorage.setItem("quantity",quantity)
    

})


const getName =localStorage.getItem("name")
const getQuantity =localStorage.getItem("quantity")

const container =document.getElementById("container")
const li =document.createElement("li")
li.innerText=`${getName}  ${getQuantity}`
container.appendChild(li)
name=``
     quantity=``

