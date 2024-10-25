import ComponentD from './ComponentD.jsx'
import ComponentC from './ComponentC.jsx'

function ComponentB(){


    return(
        <>
            <div className="box">
                <h1>Component B</h1>
                <ComponentC/>
                <ComponentD/>
            </div>
        </>
    )
}
export default ComponentB