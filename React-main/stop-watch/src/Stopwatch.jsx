import { useRef, useState, useEffect } from "react";
import './Stopwatch.css'


function Stopwatch(){
    const [isRunning, setIsRunning] = useState(false)
    const [elapsedTime, setElapsedTime] = useState(0)
    const intervalIdRef = useRef(null)

    const startTimeRef = useRef(0)

    useEffect(() => {
        if(isRunning) {
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current)
            }, 10)
        }

        return() => {
            clearInterval(intervalIdRef.current)
        }
    },[isRunning])

    function start(){
        setIsRunning(true)
        startTimeRef.current = Date.now() - elapsedTime
        console.log(startTimeRef.current)
    }

    function stop(){
        setIsRunning(false)
    }

    function reset(){
        setElapsedTime(0)
        setIsRunning(false)
    }

    function formatTime(){
        let hours = Math.floor(elapsedTime / (1000 * 60 * 60))
        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60)
        let seconds = Math.floor(elapsedTime / (1000) % 60)
        let milliseconds = Math.floor(elapsedTime % 1000 / 10)
        
        if(milliseconds < 10) milliseconds = `0${milliseconds}`
        if(seconds < 10) seconds = `0${seconds}`
        if(minutes < 10) minutes = `0${minutes}`
        if(hours < 10) hours = `0${hours}`

        return `${hours}:${minutes}:${seconds}:${milliseconds}`
    }


    return(
        <>
            <h1>Stopwatch</h1>
            <div className="stopwatch">
                <div className="display">
                    {formatTime()}
                </div>
                <div className="controls">
                    <button onClick={start} className="start-button">Start</button>
                    <button onClick={stop} className="stop-button">Stop</button>
                    <button onClick={reset} className="reset-button">Reset</button>
                </div>
            </div>
        </>
    )
}

export default Stopwatch