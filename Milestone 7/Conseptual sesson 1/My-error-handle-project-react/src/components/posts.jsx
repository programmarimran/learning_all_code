import { Suspense } from "react";
import PostChild from "./post";
import {ErrorBoundary} from "react-error-boundary";

export default  function PostFetch (){
    const postFetch =async()=>{
        const response=await fetch("https://jsonplaceholder.typicode.com/posts")
        return response.json();
    }
    const fetchPost=postFetch()
    return(
        
        <>
       
       <ErrorBoundary fallback={<h1>Error dorsi..</h1>} >

            <Suspense fallback={<h1>loading......</h1>}>
            <PostChild post={fetchPost}></PostChild>
            </Suspense>

       </ErrorBoundary>
       
        </>
    )
}


// // npm install react-error-boundary