import './App.css'
import Sport from './New';
function App() {
 return(
  <>
    <Person name="Imran"></Person>
    <Sport name="Imran" id="18"></Sport>
  </>
 )
}

function Person ({name}){
if(name){
  return(
    <div className='style'>
      <h1>My name is :{name}</h1>
      <ul>
        <li>First item:</li>
      </ul>
    </div>
  )
}

}

export default App
