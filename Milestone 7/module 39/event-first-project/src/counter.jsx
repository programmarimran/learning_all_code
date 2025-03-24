import { useState } from "react"

export default function Counter(){
    const [state,counter]=useState(0)
    function handleClick(){
        const con=state+1
        counter(con)
    }
    const style ={
        border:'2px solid green'
        
    }
    return(
        <div style={style}>
            <h1>count :{state} </h1>
            <button onClick={handleClick}>add</button>

        </div>
    )
}