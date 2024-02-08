import { useState } from "react"

const CommentList = ({comments, id, deleteCommentHandler, user}) => {

    const [showComments, setShowComments] = useState(true)

    const handleShowComments = () => {
        setShowComments(!showComments)
    }

    if (comments.length === 0) return <p>No comments yet!</p>

    return (
        <div>
        
        <h2>Comments</h2>

        <button style={{width:"250px"}} onClick={handleShowComments}>Show comments</button>
        <div>
            
        </div>
        {comments.map((comment) => {
            if (!showComments) return null
            return(
                <div key={comment.comment_id} style={{border: "1px solid black", borderRadius: "5px", padding: "5px", margin: "5px"}}>

                    <p>{comment.body}</p>
                    <p>Author: {comment.author}</p>
                    <p>Votes: {comment.votes}</p>
                    <p>Date: {comment.created_at}</p>
                    {user === comment.author && <button onClick={() => {deleteCommentHandler(comment.comment_id)}}>Delete comment</button>}
                </div>
            ) 
        })}
        </div>
       
        
    )
}

export default CommentList;