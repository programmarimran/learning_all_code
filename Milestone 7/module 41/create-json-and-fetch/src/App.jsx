
import { Suspense } from 'react'
import './App.css'
import { Bottles } from './bottles/bottles'

const bottles=fetch("../public/bottle.json").then(res=>res.json())

function App() {
  return (
    <>
    <h3>create json and fetch json</h3>
    <Suspense fallback={<h3>bottle is pending....</h3>}> 
      <Bottles bottles={bottles}></Bottles>
    </Suspense>

    </>
  )
}

export default App
