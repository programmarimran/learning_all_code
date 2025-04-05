
import './App.css'

function App() {
const handleForm=(event)=>{
event.preventDefault()
console.log(event.target.name.value)
}

  return (
    <div>
      <form onSubmit={handleForm}>
        <input className='input input-primary' type='text' placeholder='text here' name='name'></input>
        <br />
        <button className='btn btn-primary'>click</button>
      </form>
    </div>
  )
}

export default App
