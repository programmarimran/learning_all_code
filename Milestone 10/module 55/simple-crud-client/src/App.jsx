
import { use } from 'react'
import './App.css'
import Users from './conpunents/Users'

const userPromise=fetch("http://localhost:3000/users").then(res=>res.json())

function App() {
const userdata=use(userPromise)  

  return (
    <>
   
      <h1 className=' text-4xl font-bold text-center'>Simple crud Operation</h1>
      <Users userdata={userdata}></Users>
     </>
  )
}

export default App
