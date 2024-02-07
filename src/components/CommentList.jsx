const CommentList = ({comments, id, deleteCommentHandler, user}) => {

    return (
        <>
        
        <h2>Comments</h2>
        {comments.map((comment) => {
            return(
                <div key={comment.comment_id} style={{border: "1px solid black", borderRadius: "5px", padding: "5px", margin: "5px"}}>

                    <p>{comment.body}</p>
                    <p>Author: {comment.author}</p>
                    <p>Votes: {comment.votes}</p>
                    {user === comment.author && <button onClick={() => {deleteCommentHandler(comment.comment_id)}}>Delete comment</button>}
                </div>
            ) 
        })}
        </>
       
        
    )
}

export default CommentList;