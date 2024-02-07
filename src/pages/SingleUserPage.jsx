import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getSingleUser } from "../utils/fetch";

const SingleUserPage = () => {
    const [singleUser, setSingleUser] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const {username} = useParams();
    console.log(username)

    useEffect(() => {
        getSingleUser(username).then((response) => {
            console.log(response)
            setSingleUser(response.data)
            setIsLoading(false)
        })
    }, [])

    if (isLoading) return <p>Loading...</p>
    return (
        <div>
            <h1>{singleUser.username}</h1>
            <img src={singleUser.avatar_url} alt="" />
        </div>
    )
}

export default SingleUserPage;