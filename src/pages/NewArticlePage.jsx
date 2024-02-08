import NewArticleForm from "../components/NewArticleForm";
import { postNewArticle } from "../utils/post";
import { UserContext } from '../contexts/User'
import { useContext, useState } from "react";
import Error from "../components/Error";

const NewArticlePage = () => {
    const [error, setError] = useState();

    const {user} = useContext(UserContext)

    console.log(user)

    const onSubmitArticleHandler = (event, newArticle) => {
        event.preventDefault()

        console.log(newArticle)

        postNewArticle(newArticle, user).catch((err) => {
            console.log(err)
            setError({msg: err.response.data.msg, status: err.response.status})
        })

        // when send the request include user and newArticle
        // after posting is done forward user to new article
    }

    
    return (
        <div>
            <h1>new article</h1>
            <NewArticleForm user={user} onSubmitArticleHandler={onSubmitArticleHandler}/>
            {error && <Error error={error}/>}
        </div>

    )
}

export default NewArticlePage;