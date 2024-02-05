const CommentList = ({comments}) => {
    return (
        <>
        <h2>Comments</h2>
        {comments.map((comment) => {
            return(
                <div style={{border: "1px solid black", borderRadius: "5px", padding: "5px", margin: "5px"}} key={comment.comment_id}>

                    <p>{comment.body}</p>
                    <p>Author: {comment.author}</p>
                    <p>Votes: {comment.votes}</p>
                </div>
            ) 
        })}
        </>
        
    )
}

export default CommentList;