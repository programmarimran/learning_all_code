import { use, useState } from "react"
import Bottle from "./bottle/bottle"
import './bottles.css'

export const Bottles=({bottlesPromise})=>{
    const  bottles=use(bottlesPromise)

    const [count,setCount]=useState(0)
    const handleCount=()=>{
        setCount(count+1)
    }
    
    return(
        <>
        <h1>Added : {count} </h1>
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