import Counter from './counter' 
import './App.css'

function App() {
  function Click2(){
    alert('click2' )
  }
  const click3=(id)=>{
    alert("click3 "+id)
  }

 return(
<>
<Counter></Counter>
<br />
<button onClick={()=>{alert("click 1")}}>click 1</button>

<button onClick={Click2}>click 2</button>
<button onClick={()=>click3(5)}>click 3</button>  {/*ekhane function express kora hoise jar dara argument pass kora jaitase */}
</>

 )
}

export default App
