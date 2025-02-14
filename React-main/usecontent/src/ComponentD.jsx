import { useContext } from "react"
import { UserContext } from "./ComponentA.jsx"

function ComponentD(){
    const user = useContext(UserContext)

    return(
        <>
            <div className="box">
                <h1>Component D</h1>
                <h4>{`Bye ${user}!`}</h4>
            </div>
        </>
    )
}
export default ComponentD