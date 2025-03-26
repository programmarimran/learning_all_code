export default function Comment({comment}){
   const {email,body}=comment
    return(
        <>
        <div className="card">
            <h1>{email}</h1>
            <p>{body}</p>
        </div>
        </>
    )
}