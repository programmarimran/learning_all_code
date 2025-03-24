import Arry from "./arry"


function App() {
 let friends =["imran","parves","ferdoud","tofajjall","masud"]
 return(
  <>
  {
    friends.map((friend,index)=><Arry age={index} key={index}  name={friend}></Arry>)
  }
  </>
 )
}

export default App
