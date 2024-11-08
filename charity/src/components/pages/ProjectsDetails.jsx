import {  useLoaderData, useParams } from "react-router-dom"

export default function ProjectsDetails() {
    const project= useLoaderData()
    const { id } = useParams()

    return (
        <>
            <div className="projects-details">
                <h2>{project.name}</h2>
                {/* <img src={`./src/assets/${project.image}`} alt={project.name} className="projects-image" /> */}
                <p className="last-child">Description: {project.description}</p>
                <p className="last-child">Status: {project.status}</p>
                <p className="last-child">Location: {project.location}</p>
                <p className="last-child">Start Date: {project.startDate}</p>
                <p className="last-child">End Date: {project.endDate}</p>
                <p className="last-child">Goal Amount: {project.goalAmount}</p>
                <p className="last-child">Raised Amount: {project.raisedAmount}</p>
                <p className="last-child">Volunteers: {project.volunteers}</p>
            </div>
            <p className="details-id">{id}</p>
        </>
        
    )
}

//loader function
export const ProjectDetailsLoader = async ({params}) => {
    const { id } = params
    const res = await fetch('http://localhost:4000/projects/' +  id )

    if(!res.ok){
        throw new Error('Could not fetch the project details...')
    }

    return res.json()
}
