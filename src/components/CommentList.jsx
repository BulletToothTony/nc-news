const CommentList = ({comments, id}) => {
    return (
        <div>
        <h2>Comments</h2>
        {comments.map((comment) => {
            return(
                <div key={comment.comment_id} style={{border: "1px solid black", borderRadius: "5px", padding: "5px", margin: "5px"}} key={comment.comment_id}>

                    <p>{comment.body}</p>
                    <p>Author: {comment.author}</p>
                    <p>Votes: {comment.votes}</p>
                </div>
            ) 
        })}
        </div>
        
    )
}

export default CommentList;