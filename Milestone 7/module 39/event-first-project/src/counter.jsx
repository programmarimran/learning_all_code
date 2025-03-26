import { useState } from "react"

export default function Counter(){
    const [state,counter]=useState(0)
    const [stateSix ,counterSix]=useState(0)
    const [stateFour,counterfour]=useState(0)
    function handleSix(){
        const countSix =stateSix+1;
        counterSix(countSix)
        const six =state+6;
        counter(six)
    }
    function handleFour(){
        const countFour =stateFour+1;
        counterfour(countFour)
        const four=state+4;
        counter(four)
    }
    function handleClick(){
        const con=state+1
        counter(con)
    }
    function handleRemove(){
        const remve =state-1;
        counter(remve)
    }
   
    const style ={
        border:'2px solid green'
        
    }
    return(
        <div style={style}>
            {state>50 && <h4>score 50++</h4>}
            <h3>Total six: {stateSix} </h3> 
            <h3>Total Four: {stateFour} </h3>
            <h1>count : {state} </h1>
            <button onClick={handleClick}>add</button>
            <button onClick={handleSix}>add 6</button>
            <button onClick={handleFour}>add 4</button><br /><br />
            <button onClick={handleRemove}>1 remove</button>

        </div>
    )
}


