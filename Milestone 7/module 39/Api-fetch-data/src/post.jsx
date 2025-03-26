export default function Post({post}){
const {name,email}=post
    return(
        < >
       <div className="card">
       <h1>Name: {name}</h1>
       <h3>Email: {email}</h3>
       </div>
        </>
    )
}