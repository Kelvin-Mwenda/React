import { Link } from "react-router-dom"

export default function NotFound() {
    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <p>The page you&#39;re looking for doesn&#39;t exist.</p>
            <p>Go to the <Link to="/">Homepage</Link>.</p>
        </div>
    )
}
