import { useLoaderData } from "react-router-dom"

export default function FutureProjects() {
    const futureProjects = useLoaderData()

    return (
        <>
            <h1>Future Projects</h1>
            <div className="projects">
                {futureProjects.map(project => (
                    <li key={project.id} to={`/futureProjects/${project.id}`} style={{ backgroundImage: `url(../src/assets/${project.image})`}}>
                        <h2>{project.name}</h2>
                        <p>{project.description}</p>
                        <p><i style={{color:"white"}}> {project.location}</i></p>
                        <p><i style={{color:"white"}}> {project.plannedStartDate}</i></p>
                        <p><i style={{color:"white"}}>Goal Amount: {project.goalAmount}</i></p>
                        <p><i style={{color:"white"}}>Expected volunteers: {project.expectedVolunteers}</i></p>
                    </li>
                ))}
            </div>
        </>
        
    )
}


//loader function
export const futureProjectsLoader = async () => {
    const res = await fetch('http://localhost:4000/futureProjects')

    return res.json()
}