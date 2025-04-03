import { use } from "react"

export default function PostChild({post}){
    const postData=use(post)
    console.log(postData)
    return(
        <>
        <div>
            <h3 className="">Post: {postData.length}</h3>
        </div>
        </>
    )
}