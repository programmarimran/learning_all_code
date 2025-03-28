import { Suspense } from "react";
import PostChild from "./post";

export default  function PostFetch (){
    const postFetch =async()=>{
        const response=await fetch("https://jsonplaceholder.typicode.com/posts")
        return response.json();
    }
    const fetchPost=postFetch()
    return(
        
        <>
       <h1 className="bg-red-600 text-black text-start">post:</h1>
       <Suspense fallback={<h1>loading......</h1>}>
       <PostChild post={fetchPost}></PostChild>
       </Suspense>
        </>
    )
}