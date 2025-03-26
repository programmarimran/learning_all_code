import { use } from "react";
import Post from "./post";

export default function FetchAPI({userData}){

 const data =use(userData)

    return(
        <>
        
        <div className="card">
        <h1>User:{data.length}</h1>
       {
        data.map(post=><Post key={post.id} post={post}></Post>)
       }
        </div>
        </>
    )
}