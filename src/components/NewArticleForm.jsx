import { useState } from 'react'


const NewArticleForm = ({onSubmitArticleHandler, user}) => {
    const [newArticle, setNewArticle] = useState({})

 
   

    const titleChangeHandler = (event) => {
        setNewArticle({
            ...newArticle,
            title: event.target.value
        })
    }

    const topicChangeHandler = (event) => {
        setNewArticle({
            ...newArticle,
            topic: event.target.value
        })
    }

    const bodyChangeHandler = (event) => {
        setNewArticle({
            ...newArticle,
            body: event.target.value
        })
    }

    const imgURLChangeHandler = (event) => {
        setNewArticle({
            ...newArticle,
            article_img_url: event.target.value
        })
    }

    const usernameChangeHandler = () => {
        setNewArticle({
            ...newArticle,
            author: user
        })
    }

   

    return (
        <div>
        <form onSubmit={() => {onSubmitArticleHandler(event, newArticle)}}>
            <label htmlFor="username">username</label>
            <input type="text" name="username" id="username" onChange={usernameChangeHandler} value={user} readOnly/>

            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" onChange={titleChangeHandler}/>

            <label htmlFor="topic">Topic</label>
            <input type="text" name="topic" id="topic" onChange={topicChangeHandler}/>

            <label htmlFor="article_img_url">Img URL</label>
            <input type="text" name="article_img_url" id="article_img_url" onChange={imgURLChangeHandler}/>
            <br />
            <br />

            <label htmlFor="body">Body</label>
            <textarea name="body" id="body" cols="30" rows="10" onChange={bodyChangeHandler}></textarea>

            <br />

            <button type="submit">submit</button>
        </form>
    </div>
    )
}
export default NewArticleForm;