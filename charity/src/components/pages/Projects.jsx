import { useLoaderData,Link } from "react-router-dom"

export default function Projects() {
    const projects = useLoaderData()

    return(
        <>
            <h1>Completed Projects</h1>
            <div className="projects">
                {projects.map(project => (
                    <Link key={project.id} to={project.id.toString()} style={{ backgroundImage: `url(../src/assets/${project.image})`}}>
                        <h2>{project.name}</h2>
                        <p>{project.description}</p>
                        <p className="last-child">Status: {project.status}</p>
                    </Link>
                ))}
            </div>
        </>
    )
}

//loader function
export const projectsLoader = async () => {
    const res = await fetch('http://localhost:4000/projects')

    if(!res.ok){
        throw new Error('Could not find the projects...')
    }

    return res.json()
} 