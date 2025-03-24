import Object from "./object"
function App() {
  const persons=[
    { id:1,name:"Imran",age:20},
    { id:2,name:"Parves",age:21},
    { id:3,name:"Ferdous",age:22}

  ]
  return(
    <>
    {
      persons.map(person=><Object key={person.id} name={person}></Object>)
    }
    </>
  )
}

export default App
