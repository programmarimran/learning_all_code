import './App.css'
export default function Object({name}){
    return(
        < >
       <div className='style'>
       <h1>My name is : {name.name}</h1>
       <p>My age is : {name.age}</p>
       </div>
        </>
    )
}