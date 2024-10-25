//useState() = Re-renders the component when the state value changes.

//useRef() =  "Use Reference" Does not cause re-renders when the value changes. when you want a component to             "remember" some information but you don't want that information to trigger new renders.
//      1. Accessing/Interacting with DOM elements
//      2. Handling Focus, Animations and Transitions
//      3. Managing Timers and Intervals
import {useRef, useEffect} from 'react'

function MyComponent(){
    const inputRef1 = useRef(null)
    const inputRef2 = useRef(null)
    const inputRef3 = useRef(null)

    function handleClick1(){
        inputRef1.current.focus()
        inputRef1.current.style.backgroundColor = "yellow"
        inputRef2.current.style.backgroundColor = ""
        inputRef3.current.style.backgroundColor = ""
    }

    function handleClick2(){
        inputRef2.current.focus()
        inputRef1.current.style.backgroundColor = ""
        inputRef2.current.style.backgroundColor = "yellow"
        inputRef3.current.style.backgroundColor = ""
    }

    function handleClick3(){
        inputRef3.current.focus()
        inputRef1.current.style.backgroundColor = ""
        inputRef2.current.style.backgroundColor = ""
        inputRef3.current.style.backgroundColor = "yellow"
    }


    useEffect(() => {
        console.log('Component Rendered!!')
    })


    return(
        <>
            <h1>useRef() React Hook</h1>
            <input ref={inputRef1}/>
            <button onClick={handleClick1}>
                Click me😍
            </button><br/>
            <input ref={inputRef2}/>
            <button onClick={handleClick2}>
                Click me😍
            </button><br/>
            <input ref={inputRef3}/>
            <button onClick={handleClick3}>
                Click me😍
            </button>
        </>
    )
}
export default MyComponent