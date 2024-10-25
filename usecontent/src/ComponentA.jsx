import {useState, createContext} from 'react'
import ComponentB from './ComponentB.jsx'
import ComponentC from './ComponentC.jsx'

export const UserContext = createContext()

function ComponentA(){
    const [user] = useState("Chocs")


    return(
        <>
            <div className="box">
                <h1>Component A</h1>
                <h2>{`Hello ${user}`}</h2>
                <UserContext.Provider value={user}>
                    <ComponentB/>
                    <ComponentC/>
                </UserContext.Provider>
            </div>
        </>
    )
}
export default ComponentA