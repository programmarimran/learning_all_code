import { use } from "react"
import Comment from './comment'

export default function CommentFetch({commentFetchApi}){
    const saveComment = use(commentFetchApi)
    // console.log(saveComment)
    return(
        <>
        <div className="card">
        {
            saveComment.map(comment=><Comment key={comment.id} comment={comment}></Comment>)
        }
        </div>
        </>
    )
}

