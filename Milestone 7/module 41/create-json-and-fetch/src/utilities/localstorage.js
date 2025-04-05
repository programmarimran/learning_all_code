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