export default function Album({album}){
    const {title,userId}=album
    return(
        <>
        <div className="card">
            <h1>{userId}: {title} </h1>
        </div>
        </>
    )
}