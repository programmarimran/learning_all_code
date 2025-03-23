
export default function Sport ({name,id}){
  if(name){
    return(
        <div>
            <h1>Name: Md {name}</h1>
            <h3>MY id is :{id}</h3>
        </div>
    )
  }
  else{
    return(
        <p>is not showing but possible</p>
    )
  }

}
