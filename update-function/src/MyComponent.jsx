//updater function = A function passed as an argument to setState() ususally eg. setYear(arrow function)
//Allow for safe updates based on previous state not Current state. 
//Used with multiple state updates and asynchrounous functions. 
//Good practice to use updater functions
import { useState } from "react";

function MyComponent(){
    const [count,setCount] = useState()

    function increment(){
        setCount(c => c + 1)
    }

    function decrement(){
        setCount(c => c - 1)
    }
    
    function reset(){
        setCount(0)
    }

    return(
        <>
            <div>
                <p>Count: {count}</p>
                <button onClick={increment}>Increment</button>
                <button onClick={reset}>Reset</button>
                <button onClick={decrement}>Decrement</button>
            </div>
        </>
    )
}
export default MyComponent