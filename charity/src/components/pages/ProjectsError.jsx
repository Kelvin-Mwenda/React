import { Link, useRouteError } from "react-router-dom"


export default function ProjectsError() {
    const error = useRouteError()
    
    return (
        <div>
            <h1>Fetching Data Error</h1>
            <p>{error.message}</p>
            <p>Go to the <Link to="/actions/projects">Projects</Link>.</p>
        </div>
    )
}
