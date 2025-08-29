const getFromLocalStorage=()=>{
    const saveItemString=localStorage.getItem("card")
    if(saveItemString){
        const saveItem=JSON.parse(saveItemString)
        return saveItem
    }
    else{
        return []
    }
}
const addToCardLocalStorage=(id)=>{
    const card=getFromLocalStorage()
    console.log(card)
    const findCard=card.find(item=>item===id)
    // console.log(findCard)
    if(findCard){
        console.log("doplicate found")
        return 
    }
    card.push(id)
    setToLocalStorage(card)
}
const setToLocalStorage=(card)=>{
    const cardStringfy=JSON.stringify(card)
    cardStringfy&&localStorage.setItem("card",cardStringfy)
}
const removeFromLocalStorage=(id)=>{
    const totalBottle=getFromLocalStorage()
    const currentBottle=totalBottle.filter(bottleId=>bottleId!==id)
    setToLocalStorage(currentBottle)
}
export {getFromLocalStorage,addToCardLocalStorage,removeFromLocalStorage}