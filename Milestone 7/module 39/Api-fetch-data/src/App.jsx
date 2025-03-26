import { Suspense } from 'react'
import './App.css'
import FetchAPI from './fetchAPI'
import CommentFetch from './commentFetch'
import AlbumFetch from './albumFetch'

const commentFetch=async()=>{
  const response =await fetch("https://jsonplaceholder.typicode.com/comments")
  return response.json()
}

const userFetch =fetch("https://jsonplaceholder.typicode.com/users")
.then((res)=>res.json());

const albumFetch=async()=>{
  const response=await fetch("https://jsonplaceholder.typicode.com/albums")
  return response.json();
}

function App() {
 const commentFetchApi=commentFetch()
 const albumFetchApi=albumFetch()
  return(

    <>
      <Suspense fallback={<h1>Loading.....</h1>}>
      <FetchAPI userData={userFetch}></FetchAPI>
    </Suspense>

  <Suspense fallback={<p>Album is loading......</p>}>
    <AlbumFetch albumFetchApi={albumFetchApi}></AlbumFetch>
  </Suspense>

  
    <Suspense fallback={<p>Comment is loading......</p>}>
    <CommentFetch commentFetchApi={commentFetchApi}></CommentFetch>
    </Suspense>

    
    </>
  )
}

export default App



