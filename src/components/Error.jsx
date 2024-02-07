import { Link } from "react-router-dom"

const Error = (props) => {
    return (
        <div>
            <h1>{props.error.status}</h1>

            <h2>{props.error.msg}</h2>


            <Link to='/'>
                
                <button>Go Home</button>
            
            </Link>
        </div>
    )
}

export default Error