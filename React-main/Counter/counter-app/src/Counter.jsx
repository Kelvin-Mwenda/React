import { useState } from 'react'

export default function Counter() {
    const [count,setCount] = useState(0)

    function incCount(){
        setCount(count => count +=1 )
    }

    function resetCount(){
        setCount(0)
    }

    function decCount(){
        setCount(count => count -= 1)
    }

    return (
        <>
            <div className="counter">
                <h1 className="title">Counter</h1>

                <div className="count">
                    {count}
                </div>

                <div className="buttons">
                    <button onClick={incCount} className="button">Increment</button>
                    <button onClick={resetCount} className="button">Reset</button>
                    <button onClick={decCount} className="button">Decrement</button>
                </div>
            </div>
        </>
    )
}
