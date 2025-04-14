
import { useState } from 'react'
import './App.css'
import Catagorys from './Catagorys/Catagorys'
import DisplayCatagory from './DisplayCatagory/DisplayCatagory'

function App() {
 const [catagory,setCatagory]=useState("")
//  console.log(catagory)

  return (
    <div>
      <nav>
        <h1 title='Programmar International'>PI</h1>
         <div>
          <h1>Home</h1>
          <h1>Blog</h1>
         </div>
         <h1>About</h1>
      </nav>
      <div style={{margin:'120px',border:'4px solid red',padding:'8px', borderRadius:'16px'}}>
      <Catagorys setCatagory={setCatagory}></Catagorys>
      </div>
      <DisplayCatagory catagory={catagory}></DisplayCatagory>
    </div>
  )
}

export default App
