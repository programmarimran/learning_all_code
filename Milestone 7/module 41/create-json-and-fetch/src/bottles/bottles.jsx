import { use, useEffect, useState } from "react"
import Bottle from "./bottle/bottle"
import './bottles.css'
import { getFromLocalStorage, removeFromLocalStorage } from "../utilities/localstorage"
import SelectedBottle from "./selectedBottle/selectedBottle"

export const Bottles=({bottlesPromise})=>{
    const  bottles=use(bottlesPromise)
    const [count,setCount]=useState([])
    useEffect(()=>{
        const storeBottles=getFromLocalStorage()
        let finalcardBottle=[]
        for(const id of storeBottles){
            // console.log(id)
            const cardBottle=bottles.find(btlid=>btlid.id===id)
        if(cardBottle){
            finalcardBottle.push(cardBottle)
        }
            
        }
        setCount(finalcardBottle)
    },[bottles])
    const handleCount=(bottle)=>{
    //    const filteredBottle=count.filter(bottlF=>bottlF!==bottle)
    //    console.log(filteredBottle)
        const newBottle=[...count,bottle]
        setCount(newBottle)
    }
    const handleRemove=(id)=>{
        const currentBottle=count.filter(bottle=>bottle.id!==id)
        setCount(currentBottle)
        removeFromLocalStorage(id)
    }
    return(
        <>
        <h1>Added : {count.length} </h1>
        <div className="selected-card-container">
        {
            count.map(selectedBottle=><SelectedBottle  
                selectedBottle={selectedBottle} 
                handleRemove={handleRemove}
                key={selectedBottle.id}></SelectedBottle>)
        }
        </div>
      <div className="card-container">
      {
            bottles.map(bottle=><Bottle 
                handleCount={handleCount} 
                key={bottle.id} 
                bottle={bottle}></Bottle>)
        }
      </div>
        </>
    )
}