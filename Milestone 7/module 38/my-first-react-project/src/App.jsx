
import './App.css'

function App() {
  

  return (
    <>
      <h1>Md Imran Hasan</h1>
      <Sport></Sport>
      <Person></Person>
      <Device name="Imran" tech="facebook" ></Device>
      <Device name="Parves" tech="Youtube"></Device>
      
    </>
  )
 
}
function Sport (){
   
  return(
    <p className='style'>The name of my native village is charabari .It is on the district of tangail.It has concoured time and distance.</p>
  )

}
const style1 ={
  color: 'red'
}
function Person (){
  return(
    <div style={style1}>
      <ul>
        <li>Md Imran Hasan</li>
        <li>Mst Shilpi Akter</li>
        <li>Md Kalam</li>
        <li>Md Anisul Islam</li>
      </ul>
    </div>
  )
}
function Device (propers){
  console.log(propers)
 return(
  <>
  <h1>Developer:{propers.name}</h1>
  <p>Technology:{propers.tech}</p>
  </>
 )
}
export default App