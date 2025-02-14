//useEffect() = React Hook that tells React DO SOME CODE WHEN( pick one):
//              This component re-renders
//              This coomponent mounts
//              The statet of a value changes

//useEffect(function, [dependencies])

//1. useEffect(() => {})            Runs after every re-render
//2. useEffect(() => {}, [])        Runs only on mount
//3. useEffect(() => {}, [value])   Runs on mount + when value changes

//USES
//#1 Event Listeners
//#2 DOM Manipulation
//#3 Subscriptions (real-time updates)
//#4 Fetching data from  an API
//#5 Cleaning up when a component unmounts

import {useState, useEffect} from 'react'

function Component() {

    const [count, setCount] = useState(0)
    const [color, setColor] = useState("green")
    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)

    useEffect(() => {
        window.addEventListener("resize", handleResize)
        console.log("Event Listener Added")
        return () => {
            window.removeEventListener("resize", handleResize)
            console.log("Event Listener Removed")
        }
    },[width, height])

    function handleResize(){
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }

    useEffect(() => {
        document.title = `Count: ${count} ${color}`
        console.log('useEffect added!')
    },[count, color])

    useEffect(() => {

    })

    function addCount(){
        setCount(c => c + 1)
    }

    function subtractCount(){
        setCount(c => c - 1)
    }

    function resetCount(){
        setCount(0)
    }

    function changeColor(){
        setColor(c => c === "green" ? "red" : "green")
    }

    return(
        <>
            <p style={{color: color}}>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={resetCount}>Reset</button>
            <button onClick={subtractCount}>Subtract</button>
            <button onClick={changeColor}>Color</button>

            <p>Width: {width}</p>
            <p>Height: {height}</p>
        </>
    )
}
export default Component