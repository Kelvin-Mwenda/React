import {useState} from 'react'

function MyComponent(){

    const [name, setName] = useState('Guest')
    const [age, setAge] = useState(0)
    const [isEmployed, setisEmployed] = useState(false)

    const updateName = () => {
        setName('Chocs')
    }

    const updateAge = () => {
        setAge(25)
    }

    const incrementAge = () => {
        setAge(age + 1)
    }

    const updateisEmployed = () => {
        setisEmployed(!isEmployed)
    }

    return(
        <>
            <p>Name: {name}</p>
            <button className="counter-button" onClick={updateName}>Set Name</button>
            <p>Age: {age}</p>
            <button className="counter-button" onClick={updateAge}>Set Age</button>
            <button className="counter-button" onClick={incrementAge}>Increment Age</button>
            <p>You are employed: {isEmployed ? "Yes" : "No"}</p>
            <button className="counter-button" onClick={updateisEmployed}>Employed</button>
        </>
    )
}

export default MyComponent; 
