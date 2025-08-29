
import { useRef } from 'react'
import './App.css'
import { useState } from 'react'

function App() {
  // ***************1****************
const handleForm1=(event)=>{
event.preventDefault()
console.log(event.target.name.value)
}
// *****************2********************
const buttonRef=useRef(null)
const handleForm2=(event)=>{
event.preventDefault()
console.log(buttonRef.current.value)
}
// ****************3******************
const [state, setState]=useState('')
const handleClick=(e)=>{
  e.preventDefault()
  
}
console.log(state)
  return (
    <div>
      {/* ********************uncontrol compunent level 1******************** */}
      <form onSubmit={handleForm1}>
        <input className='input input-primary' type='text' placeholder='text here' name='name'></input>
        <br />
        <button className='btn btn-primary'>click</button>
      </form>
      {/* ****************uncontrol compunent level 2**************************** */}
        <input ref={buttonRef} className='input input-primary' type='text' placeholder='text here' name='name'></input>
        <br />
        <button onClick={handleForm2}  className='btn btn-primary'>click</button>
     {/* ***********************control compunent level 3************************* */}
     <form onSubmit={handleClick}>
        <input value={state} onChange={(e)=>setState(e.target.value)} className='input input-primary' type='text' placeholder='text here' name='name'></input>
        <br />
        <button type="submit" className='btn btn-primary'>click</button>
      </form>
    </div>
  )
}

export default App
