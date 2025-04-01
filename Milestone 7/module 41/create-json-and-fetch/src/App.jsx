
import { Suspense } from 'react'
import './App.css'
import { Bottles } from './bottles/bottles'

const bottlesPromise=fetch("https://raw.githubusercontent.com/ProgrammingHero1/awesome-water-bottles/refs/heads/main/public/bottles.json").then(res=>res.json())

function App() {
  return (
    <>
    <h3>create json and fetch json</h3>
    <Suspense fallback={<h3>bottle is pending....</h3>}> 
      <Bottles bottlesPromise={bottlesPromise}></Bottles>
    </Suspense>

    </>
  )
}

export default App
